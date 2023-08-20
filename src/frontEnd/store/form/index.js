// import getters, actions & mutations
import formGetters from "./getters";
import formActions from "./actions";
import formMutations from "./mutation";

const formModule = {
  namespaced: true,
  state() {
    return {
      status: true,
      phoneInputStatues: false,
      passwordInputStatus: false,
      passwordCInputStatus: false,
    };
  },
  getters: formGetters,
  actions: formActions,
  mutations: formMutations,
};

export default formModule;
