<template>
  <div class="md:container md:mx-auto">
    <div class="flex flex-row w-full justify-center items-center">
      <div class="grid gap-4 place-items-center h-56 py-5">
        <div class="card w-4/5 bg-slate-200 shadow-xl">
          <div class="card-body">
            <div class="card-title">
              <p class="text-center mx-3">Cree votre compt</p>
            </div>
            <form class="space-y-3 md:space-y-5" @submit.prevent="register()">
              <BaseInpute1
                type="text"
                placeholder="Email@gmail.com"
                v-model="userForm.name"
                relus="email"
              />
              <BaseInpute1
                type="text"
                placeholder="0658185867"
                v-model="userForm.name"
                relus="phone"
              />
              <!-- <BaseInpute1
                type="password"
                placeholder="}+$~&@><"
                v-model="userForm.password"
                rules="password"
              /> -->
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
import BaseInpute1 from "../testComponents/BaseInpute1.vue";

export default {
  name: "RegisterView",
  components: {
    BaseInpute,
    BaseInpute1,
  },

  data() {
    return {
      name: "",
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
