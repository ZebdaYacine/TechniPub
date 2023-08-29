<template>
  <p class="text-center text-5xl">Sales Page</p>
</template>

<script>
import profil from "../icon/profile.png";
export default {
  name: "SalesView",
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
