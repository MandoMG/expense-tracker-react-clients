import Axios from 'axios';

const HOST = __DEV__
  ? 'http://localhost:5500/'
  : 'https://mg-expense-tracker-server.herokuapp.com/';

export class AxiosClient {
  private static instance: AxiosClient | null = null;

  private constructor() {
    // Private constructor to prevent external instantiation.
  }

  static getInstance(): AxiosClient {
    if (!AxiosClient.instance) {
      AxiosClient.instance = new AxiosClient();
    }

    return AxiosClient.instance;
  }

  async getRequest<T>(route: string, data?: any) {
    const response = await Axios.get(`${HOST}${route}`, data);
    return response.data as T;
  }

  async postRequest<T>(route: string, data?: any) {
    await Axios.post(`${HOST}${route}`, data);
  }

  async putRequest<T>(route: string, data?: any) {
    await Axios.put(`${HOST}${route}`, data);
  }
}
