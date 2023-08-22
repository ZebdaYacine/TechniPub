<template>
  <div class="md:container md:mx-auto">
    <div
      class="lg:flex lg:flex-row w-full md:flex md:flex-col justify-center items-center"
    >
      <div class="basis-1/2 w-full">
        <div class="grid gap-4 place-items-center h-full py-3">
          <div class="avatar">
            <div class="w-30 rounded-full ring-offset-2">
              <img src="../icon/logoRm.png" />
            </div>
          </div>
          <div>
            <p class="text-center text-3xl text-slate-950">
              TenchniPub. Best One for evry Time
            </p>
          </div>
        </div>
      </div>
      <div class="basis-1/2 w-full">
        <div class="grid gap-4 place-items-center h-56 py-5">
          <div class="card shadow-xl w-5/6" style="background-color: #e2dff5">
            <div class="card-body">
              <progress
                class="progress progress-primary"
                v-if="shwoPrograssBar"
              />
              <div class="card-title">Welcom to your back</div>
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
                <div class="flex flex-row">
                  <button
                    class="btn btn-success"
                    @click.prevent="login()"
                    :disabled="!formLoginStatus"
                  >
                    Login
                  </button>
                  <p class="flex justify-end btn btn-link">
                    <router-link to="/Register"
                      >I don't have Account</router-link
                    >
                  </p>
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
import userApi from "../api/userApi";
import BaseInpute from "../components/BaseInpute.vue";
import userMixins from "../mixins/user";
import Swal from "sweetalert2";

export default {
  name: "LoginView",
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
    async login() {
      this.shwoPrograssBar = true;
      const result = await userApi.login({
        phone: this.userForm.phone,
        password: this.userForm.password,
      });
      console.log(result);
      switch (result.statusText) {
        case "OK": {
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
      console.log(this.userInfo);
    },
    goToYourAccount(data) {
      this.setUser({
        id: data.id,
        name: "",
        phone: data.phone,
        isLogged: true,
        token: data.token,
      });
      this.$router.push({
        name: "Main",
        params: { id: data.id },
        query: { phone: data.phone },
      });
    },
  },
};
</script>
