import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from './config';
import JwtService from './jwt.service';
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth-store';

axios.defaults.baseURL = API_URL;

const ApiService = {
  setHeader(token=null) {
    axios.defaults.headers.common[
      "x-auth-token"
      ] = `${!token ? JwtService.getToken() : token}`;
  },

  async get(url: string) {
    try {
      const response = await axios.get(`${url}`)
      return this.tokenController(response);
    } catch (error) {
      return this.errorCheckService(error);
    }
  },

  async post(url: string, params: any, type: 'formData'|null=null) {
    this.checkContentType(type, "post");

    try {
      const response = await axios.post(`${url}`, params);
      return this.tokenController(response);
    } catch (error) {
      return this.errorCheckService(error);
    }
  },

  async put(url: string, params: any, type: 'formData'|null=null) {
    this.checkContentType(type, "put");

    try {
      const response = await axios.put(`${url}`, params);
      return this.tokenController(response);
    } catch (error) {
      return this.errorCheckService(error);
    }
  },

  async delete(url: string) {
    try {
      const response = await axios.delete(url);
      return this.tokenController(response);
    } catch (error) {
      return this.errorCheckService(error);
    }
  },

  async request(url: string, config: AxiosRequestConfig) {
    const requestConfig = config;
    requestConfig.url = url;

    try {
      const response = await axios.request(requestConfig);
      return this.tokenController(response);
    } catch (error) {
      return this.errorCheckService(error);
    }
  },

  checkContentType(type: 'formData' | null, apiType: 'post' | 'put') {
    let contentType = typeof type === "string" && type !== null;

    if (contentType && type === "formData") {
      axios.defaults.headers[apiType]["Content-Type"] = "multipart/form-data"
    } else {
      axios.defaults.headers[apiType]["Content-Type"] = "application/json"
    }
  },

  errorCheckService(error: any) {
    switch(error?.response?.status as number) {
      case 401:
        const $store = useAuthStore();
        const $router = useRouter();

        $store.logout();
        $router.push({name: 'Login'});
        break;
      default:
        break;
    }
    return error;
  },

  tokenController(response: AxiosResponse) {
    JwtService.saveToken(response?.data?.response?.token||JwtService.getToken());
    this.setHeader(response?.data?.response?.token||null);
    return response.data;
  }
}

export default ApiService;
