<template>
  <div class="flex flex-col">
    <input
      :relus="relus"
      :type="type"
      v-model="data"
      :placeholder="placeholder"
      :class="{
        'input w-full': !isError,
        'input w-full input-error': isError,
      }"
      @click="setVisited()"
    />
    <p class="text-left text-red-700 text-1xl" v-if="isVisited">
      {{ validateInput }}
    </p>
  </div>
</template>

<script>
import validators from "../plugins/validators";
export default {
  props: {
    type: String,
    placeholder: String,
    relus: String,
  },
  data() {
    return {
      isError: false,
      data: "",
      isVisited: false,
    };
  },
  methods: {
    setVisited() {
      this.isVisited = true;
    },
  },
  computed: {
    validateInput() {
      const str = validators.target.get(this.relus).check(this.data);
      if (str === true) {
        this.isError = false;
        return "";
      } else {
        this.isError = true;
        return str;
      }
    },
  },
};
</script>
