<template>
  <div class="md:container md:mx-auto">
    <div class="flex flex-row w-full justify-center items-center">
      <div class="grid gap-4 place-items-center h-56 py-5">
        <div class="card w-4/5 bg-slate-200 shadow-xl">
          <div class="card-body">
            <div class="card-title">Cree votre compt</div>
            <form class="space-y-3 md:space-y-5">
              <input
                type="text"
                placeholder="Email or Phone"
                class="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Password"
                class="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Confirm Password"
                class="input input-bordered w-full"
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
export default {
  name: "RegisterView",
  data() {
    return {
      user: {
        name: "Zebda Yacine",
      },
    };
  },
  methods: {
    register() {
      this.$router.push({ name: "Main" });
    },
    backToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
