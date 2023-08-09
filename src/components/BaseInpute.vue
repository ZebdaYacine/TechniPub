<template>
  <input :type="type" :placeholder="placeholder" :class="class" />
</template>

<script>
export default {
  name: "BaseInpute",
  props: {
    type: String,
    placeholder: String,
  },

  data() {
    return {
      class: "input w-full",
    };
  },
};
</script>
