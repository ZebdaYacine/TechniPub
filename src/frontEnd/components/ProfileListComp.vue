<template>
  <button class="btn btn-ghost btn-circle mx-1">
    <div class="indicator">
      <i class="fas fa-bell fa-2xl" style="color: aliceblue"></i>
      <span class="badge badge-md badge-accent indicator-item">5</span>
    </div>
  </button>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar online">
      <div class="w-10 rounded-full">
        <img :src="profileSrc" />
      </div>
    </label>
    <ul
      tabindex="0"
      class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    >
      <li>
        <router-link to="" class="justify-between"
          >Profile <span class="badge">New</span>
        </router-link>
      </li>
      <li><router-link to="">Setting </router-link></li>
      <li><a @click="logoaut()">Logout</a></li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProfileListComp",
  // props: {
  //   iconUrl: { type: String, required: true },
  // },
  inject: ["profileSrc"],
  data() {
    return {};
  },
  methods: {
    // ...mapActions({ setLoginStatus: "changeLoginStatusAction" }),
    ...mapActions("userMod", { setUser: "setUserAction" }),

    logoaut() {
      this.setUser({
        name: "",
        phone: "",
        id: "",
        isLogged: false,
      });
      // this.setLoginStatus(false);
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
