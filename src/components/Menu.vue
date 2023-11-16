<template>
  <div class="flex flex-row justify-between pr-5 mb-10 mt-14">
    <div>
      <h1 class="text-3xl">{{ header }}</h1>
    </div>
    <div class=" flex flex-row gap-3 items-center">
      <p class="font-bold">All</p>
      <div v-for="items in Group">
        <p>{{ items }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useProductStore } from "../stores/ProductStore";
export default {
  name: "Menu",
  props:{
    header:String,
  },
  
  computed: {
    ...mapState(useProductStore, ["Group"]),
  }
};
</script>

<style scoped></style>
