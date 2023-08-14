<template>
  <button
    type="button"
    class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
    @click="$emit('togglePasswordVisibility')"
  >
    <i :class="icon" @click="set()" />
  </button>
</template>

<script>
export default {
  emits: ["togglePasswordVisibility"],
  inject: ["visiblity"],
  data() {
    return {
      icon: "fas fa-eye-slash",
    };
  },
  methods: {
    set() {
      switch (this.visiblity) {
        case "password": {
          this.icon = "fas fa-eye-slash";
          break;
        }
        case "text": {
          this.icon = "fas fa-eye";
          break;
        }
      }
    },
  },
};
</script>
