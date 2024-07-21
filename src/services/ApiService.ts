import axios, { AxiosInstance, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  /**
   * Metodo GET
   *
   * @param {string} endPoint
   * @return {*}  {Promise<AxiosResponse<any, any>>}
   */
  get(endPoint: string): Promise<AxiosResponse<any, any>> {
    return apiClient.get(`${endPoint}`);
  },
};
