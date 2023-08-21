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
              <div class="flex flex-col w-full">
                <BaseInpute
                  type="text"
                  placeholder="06 58 18 58 67"
                  v-model="userForm.phone"
                  relus="phone"
                />
                <p class="text-left text-red-700 text-1xl">
                  {{ phoneStatus }}
                </p>
              </div>
              <div class="flex flex-col w-full">
                <BaseInpute
                  type="password"
                  placeholder="aAk$l@&+><.."
                  v-model="userForm.password"
                  relus="password"
                />
                <p class="text-left text-red-700 text-1xl">
                  {{ passworsStatus }}
                </p>
              </div>
              <div class="flex flex-col w-full">
                <BaseInpute
                  type="password"
                  placeholder="Like the last password"
                  v-model="userForm.passwordC"
                  relus="passwordC"
                />
                <p class="text-left text-red-700 text-1xl">
                  {{ passworsCstatus }}
                </p>
              </div>
              <div class="flex flex-row">
                <button
                  class="btn btn-success"
                  @click.prevent="register()"
                  :disabled="!formstatus"
                >
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
import Swal from "sweetalert2";
import userMixins from "../mixins/user";

export default {
  name: "RegisterView",
  mixins: [userMixins],
  components: {
    BaseInpute,
  },
  data() {
    return {
      dataRecived: false,
      shwoPrograssBar: false,
      goToAccount: false,
    };
  },
  methods: {
    //...mapActions({ setLoginStatus: "changeLoginStatusAction" }),
    async register() {
      //console.log(UserStore.createUser(this.userForm));
      this.shwoPrograssBar = true;
      const result = await userApi.register({
        phone: this.userForm.phone,
        password: this.userForm.password,
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
            text: result.error,
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
