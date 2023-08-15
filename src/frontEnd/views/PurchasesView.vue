<template>
  <div class="lg:basis-10/12">
    <p class="text-center text-5xl">Purchases Page</p>
  </div>
</template>

<script>
import profil from "../icon/profile.png";
export default {
  name: "PurchasesView",
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
