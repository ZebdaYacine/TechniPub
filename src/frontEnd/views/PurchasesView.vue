<template>
  <div class="lg:w-full">
    <div class="lg:flex lg:flex-row md:flex md:flex-col xs:flex xs:flex-col">
      <div
        class="flex w-full sm:w-auto lg:w-1/3 p-4 justify-center items-center"
      >
        <div class="avatar">
          <div class="w-24 rounded-xl">
            <img src="../icon/profile.png" />
          </div>
        </div>
      </div>
      <div class="w-full sm:w-auto lg:w-2/3 p-4 justify-center items-center">
        <form class="space-y-3 md:space-y-5">
          <div class="flex flex-col w-full">
            <BaseInpute
              type="text"
              placeholder="Name"
              v-model="userForm.phone"
              relus="phone"
            />
            <p class="text-left text-red-700 text-1xl">
              {{ phoneStatus }}
            </p>
          </div>
          <label class="label cursor-pointer">
            <span class="text-2xl">change password</span>
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-primary"
            />
          </label>
          <div class="flex flex-col w-full">
            <BaseInpute
              type="password"
              placeholder="new password"
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
              placeholder="confirme new password"
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
              placeholder="current password"
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
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import profil from "../icon/profile.png";
import BaseInpute from "../components/BaseInpute.vue";
import userMixins from "../mixins/user";

export default {
  components: {
    profileSrc: profil,
    BaseInpute,
  },
  mixins: [userMixins],

  data() {
    return {};
  },
};
</script>
