<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center align-center">
      <v-card class="pa-4 shadow-2xl" variant="outlined">
        <v-card-title class="text-center text-h4 mt-4 mx-2">
          <p class="font-weight-medium">Create your Account</p>
        </v-card-title>
        <v-form v-model="valid">
          <v-container>
            <v-col>
              <v-row cols="12" md="4" class="my-3">
                <BaseInpute1
                  text="Phone"
                  type="text"
                  placeholder="0658 18 58 67"
                  :counter="10"
                  :rules="nameRules"
                  v-model="UserForm.Phone"
                />
              </v-row>
              <v-row cols="12" md="4" class="my-3">
                <BaseInpute1
                  text="Password"
                  type="password"
                  :rules="passwordRules"
                  v-model="UserForm.Password"
                />
              </v-row>
              <v-row cols="12" md="4" class="my-3">
                <BaseInpute1
                  text="Password Confirmation"
                  type="password"
                  :rules="passwordConfirmationRules"
                  v-model="UserForm.PasswordConfirmation"
                />
              </v-row>
              <v-row cols="12" md="4">
                <v-btn
                  color="indigo-darken-3"
                  variant="flat"
                  class="text-none mb-4"
                  size="large"
                >
                  Create
                </v-btn>
              </v-row>
            </v-col>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BaseInpute1 from "../components/BaseInpute1.vue";
export default {
  components: { BaseInpute1 },
  data() {
    return {
      valid: false,
      UserForm: {
        Phone: "",
        Password: "",
        PasswordConfirmation: "",
      },
      nameRules: [
        (value) => {
          if (value) {
            if (value?.charAt(0) === "0") {
              if (value?.length === 10) return true;
              else return "Phone must contains 10 characters.";
            } else return "Phone must begin by 0.";
          }
          return "Phone  is required.";
        },
      ],
      passwordRules: [
        (value) => {
          if (value) {
            if (value?.length > 7) {
              return true;
            } else return "Password must be more than 7 chars.";
          }
          return "Password  is required.";
        },
      ],
      passwordConfirmationRules: [
        (value) => {
          if (value) {
            if (value?.length > 7) {
              if (value === this.UserForm.Password) return true;
              else return "Passwords are not match";
            } else return "Password must be more than 7 chars.";
          }
          return "Password  is required.";
        },
      ],
    };
  },
};
</script>
