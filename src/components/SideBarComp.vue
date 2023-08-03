<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <div
          class="flex flex-row place-items-center justify-start px-1 cursor-pointer hover:bg-slate-200"
          @click="changeStyleItemSelected()"
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
            @click="changeStyleItemSelected()"
          />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import ItemSideBarComp from "./ItemSideBarComp.vue";
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
        { nameItem: "Statistique", iconItem: "fas fa-chart-column fa-2xl" },
        { nameItem: "Ventes", iconItem: "fas fa-cart-arrow-down fa-2xl" },
        { nameItem: "Achates", iconItem: "fas fa-bag-shopping fa-2xl" },
      ],
      lastTargetclicked: "",
    };
  },
  methods: {
    changeStyleItemSelected() {
      if (this.lastTargetclicked != "") {
        this.lastTargetclicked.style.backgroundColor = "";
        event.currentTarget.style.backgroundColor = "#CED6DC";
        this.lastTargetclicked = event.currentTarget;
      } else {
        event.currentTarget.style.backgroundColor = "#CED6DC";
        this.lastTargetclicked = event.currentTarget;
      }
    },
  },
};
</script>
