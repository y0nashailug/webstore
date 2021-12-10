import apiService from "./apiService";
import { handleError } from "./handleErrorService";
import { tokenService, userInfoService } from "./storageService";

const userService = {
  async login(login) {
    const requestData = {
      method: "POST",
      url: "auth/login",
      data: login,
    }

    try {
      const { data } = await apiService.customRequest(requestData)

      tokenService.saveToken(data.jwt)
      apiService.setHeader()
      userInfoService.saveUser(data.user || {})

      return {
        token: data.jwt,
        user: data.user,
      };
    } catch (error) {
      return handleError(error)
    }
  },
  async getUser() {
    const requestData = {
      method: "get",
      url: "api/user",
      data: {},
    };

    try {
      const { data } = await apiService.customRequest(requestData)
      return data
    } catch (error) {
      return handleError(error)
    }
  },
};

export { userService };
