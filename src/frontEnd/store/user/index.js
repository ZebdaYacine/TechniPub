import userGetters from "./getters";
import userActions from "./actions";
import userMutaions from "./mutation";
import UserStoreState from "./state";
const userModule = {
  namespaced: true,
  state: () => UserStoreState,
  getters: userGetters,
  mutations: userMutaions,
  actions: userActions,
};

export default userModule;
