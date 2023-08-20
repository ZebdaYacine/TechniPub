const formGetters = {
  getForm(state) {
    return (
      state.phoneInputStatues &&
      state.passwordInputStatus &&
      state.passwordCInputStatus
    );
  },
  getPhoneStatus(state) {
    return typeof state.phoneInputStatues === "boolean"
      ? ""
      : state.phoneInputStatues;
  },
};

export default formGetters;
