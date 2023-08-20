const userMutaions = {
  changeLoginStatus(state, payload) {
    state.user.isLogged = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setPassword(state, payload) {
    state.password = payload;
  },
};
export default userMutaions;
