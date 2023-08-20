import { createStore } from "vuex";
import userModule from "./user/index";
import formModule from "./form/index";
const store = createStore({
  modules: {
    userMod: userModule,
    formMod: formModule,
  },
});

export default store;
