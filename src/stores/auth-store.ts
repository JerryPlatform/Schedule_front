import { defineStore } from 'pinia';
import { Nullable } from "src/common/type/Nullable";
import decodeToken from 'src/common/functions/DecodeToken';
import JwtService from 'src/common/jwt.service';
import axios from 'axios';
import apiController from 'src/common/functions/api.control';

export interface AuthState {
  userToken:      Nullable<string>;
  logoutLimited:  number;
}

interface LoginCredentials {
  account:        string
  password:       string
}

interface LoginResponse {
  token:          Nullable<string>
}

export const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    userToken: null,
    logoutLimited: 3, // hour
  } as AuthState),
  getters: {
    isLogin(): boolean {
      return !!this.userToken;
    },
    isValidity(): boolean {
      return (Date.now() / 1000) < (decodeToken().exp||0);
    }
  },
  actions: {
    login(credentials: LoginCredentials): Promise<LoginResponse> {
      return new Promise(resolve => {
        apiController('POST', 'v1/member/login', credentials)
          .then(({contents, response}: { contents: LoginResponse, response: any }) => {
            console.log(contents)
            switch (response.status) {
              case 401:
              case 402:
              case 433:
              case 434:
              case 435:
              case 500:
                resolve(contents);
                break;
              default:
                JwtService.saveToken(contents.token as string);
                this.userToken = contents.token;
                resolve(contents);
                break;
            }

            return false;
          })
      });
    },

    async logout() {
      this.userToken =  null;
      JwtService.destroyToken();
      return;
    },

    setHeaderAction(value: string) {
      axios.defaults.headers.common[
        "x-auth-token"
        ] = `${!value ? JwtService.getToken() : value}`;
    }
  },
});
