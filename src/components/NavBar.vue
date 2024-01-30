<template>
  <div class="h-[100px] flex items-center justify-between">
    <div class="ml-[20px]">
      <div
        class="w-[250px] h-[40px] flex items-center rounded-[5px]"
        style="background-color: #3bb77e"
      >
        <svg
          class="fill-white w-[25px] h-[25px] ml-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"
          ></path>
        </svg>
        <div class="flex flex-row items-center">
          <p class="text-white ml-2">Browse All Categories</p>
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="w-[30px] h-2 mt-0"
            style="color: white"
          />
        </div>
      </div>
    </div>
    <Nav_item
      v-for="i in Nav_item"
      :IconFront="i.IconFront"
      :name="i.name"
      :IconBack="i.IconBack"
    />
    <div>
      <div class="flex flex-row items-center">
        <div class="logo flex flex-row pr-[40px]">
          <svg
            class="w-[50px] h-[50px] fill-[#253D4E]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"
            ></path>
          </svg>
          <div class="flex flex-col pl-[20px]">
            <p class="text-[25px] font-[700px]" style="color: #3bb77e">
              099 777 888
            </p>
            <p class="text-[11px]">24/7 Support Center</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");
.box {
  font-family: Quicksand;
}
</style>
<script>
import { mapState } from "pinia";
import { useProductStore } from "../stores/ProductStore";
import Nav_item from "./Nav_item.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faL, fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);

export default {
  name: "NavBar",
  components: {
    FontAwesomeIcon,
    Nav_item,
  },
  computed: {
    ...mapState(useProductStore, ["Nav_item"]),
  },
};
</script>
