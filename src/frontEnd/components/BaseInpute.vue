<template>
  <div class="relative">
    <input
      :relus="relus"
      :type="typeInput"
      :value="modelValue"
      :placeholder="placeholder"
      class="input input-primary border-blue-50 w-full"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button
      type="button"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
      v-if="this.relus !== 'phone'"
    >
      <i :class="icon" @click="set()" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String,
    relus: String,
    modelValue: String,
    error: Boolean,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      typeInput: this.type,
      icon: "fas fa-eye-slash",
    };
  },

  methods: {
    set() {
      switch (this.typeInput) {
        case "password": {
          this.icon = "fas fa-eye-slash";
          this.typeInput = "text";
          break;
        }
        case "text": {
          this.icon = "fas fa-eye";
          this.typeInput = "password";
          break;
        }
      }
    },
  },
  mounted() {
    if (
      window.performance.navigation.type ===
      window.performance.navigation.TYPE_RELOAD
    ) {
      this.$store.commit("userMod/setPassword", "");
    }
  },
};
</script>
