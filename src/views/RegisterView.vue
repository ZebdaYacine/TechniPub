<template>
  <div class="md:container md:mx-auto">
    <div class="flex flex-row w-full justify-center items-center">
      <div class="grid gap-4 place-items-center h-56 py-5">
        <div class="card w-4/5 bg-slate-200 shadow-xl">
          <div class="card-body">
            <div class="card-title">Cree votre compt</div>
            <form class="space-y-3 md:space-y-5" @submit.prevent="register()">
              <BaseInpute
                type="text"
                placeholder="Email or Phone"
                v-model="userForm.name"
              />
              <BaseInpute
                type="password"
                placeholder="Password"
                v-model="userForm.password"
              />
              <BaseInpute
                type="password"
                placeholder="Confirm Password"
                v-model="userForm.ConfirmPassword"
              />
              <div class="flex flex-row">
                <button class="btn btn-success">Cree</button>
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
export default {
  name: "RegisterView",
  components: {
    BaseInpute,
  },
  data() {
    return {
      userForm: {
        name: "",
        password: "",
        ConfirmPassword: "",
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
