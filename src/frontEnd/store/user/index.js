import userGetters from "./getters";
import userActions from "./actions";
import userMutaions from "./mutation";
import UserStoreState from "./state";
import createPersistedState from "vuex-persistedstate";

const userModule = {
  namespaced: true,
  state: () => UserStoreState,
  getters: userGetters,
  mutations: userMutaions,
  actions: userActions,
  plugins: [createPersistedState({ key: "userModule" })], // Key is important to avoid conflicts
};

export default userModule;
