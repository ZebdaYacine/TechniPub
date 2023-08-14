<template>
  <BaseInpute1 type="text" v-model="User.message" relus="phone" />
  {{ User.message }}
</template>

<script>
import BaseInpute1 from "./BaseInpute1.vue";

export default {
  components: { BaseInpute1 },
  data() {
    return {
      User: {
        message: "",
      },
    };
  },
};
</script>
