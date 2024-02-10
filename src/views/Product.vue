<template>
  <div class="container">
    <Logo></Logo>
    <NavBar></NavBar>
    <div
      class="w-[1530px] h-[235px] bg-[#3BB77E33] rounded-[20px] flex flex-col"
    >
      <p
        class="text-[48px] font-[700] pl-[60px] pt-[60px]"
        style="font-family: Quicksand"
      >
        Cake & Milk
      </p>
      <p
        class="text-[20px] ml-[60px] mt-[10px] font-400"
        style="color: #7e7e7e; font-family: Quicksand "
      >
        Home > Categories > Cake & Milk
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { useProductStore } from "../stores/ProductStore";
import Button from "../components/Button.vue";
import Categories from "../components/Categories.vue";
import Banner from "../components/Banner.vue";
import Menu from "../components/Menu.vue";
import Product from "../components/Product.vue";
import AllProduct from "../components/AllProduct.vue";
import NavBar from "../components/NavBar.vue";
import Logo from "../components/Logo.vue";
import PageCover from "../components/PageCover.vue";
import Nav_item from "../components/Nav_item.vue";
//   import { RouterLink } from "vue-router";

export default {
  name: "App",
  components: {
    Button,
    Categories,
    Banner,
    Menu,
    Product,
    AllProduct,
    NavBar,
    Logo,
    PageCover,
    Nav_item,
  },

  // setup(){
  //   const createStore = useProductStore;
  //   return()
  // }
  computed: {
    ...mapState(useProductStore, ["Categories"]),
    ...mapState(useProductStore, ["Banner"]),
    menu() {
      return useProductStore().Menu[0];
    },
    menu1() {
      return useProductStore().Menu[1];
    },
    ...mapState(useProductStore, ["AllProduct"]),
    //  Menu(){
    //    return useProductStore().Menu[0];
    //  }
  },
};
</script>

<style>
body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100vh;
}

/* .container{
     
      width: 100%;
      height: 100vh;
      display: flex; 
      flex-direction: column; 
      
    } */
.Categories {
  display: flex;
  flex-direction: row;
}
.banner {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
}
.AllProduct {
  display: flex;
  flex-direction: row;
}
</style>
