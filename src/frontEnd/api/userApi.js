import api from "../utils/config";
const userApi = {
  async getApi(url, user) {
    let resulet = "";
    await api
      .post(url, user)
      .then((response) => {
        resulet = {
          statusText: response.statusText,
          data: response.data,
        };
      })
      .catch((error) => {
        resulet = {
          statusText: error.code,
          error: error.response.data.message,
        };
      });
    return resulet;
  },

  async register(user) {
    return await this.getApi("/users/register", user);
  },
  async login(user) {
    return await this.getApi("/users/login", user);
  },
};

export default userApi;
