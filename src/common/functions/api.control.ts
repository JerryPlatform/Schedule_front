import axios from "axios";
import ApiService from "src/common/api.service";
import { API_URL } from "src/common/config";

/**
 * @param {'GET'|'POST'|'PUT'|'DELETE'} method
 * @param {'FARM'} server
 * @param {String} url
 * @param {Object | null} data
 * @param {'formData' | null} multipart
 */
async function apiController(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'REQUEST', url: string, data: any = null, multipart: 'formData' | null = null){
  ApiService.setHeader();

  switch (method) {
    case "GET":
      return await ApiService.get(url)
    case "POST":
      return await ApiService.post(url, data, multipart)
    case "PUT":
      return await ApiService.put(url, data, multipart)
    case "DELETE":
      return await ApiService.delete(url)
    case 'REQUEST':
      return await ApiService.request(url, data);
    default:
      alert("api method error");
  }
}

export default apiController;
