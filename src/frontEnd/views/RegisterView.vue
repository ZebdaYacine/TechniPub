<template>
  <div class="md:container md:mx-auto">
    <div class="flex flex-row w-full justify-center items-center">
      <div class="grid gap-4 place-items-center h-56 pt-5 md:w-4/5 w-full">
        <div class="card w-4/5 shadow-xl" style="background-color: #e2dff5">
          <div class="card-body">
            <progress
              class="progress progress-primary"
              v-if="shwoPrograssBar"
            />
            <div class="card-title">Cree votre compt</div>
            <form class="space-y-3 md:space-y-5">
              <BaseInpute
                type="text"
                placeholder="06 58 18 58 67"
                v-model="userForm.phone"
                relus="phone"
              />
              <BaseInpute
                type="password"
                placeholder="aAk$l@&+><.."
                v-model="userForm.Initialpassword"
                relus="password"
              />
              <BaseInpute
                type="password"
                placeholder="Like the last password"
                v-model="userForm.ConfirmPassword"
                relus="passwordC"
              />
              <div class="flex flex-row">
                <button class="btn btn-success" @click.prevent="register()">
                  Cree
                </button>
                <p class="flex justify-end btn btn-link">
                  <router-link to="/Login"> Login </router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import UserStore from "../firebase/userStore";
import BaseInpute from "../components/BaseInpute.vue";
import userApi from "../api/userApi";
//import axios from "axios";
import Swal from "sweetalert2";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RegisterView",
  components: {
    BaseInpute,
  },
  data() {
    return {
      userForm: {
        phone: "",
        Initialpassword: "",
        ConfirmPassword: "",
      },
      dataRecived: false,
      shwoPrograssBar: false,
      goToAccount: false,
    };
  },
  mounted() {
    if (
      window.performance.navigation.type ===
      window.performance.navigation.TYPE_RELOAD
    ) {
      this.setUser({
        name: "",
        phone: "",
        id: "",
        isLogged: false,
      });
    }
  },
  computed: {
    ...mapGetters("userMod", { userInfor: "getUser" }),
    ...mapGetters("formMod", { formstatus: "getForm" }),
  },
  methods: {
    ...mapActions("userMod", { setUser: "setUserAction" }),
    //...mapActions({ setLoginStatus: "changeLoginStatusAction" }),
    async register() {
      //console.log(UserStore.createUser(this.userForm));
      this.shwoPrograssBar = true;
      const result = await userApi.register({
        phone: this.userForm.phone,
        password: this.userForm.Initialpassword,
      });
      switch (result.statusText) {
        case "OK": {
          Swal.fire({
            icon: "success",
            title: "Your account has been created",
            showConfirmButton: false,
            timer: 1500,
          });
          this.goToAccount = true;
          break;
        }
        default: {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong!",
          });
          break;
        }
      }
      this.dataRecived = true;
      this.shwoPrograssBar = false;
      if (this.goToAccount) {
        this.goToYourAccount(result.data.object);
      }
      console.log(this.userInfor);
    },
    goToYourAccount(data) {
      this.setUser({ name: "", phone: data.phone, isLogged: true });
      //this.setLoginStatus(true);
      this.$router.push({
        name: "Main",
        params: { id: data._id },
        query: { phone: data.phone },
      });
    },
    backToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
