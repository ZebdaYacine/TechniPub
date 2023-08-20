const formGetters = {
  getForm(state) {
    const a =
      state.phoneInputStatues &&
      state.passwordInputStatus &&
      state.passwordCInputStatus;
    return a === true ? a : false;
  },

  getFormLoginStatus(state) {
    const a = state.phoneInputStatues && state.passwordInputStatus;
    return a === true ? a : false;
  },

  getPhoneStatus(state) {
    return typeof state.phoneInputStatues === "boolean"
      ? ""
      : state.phoneInputStatues;
  },
  getPasswordStatus(state) {
    return typeof state.passwordInputStatus === "boolean"
      ? ""
      : state.passwordInputStatus;
  },
  getPasswordCStatus(state) {
    return typeof state.passwordCInputStatus === "boolean"
      ? ""
      : state.passwordCInputStatus;
  },
};

export default formGetters;
