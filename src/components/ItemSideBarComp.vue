<template>
  <div class="flex flex-row h-12 place-items-center justify-center px-1">
    <div class="flex-auto w-10">
      <i :class="iconItem"></i>
    </div>
    <div class="flex-auto w-64">
      <p class="font-bold text-2xl">{{ nameItem }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSideBarComp",
  components: {},
  props: {
    nameItem: String,
    iconItem: String,
  },
  data() {
    return {};
  },
};
</script>
