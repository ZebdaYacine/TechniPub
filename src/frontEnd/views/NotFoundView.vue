<template>
  <div>
    <p class="text-center text-5xl">404 Error</p>
  </div>
</template>

<script>
import profil from "../icon/profile.png";
export default {
  name: "NotFoundView",
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
