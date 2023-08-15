<template>
  <div class="flex flex-col w-full">
    <div class="relative">
      <input
        :relus="relus"
        :type="typeInput"
        :value="modelValue"
        :placeholder="placeholder"
        :class="{
          'input w-full': !isError,
          'input w-full input-error': isError,
        }"
        @input="$emit('update:modelValue', $event.target.value)"
        @click="setVisited()"
      />
      <ShowPassword
        v-if="type === 'password'"
        @togglePasswordVisibility="toggleVisibility"
      />
    </div>

    <p class="text-left text-red-700 text-1xl" v-if="isVisited">
      {{ validateInput }}
    </p>
  </div>
</template>

<script>
import validators from "../plugins/validators";
import ShowPassword from "../components/ShowPassword.vue";
import { computed } from "vue";

export default {
  components: {
    ShowPassword,
  },
  props: {
    type: String,
    placeholder: String,
    relus: String,
    modelValue: String,
  },
  provide() {
    return {
      visiblity: computed(() => this.typeInput),
    };
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isError: false,
      isVisited: false,
      class: "input w-full",
      typeInput: this.type,
    };
  },
  methods: {
    setVisited() {
      this.isVisited = true;
    },
    checking(v1, v2) {
      const str = validators.target.get(v1).check(v2);
      if (str === true) {
        this.isError = false;
        return "";
      } else {
        this.isError = true;
        return str;
      }
    },
    toggleVisibility() {
      switch (this.typeInput) {
        case "password": {
          this.typeInput = "text";
          break;
        }
        case "text": {
          this.typeInput = "password";
          break;
        }
      }
    },
  },

  computed: {
    validateInput() {
      const data = this.modelValue;
      if (this.relus === "password") {
        this.$store.commit("setPassword", data);
      } else if (this.relus === "passwordC") {
        const result = this.checking(this.relus, data);
        console.log(result);
        if (result === "") {
          if (this.$store.state.password === data) {
            return "";
          } else {
            return "password do not match";
          }
        }
        return result;
      }
      return this.checking(this.relus, data);
    },
  },
};
</script>
