<template>
  <!-- <ProfileView /> -->
  <!-- <router-view /> -->
  <!-- <BaseInpute1 type="email" placeholder="zed@gmail.com" name="email" /> -->
  <!-- <In /> -->
  <MainView />
</template>

<script>
// import In from "./testComponents/In.vue";
// import BaseInpute from "./components/BaseInpute.vue";
// import BaseInpute1 from "./testComponents/BaseInpute1.vue";
import ProfileView from "./views/ProfileView.vue";
import MainView from "./views/MainView.vue";
export default {
  name: "App",
  components: {
    // BaseInpute,
    // BaseInpute1,
    // In,
    ProfileView,
    MainView,
  },
};
</script>
