<template>
  <nav>
    <RouterLink  to="/Categorie">
      <div class="flex flex-row" >
        <i class="mr-3" style="#3BB77E" :class="IconFront"></i>
        <p class="mr-3">{{ name }}</p>
        <i class="" :class="IconBack"></i>
      </div>
    </RouterLink>
  </nav>
  
</template>

<script>
// import {mapState} from "pinia";
// import { useProductStore } from "../stores/ProductStore";
export default {
  name: "Nav_item",
  props: {
    IconFront: String,
    name: String,
    IconBack: String,
  },
  // computed:{
  //     ...mapState(useProductStore,["NavItem"]),
  // }
};
</script>

<style></style>
