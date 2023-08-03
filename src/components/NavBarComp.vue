<template>
  <div class="navbar bg-slate-400">
    <div class="drawer-content flex flex-col items-center justify-center">
      <label
        for="my-drawer-2"
        class="btn btn-ghost drawer-button lg:hidden bg-transparent"
        style="color: aliceblue"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
    <div class="flex-1">
      <button class="btn btn-ghost bg-transparent">
        <div class="avatar">
          <div class="w-10 mask mask-squircle">
            <img src="../icon/logo.jpg" class="w-8" />
          </div>
        </div>
        <div class="text-cyan-50">Techni Pub Bouameur</div>
      </button>
    </div>
    <div class="flex-none">
      <ProfileListComp />
    </div>
  </div>
</template>

<script>
import ProfileListComp from "./ProfileListComp.vue";
export default {
  name: "NavBarComp",
  components: {
    ProfileListComp,
  },
  data() {
    return {};
  },
};
</script>
