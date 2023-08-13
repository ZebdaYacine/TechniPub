import { createStore } from "vuex";
import VuexPersist from "vuex-persist";

const store = createStore({
  state() {
    return {
      user: {
        name: "",
        id: "",
        isLogged: false,
        privilage: "",
      },
    };
  },
  mutations: {
    changeLoginStatus(state, payload) {
      state.user.isLogged = payload;
    },
    setUser(state, payload) {
      state.user = payload;
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
  },
});

export default store;
