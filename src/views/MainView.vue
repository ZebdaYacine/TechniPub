<template>
  <NavBarComp />
  <div class="flex flex-row ...">
    <div>
      <SideBarComp :icon-url="profilsrc" :user-name="user.name" />
    </div>
    <div>klnklg</div>
  </div>
</template>

<script>
import SideBarComp from "../components/SideBarComp.vue";
import NavBarComp from "../components/NavBarComp.vue";

import profil from "../icon/profile.png";
export default {
  name: "MainView",
  components: { SideBarComp, NavBarComp },
  provide: {
    profileSrc: profil,
  },
  data() {
    return {
      profilsrc: profil,
      user: {
        name: "Zebda Yacine",
      },
    };
  },
};
</script>
