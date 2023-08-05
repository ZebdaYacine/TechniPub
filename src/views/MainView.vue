<template>
  <NavBarComp />
  <div class="flex flex-row w-full">
    <div class="lg:basis-3/12 md:basis-3/12">
      <SideBarComp
        :icon-url="profilsrc"
        :user-name="user.name"
        @loadView="loadCurrentView"
      />
    </div>
    <div class="lg:basis-10/12">
      <HomeView v-if="this.view === 'HomeView'" />
      <SalesView v-if="this.view === 'SalesView'" />
      <ProfileView v-if="this.view === 'ProfileView'" />
      <PurchasesView v-if="this.view === 'PurchasesView'" />
    </div>
  </div>
</template>

<script>
import SideBarComp from "../components/SideBarComp.vue";
import NavBarComp from "../components/NavBarComp.vue";
import profil from "../icon/profile.png";
import HomeView from "./HomeView.vue";
import SalesView from "./SalesView.vue";
import PurchasesView from "./PurchasesView.vue";
import ProfileView from "./ProfileView.vue";

export default {
  name: "MainView",
  components: {
    SideBarComp,
    NavBarComp,
    HomeView,
    SalesView,
    PurchasesView,
    ProfileView,
  },
  provide: {
    profileSrc: profil,
  },
  data() {
    return {
      profilsrc: profil,
      user: {
        name: this.$route.query.name,
      },
      lastTargetclicked: "",
      view: "",
    };
  },
  mounted() {
    this.view = "HomeView";
  },
  methods: {
    loadCurrentView(data) {
      if (this.lastTargetclicked != "") {
        this.lastTargetclicked.style.backgroundColor = "";
        event.currentTarget.style.backgroundColor = "#CED6DC";
        this.lastTargetclicked = event.currentTarget;
      } else {
        event.currentTarget.style.backgroundColor = "#CED6DC";
        this.lastTargetclicked = event.currentTarget;
      }
      this.view = data;
    },
  },
};
</script>
