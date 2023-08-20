const formGetters = {
  getForm(state) {
    return (
      state.phoneInputStatues &&
      state.passwordInputStatus &&
      state.passwordCInputStatus
    );
  },
};

export default formGetters;
