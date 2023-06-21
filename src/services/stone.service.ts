import { stoneEndpoints } from '../constants/endpoints';
import { IResponse } from '../types/response.types';
import { IStone } from '../types/stone.types';
import { axiosInstance } from './axios.service';

export const getStoneByName = async (stoneName: string): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(stoneEndpoints.GET_STONE + stoneName);

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const getStonesByCategory = async (
  categoryName: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(
      stoneEndpoints.GET_STONES_BY_CATEGORY + categoryName
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const getStonesBySearchKey = async (
  searchKey: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(
      stoneEndpoints.SEARCH_STONES + searchKey
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const addStone = async (
  stoneInfo: IStone
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.post(
      stoneEndpoints.GET_STONE,
      stoneInfo
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};
