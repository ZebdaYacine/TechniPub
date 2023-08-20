import api from "../utils/config";
const userApi = {
  getUser() {
    return {
      name: "Zebda Yacine",
      id: 1,
      isLogged: false,
      privilage: 111,
    };
  },
  async register(user) {
    try {
      const result = await api.post("/users/register", user);
      return result;
    } catch (error) {
      return { data: "", status: 500, error: error.message };
    }
  },
};

export default userApi;
