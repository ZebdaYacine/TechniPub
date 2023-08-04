<template>
  <div class="lg:basis-10/12">
    <p class="text-center text-5xl">Statistique Page</p>
  </div>
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
