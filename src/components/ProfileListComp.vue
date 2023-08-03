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
        <a class="justify-between">
          Profile
          <span class="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfileListComp",
  // props: {
  //   iconUrl: { type: String, required: true },
  // },
  inject: ["profileSrc"],
  data() {
    return {};
  },
};
</script>
