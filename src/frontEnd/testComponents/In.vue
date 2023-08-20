// example-vue-component.vue
<template>
  <button @click="showAlert">Hello world</button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("a", { userInfo: "getUser" }),
    ...mapGetters("a", { password: "getPassword" }),
  },
  methods: {
    showAlert() {
      console.log(this.userInfo);
    },
  },
};
</script>
