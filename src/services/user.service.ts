import { adminEndpoints } from '../constants/endpoints';
import { IResponse } from '../types/response.types';
import { axiosInstance } from './axios.service';

export const getUser = async (): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(adminEndpoints.GET_USER);

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

