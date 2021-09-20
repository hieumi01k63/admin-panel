import axiosClient from "./axiosClient.js";

class UserApi {
  getNewUsers = (params) => {
    const url = "/users/random_user";
    return axiosClient.get(url, { params });
  };
}

const userApi = new UserApi();
export default userApi;
