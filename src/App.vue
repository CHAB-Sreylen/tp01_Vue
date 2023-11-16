<template>
  <div class="container">
    
    <Menu :header="menu.header"></Menu>
    <div class="Categories">
      <Categories
        v-for="i in Categories"
        :bg="i.bg"
        :ItemName="i.ItemName"
        :Img="i.Img"
        :Amount="i.Amount"
      ></Categories>
    </div>
    <div class="banner">
      <Banner
        v-for="i in Banner"
        :bannerBg="i.bannerBg"
        :Title="i.Title"
        :img="i.img"
        :btnColor="i.btnBg"
      ></Banner>
    </div>
    <Menu :header="menu1.header"></Menu>
    <div class="AllProduct flex flex-wrap gap-[10px]">
      <Product></Product>
      <!-- <div class="AllProduct flex flex-wrap gap-[10px]"> -->
        <AllProduct v-for="i in AllProduct" :pimg="i.p_img" :pbg="i.pbg" :ptype="i.ptype" :pdetail="i.pdetail" ></AllProduct>
      <!-- </div> -->
    </div>
    
  </div>
</template>
<script>
import { mapState } from "pinia";
import { useProductStore } from "./stores/ProductStore";
import Button from "./components/Button.vue";
import Categories from "./components/Categories.vue";
import Banner from "./components/Banner.vue";
import Menu from "./components/Menu.vue";
import Product from "./components/Product.vue";
import AllProduct from "./components/AllProduct.vue";

export default {
  name: "App",
  components: {
    Button,
    Categories,
    Banner,
    Menu,
    Product,
    AllProduct,
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
.AllProduct{
  display: flex;
  flex-direction: row;

}
</style>
