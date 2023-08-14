import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: {
        name: "",
        id: "",
        isLogged: false,
        privilage: "",
      },
      password: "",
    };
  },
  mutations: {
    changeLoginStatus(state, payload) {
      state.user.isLogged = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setPassword(state, payload) {
      state.password = payload;
    },
  },
  actions: {
    changeLoginStatusAction(context, payload) {
      context.commit("changeLoginStatus", payload);
    },
    setUserAction(context, payload) {
      context.commit("setUser", payload);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getPassword(state) {
      return state.password;
    },
  },
});

export default store;
