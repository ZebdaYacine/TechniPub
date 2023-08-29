<template>
  <p class="text-center text-5xl">Home Page</p>
</template>

<script>
import profil from "../icon/profile.png";

export default {
  name: "HomeView",
  provide: {
    profileSrc: profil,
  },
  data() {
    return {};
  },
};
</script>
