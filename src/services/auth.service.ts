import { adminEndpoints } from "../constants/endpoints";
import { IResponse } from "../types/response.types";
import { axiosInstance } from "./axios.service";

export const userLogin = async (
  email: string,
  password: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.post(adminEndpoints.LOGIN, {
      email,
      password,
    });

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};
