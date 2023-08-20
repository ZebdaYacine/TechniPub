const formActions = {
  phoneStatuesAction(context, payload) {
    context.commit("setPhoneInputStatues", payload);
  },
};

export default formActions;
