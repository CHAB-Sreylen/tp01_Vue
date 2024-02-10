<template>
  <div class="container">
    <Logo></Logo>
    <NavBar></NavBar>
    <div class="flex flex-row items-center">
      <p
        class="text-[15px] ml-[60px] mt-[10px]"
        style="color: #686464; font-family: Quicksand"
      >
        Home > Vegetables & tubers >
      </p>
      <p class="text-[15px] ml-[10px] mt-[10px]" style="color: #3bb77e">
        Seeds of Change Organic
      </p>
    </div>
    <div class="flex flex-row">
      <div class="ml-[20px] mt-[20px] w-[700px]">
        <div class="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="rgba(131,122,122,1)"
          >
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
            ></path>
          </svg>
        </div>
        <img
          class="w-[600px] h-[400px]"
          src="../assets/image/Mango.png"
          alt=""
        />
        <div class="flex flex-row items-center mt-16">
          <div
            class="w-16 h-11 bg-[#3BB77E] rounded-3xl flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(243,235,235,1)"
            >
              <path
                d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
              ></path>
            </svg>
          </div>
          <div
            class="w-[130px] h-[130px] border-solid border-[1px] border-[#3bb77e] ml-5 rounded-2xl flex justify-center items-center"
          >
            <img
              class="w-[100px] h-[100px]"
              src="../assets/image/orange.png"
              alt=""
            />
          </div>
          <div
            class="w-[130px] h-[130px] ml-5 rounded-2xl flex justify-center items-center"
          >
            <img
              class="w-[100px] h-[100px]"
              src="../assets/image/milk.png"
              alt=""
            />
          </div>
          <div
            class="w-[130px] h-[130px] ml-5 rounded-2xl flex justify-center items-center"
          >
            <img
              class="w-[100px] h-[100px]"
              src="../assets/image/grape.png"
              alt=""
            />
          </div>
          <div
            class="w-[130px] h-[130px] ml-5 rounded-2xl flex justify-center items-center"
          >
            <img
              class="w-[100px] h-[100px]"
              src="../assets/image/lemon.png"
              alt=""
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="rgba(103,109,114,1)"
          >
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="ml-5 w-[650px]">
        <div class="w-40 h-10 bg-[#DEF9EC]">
          <p class="font-semibold text-[#3bb77e] text-[25px] ml-4">In stock</p>
        </div>
        <p
          class="font-700 text-[40px] leading-[48px] font-bold text-[#253D4E] mt-[20px]"
        >
          Seeds of Change Organic Quinoa, Brown
        </p>
        <div class="ml-[20px] mt-[60px] flex row items-center gap-1">
          <font-awesome-icon
            :icon="['fas', 'star']"
            style="color: rgb(253, 192, 64)"
          />
          <font-awesome-icon
            :icon="['fas', 'star']"
            style="color: rgb(253, 192, 64)"
          />
          <font-awesome-icon
            :icon="['fas', 'star']"
            style="color: rgb(253, 192, 64)"
          />
          <font-awesome-icon
            :icon="['fas', 'star']"
            style="color: rgb(253, 192, 64)"
          />
          <font-awesome-icon :icon="['fas', 'star']" style="color: #cdcdcd" />
          <p class="text3 ml-2">(4.0)</p>
        </div>
        <div class="flex flex-row">
          <p
            class="font-700 text-[80px] leading-[78px] mt-7 text-[#3bb77e] font-bold"
          >
            $38
          </p>
          <p
            class="font-700 text-[32px] font-700 text-[#B6B6B6] mt-14 ml-5 line-through"
          >
            $45
          </p>
        </div>
        <p class="text-[16px] font-400 mt-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem
          officia, corrupti reiciendis minima nisi modi, quasi, odio minus
          dolore impedit fuga eum eligendi? Officia doloremque facere quia.
          Voluptatum, accusantium!
        </p>
        <div class="flex flex-row items-center mt-16">
          <div class="w-[50px] border-green-600 border h-[30px]">
            <input type="number" value="1" min="0" class="w-[40px] pl-[10px]" />
          </div>
          <div
            class="w-36 h-10 bg-[#3bb77e] rounded-lg ml-3 flex items-center gap-4"
          >
            <font-awesome-icon
              :icon="['fas', 'cart-shopping']"
              size="sm"
              class="text-white ml-2"
            />
            <p class="text-white">Add to cart</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              style="color: #b6b6b6; margin-left: 30px"
            >
              <path
                d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
              ></path>
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            style="color: #b6b6b6; margin-left: 30px"
          >
            <path
              d="M16.0503 12.0498L21 16.9996L16.0503 21.9493L14.636 20.5351L17.172 17.9988L4 17.9996V15.9996L17.172 15.9988L14.636 13.464L16.0503 12.0498ZM7.94975 2.0498L9.36396 3.46402L6.828 5.9988L20 5.99955V7.99955L6.828 7.9988L9.36396 10.5351L7.94975 11.9493L3 6.99955L7.94975 2.0498Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-row mt-24">
          <p>Vendor:</p>
          <p class="ml-7 text-[#B6B6B6]">NestMart</p>
        </div>
        <div class="flex flex-row mt-5">
          <p>SKU:</p>
          <p class="ml-4 text-[#B6B6B6]">FWM15VKT</p>
        </div>
      </div>
    </div>
    <div class="flex flex-row mt-[100px] pl-[60px] gap-20">
      <p class="text-[#3bb77e] font-semibold text-[20px]">Discription</p>
      <p class="font-semibold text-[20px] text-[#B6B6B6]">Additional info</p>
      <p class="font-semibold text-[20px] text-[#B6B6B6]">Review (3)</p>
    </div>
    <p class="mt-[40px]">
      Uninhibited carnally hired played in whimpered dear gorilla koala
      depending and much yikes off far quetzal goodness and from for grimaced
      goodness unaccountably and meadowlark near unblushingly crucial scallop
      tightly neurotic hungrily some and dear furiously this apart.
    </p>
    <p class="mt-[30px]">
      Spluttered narrowly yikes left moth in yikes bowed this that grizzly much
      hello on spoon-fed that alas rethought much decently richly and wow
      against the frequent fluidly at formidable acceptably flapped besides and
      much circa far over the bucolically hey precarious goldfinch mastodon
      goodness gnashed a jellyfish and one however because.
    </p>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);

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
    FontAwesomeIcon,
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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Quicksand:wght@300;400&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400&display=swap");

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
  font-family: Quicksand;
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
