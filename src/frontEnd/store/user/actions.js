const userActions = {
  changeLoginStatusAction(context, payload) {
    context.commit("changeLoginStatus", payload);
  },
  setUserAction(context, payload) {
    context.commit("setUser", payload);
  },
  setPasswordAction(context, payload) {
    context.commit("setPassword", payload);
  },
};

export default userActions;
