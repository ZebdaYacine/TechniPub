<template>
  <div class="md:container md:mx-auto">
    <div
      class="lg:flex lg:flex-row w-full md:flex md:flex-col justify-center py-5"
    >
      <div class="basis-1/2">
        <div class="grid gap-4 place-items-center h-full bg-slate-800 py-3">
          <div class="avatar bg-black">
            <div class="w-30 rounded-full ring-offset-2">
              <img src="../icon/logoRm.png" />
            </div>
          </div>
          <div>
            <p class="text-center text-3xl text-gray-100">
              TenchniPub. Best One for evry Time
            </p>
          </div>
        </div>
      </div>
      <div class="basis-1/2 bg-red-900">
        <div class="grid gap-4 place-items-center h-56">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <form class="space-y-3 md:space-y-5">
                <input
                  type="text"
                  placeholder="Email or Phone"
                  class="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Password"
                  class="input input-bordered w-full max-w-xs"
                />
                <div class="flex flex-row">
                  <button class="btn btn-success flex-none">Login</button>
                  <div class="flex-1"></div>
                  <p class="flex-2">I don't have account</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
        name: "Zebda Yacine",
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
