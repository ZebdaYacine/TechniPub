<template>
  <div class="relative">
    <input
      :relus="relus"
      :type="typeInput"
      :value="modelValue"
      :placeholder="placeholder"
      :error="isError"
      :class="{
        'input w-full': !isError,
        'input w-full input-error': isError,
      }"
      @input="$emit('update:modelValue', $event.target.value)"
      @click="setVisited()"
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
    isError: Boolean,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isVisited: false,
      class: "input w-full",
      typeInput: this.type,
      icon: "fas fa-eye-slash",
    };
  },
  methods: {
    setVisited() {
      this.isVisited = true;
    },
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
      console.log(this.icon);
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
