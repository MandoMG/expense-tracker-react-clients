import Axios from "axios";

const HOST = __DEV__ ? 'http://localhost:5500/' : 'https://mg-expense-tracker-server.herokuapp.com/';

const useAxios = () => {

  const getRequest = async <T>(route: string, data?: any) => {
    const response = await Axios.get(`${HOST}${route}`, data);
    return response.data as T;
  }

  const postRequest = async (route: string, data?: any) => {
    await Axios.post(`${HOST}${route}`, data);
  }

  const putRequest = async (route: string, data?: any) => {
    await Axios.put(`${HOST}${route}`, data);
  }

  return {
    getRequest,
    postRequest,
    putRequest
  }
};

export default useAxios;