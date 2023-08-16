<template>
  <div class="md:container md:mx-auto">
    <div class="flex flex-row w-full justify-center items-center">
      <div class="grid gap-4 place-items-center h-56 pt-5 md:w-4/5 w-full">
        <div class="card w-4/5 shadow-xl" style="background-color: #e2dff5">
          <div class="card-body">
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
import UserStore from "../firebase/userStore";
import BaseInpute from "../components/BaseInpute.vue";
import userApi from "../api/userApi";
import axios from "axios";

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
    };
  },
  methods: {
    async register() {
      //console.log(UserStore.createUser(this.userForm));
      const user = this.userForm;
      const result = await userApi.register({
        phone: user.phone,
        password: user.Initialpassword,
      });
      switch (result.status) {
        case 200: {
          break;
        }
        default: {
          break;
        }
      }
    },
    backToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
