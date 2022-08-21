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
  id:             Nullable<number>
  account:        Nullable<string>
  name:           Nullable<string>
  role:           Nullable<string>
  token:          Nullable<string>
  valid:          Nullable<boolean>
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
        apiController('POST', 'v1/login', credentials)
          .then(({contents, response}: { contents: LoginResponse, response: any }) => {
            switch (response.status) {
              case 401:
                alert("인증이 실패했습니다.");
                break;
              case 402:
                alert("계정이 잠겼습니다. 관리자에게 문의해주세요.");
                break;
              case 433:
                alert("로그인이 실패했습니다.");
                break;
              case 434:
                alert("접근 권한이 없습니다.");
                break;
              case 435:
                alert("존재하지 않은 사용자입니다.");
                break;
              case 500:
                alert("패스워드를 잘못 입력하셨습니다.");
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
