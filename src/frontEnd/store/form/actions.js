const formActions = {
  phoneStatuesAction(context, payload) {
    context.commit("setPhoneInputStatues", payload);
  },
  passwordStatuesAction(context, payload) {
    context.commit("setPasswordInputStatus", payload);
  },
  passwordCStatuesAction(context, payload) {
    context.commit("setPasswordcInputStatus", payload);
  },
};

export default formActions;
