<template>
  <div class="md:container md:mx-auto">
    <div class="flex flex-row w-full justify-center items-center">
      <div class="grid gap-4 place-items-center h-56 pt-5 md:w-4/5 w-full">
        <div class="card w-4/5 bg-slate-200 shadow-xl">
          <div class="card-body">
            <div class="card-title">Cree votre compt</div>
            <form class="space-y-3 md:space-y-5">
              <BaseInpute1
                type="text"
                placeholder="06 58 18 58 67"
                v-model="userForm.name"
                relus="phone"
              />
              <BaseInpute1
                type="password"
                placeholder="aAk$l@&+><.."
                v-model="userForm.password.Initialpassword"
                relus="password"
              />
              <BaseInpute1
                type="password"
                placeholder="Like the last password"
                v-model="userForm.password.ConfirmPassword"
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
import BaseInpute1 from "../testComponents/BaseInpute1.vue";

export default {
  name: "RegisterView",
  components: {
    BaseInpute1,
  },
  data() {
    return {
      userForm: {
        name: "",
        password: { Initialpassword: "", ConfirmPassword: "" },
      },
    };
  },
  methods: {
    register() {
      console.log(UserStore.createUser(this.userForm));
    },
    backToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
