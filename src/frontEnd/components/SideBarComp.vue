<template>
  <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
    <div
      class="flex flex-row place-items-center justify-start cursor-pointer hover:bg-slate-200"
      @click="$emit('loadView', 'ProfileView')"
    >
      <div class="avatar online">
        <div class="w-12 rounded-full">
          <img :src="iconUrl" />
        </div>
      </div>
      <p class="text-center text-2xl text-black font-bold mx-1">
        {{ userName }}
      </p>
    </div>
    <div class="divider"></div>
    <div v-for="item in items" class="flex flex-col">
      <ItemSideBarComp
        :id="item.nameItem"
        :name-item="item.nameItem"
        :icon-item="item.iconItem"
        class="cursor-pointer hover:bg-slate-200"
        :class="{ 'conditional-style': item.nameItem === 'HomeView' }"
        @click="$emit('loadView', item.nameView)"
      />
    </div>
  </ul>
</template>

<script>
import ItemSideBarComp from "./itemsidebarcomp.vue";
export default {
  name: "DashboardComp",
  components: {
    ItemSideBarComp,
  },
  props: {
    iconUrl: { type: String, required: true },
    userName: String,
  },
  data() {
    return {
      items: [
        {
          nameItem: "Accueil",
          nameView: "HomeView",
          iconItem: "fas fa-house-user fa-2xl",
        },
        {
          nameItem: "Ventes",
          nameView: "SalesView",
          iconItem: "fas fa-cart-arrow-down fa-2xl",
        },
        {
          nameItem: "Achates",
          nameView: "PurchasesView",
          iconItem: "fas fa-bag-shopping fa-2xl",
        },
      ],
    };
  },
  emits: ["loadView"],
};
</script>

<style>
.conditional-style {
  background-color: #ced6dc;
}
</style>
