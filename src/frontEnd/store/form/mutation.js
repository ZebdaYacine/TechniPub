const formMutations = {
  setPhoneInputStatues(state, payload) {
    state.phoneInputStatues = payload;
  },
  setPasswordInputStatus(state, payload) {
    state.passwordInputStatus = payload;
  },
  setPasswordcInputStatus(state, payload) {
    state.passwordCInputStatus = payload;
  },
};

export default formMutations;
