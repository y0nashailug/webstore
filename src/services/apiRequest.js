import apiService from './apiService';
import { handleError } from './handleErrorService';

const apiRequest = {
  async request(params) {
    const requestData = {
      url: params.url,
      method: params.method,
      data: params.data
    }

    try {
      const data = await apiService.customRequest(requestData)
      return data
    } catch (error) {
      return handleError(error);
    }
  },

  async getApplication(params) {
    const requestData = {
      url: params.url,
      method: params.method,
      data: params.data,
      responseType: params.responseType
    }

    try {
      const data = await apiService.customRequest(requestData)
      return data;
    } catch (error) {
      return handleError(error);
    }
  },

  async upload(params) {
    const requestData = {
      method: params.method,
      headers: { 'Content-Type': 'multipart/form-data' },
      url: params.url,
      data: params.data
    }

    try {
      const { data } = await apiService.customRequest(requestData)
      return data
    } catch (error) {
      return handleError(error)
    }
  },
};

export default apiRequest;