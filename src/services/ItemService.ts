import { AxiosResponse } from "axios";
import apiService from "@/services/ApiService";

export default {
  /**
   * Obtener todos los items
   *
   * @return {*}  {Promise<AxiosResponse<any, any>>}
   */
  getItems(): Promise<AxiosResponse<any, any>> {
    return apiService.get(`items/getAll`);
  },
};
