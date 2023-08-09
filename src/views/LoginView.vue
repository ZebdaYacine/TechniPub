<template>
  <div class="md:container md:mx-auto">
    <div
      class="lg:flex lg:flex-row w-full md:flex md:flex-col justify-center items-center"
    >
      <div class="basis-1/2">
        <div class="grid gap-4 place-items-center h-full py-3">
          <div class="avatar">
            <div class="w-30 rounded-full ring-offset-2">
              <img src="../icon/logoRm.png" />
            </div>
          </div>
          <div>
            <p class="text-center text-3xl text-slate-950">
              TenchniPub. Best One for evry Time
            </p>
          </div>
        </div>
      </div>
      <div class="basis-1/2">
        <div class="grid gap-4 place-items-center h-56 py-5">
          <div class="card w-4/5 bg-slate-200 shadow-xl">
            <div class="card-body">
              <div class="card-title">Welcom to your back</div>
              <form class="space-y-3 md:space-y-5">
                <input
                  type="text"
                  placeholder="Email or Phone"
                  class="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="Password"
                  class="input input-bordered w-full"
                />
                <div class="flex flex-row">
                  <button class="btn btn-success" @click.prevent="login()">
                    Login
                  </button>
                  <p class="flex justify-end btn btn-link">
                    <router-link to="/Register"
                      >I don't have Account</router-link
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import userApi from "../api/userApi";

export default {
  name: "LoginView",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ userInfo: "getUser" }),
  },
  mounted() {
    // this.setUser({
    //   name: "",
    //   id: "",
    //   isLogged: false,
    //   privilage: "",
    // });
    console.log(this.userInfo);
  },
  methods: {
    ...mapActions({ setUser: "setUserAction" }),
    ...mapActions({ setLoginStatus: "changeLoginStatusAction" }),
    login() {
      this.setUser(userApi.getUser());
      this.setLoginStatus(true);
      this.$router.push({
        name: "Main",
        params: { id: this.userInfo.id },
        query: { name: this.userInfo.name },
      });
    },
  },
};
</script>
