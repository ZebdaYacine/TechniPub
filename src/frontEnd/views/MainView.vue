<template>
  <NavBarComp />
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="card shadow-2xl m-7 bg-slate-50">
        <div class="card-body ite">
          <HomeView v-if="this.view === 'HomeView'" />
          <SalesView v-if="this.view === 'SalesView'" />
          <ProfileView v-if="this.view === 'ProfileView'" />
          <PurchasesView v-if="this.view === 'PurchasesView'" />
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <SideBarComp
        :icon-url="profilsrc"
        :user-name="user.phone"
        @loadView="loadCurrentView"
      />
    </div>
  </div>
</template>
<style>
.pos {
  position: fixed;
  left: 0px;
  top: 0px;
}
</style>
<script>
import SideBarComp from "../components/SideBarComp.vue";
import NavBarComp from "../components/NavBarComp.vue";
import profil from "../icon/profile.png";
import HomeView from "./HomeView.vue";
import SalesView from "./SalesView.vue";
import PurchasesView from "./PurchasesView.vue";
import ProfileView from "./ProfileView.vue";
import { mapGetters } from "vuex";

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
        phone: "",
      },
      lastTargetclicked: "",
      view: "",
    };
  },
  computed: {
    ...mapGetters("userMod", { userInfo: "getUser" }),
  },
  mounted() {
    this.view = "HomeView";
    this.user.phone = this.userInfo.phone;
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
