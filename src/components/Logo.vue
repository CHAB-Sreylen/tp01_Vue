<template>
    <div class="box flex justify-between items-center">
      <div class="flex flex-row items-center">
        <div class="logo flex flex-row pr-[40px]">
          <img
            class="w-[78px] h-[58px] bg-black"
            src="../assets/image/icon.jpg"
            alt=""
          />
          <div class="flex flex-col pl-[20px]">
            <p
              class="text-[40px] font-[700] leading-[50px]"
              style="color: #3bb77e"
            >
              Melon
            </p>
            <p class="text-[11px] font-[600] leading-[20px]">MART & GRACERY</p>
          </div>
        </div>
        <div
          class="w-[700px] h-[50px] border-[2px] rounded-[5px] flex items-center pl-[20px] justify-between pr-[20px]"
          style="border-color: #bce3c9"
        >
          <div class="flex items-center flex-row">
            <p class="text-[14px] font-[600] leading-[20px]">All Categories</p>
            <font-awesome-icon
              :icon="['fas', 'chevron-down']"
              class="w-[30px] h-2 mt-1"
            />
            <div class="mt-1 opacity-50 text-[14px]">| Search for items</div>
          </div>
          <font-awesome-icon icon="magnifying-glass" class="opacity-50" />
        </div>
      </div>
      <div class="flex flex-row mr-3 mt-0">
        <div class="flex flex-row items-center">
          <svg
            class="w-[25px] h-[25px] flex items-center"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            ></path>
          </svg>
          <p class="ml-[10px]">Account</p>
        </div>
        <div class="flex flex-row ml-4 items-center">
          <svg
            class="w-[25px] h-[25px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 4C9.4095 4 7.10606 5.23053 5.64274 7.14274L8 9.5H2V3.5L4.21863 5.71863C6.05061 3.452 8.85558 2 12 2 17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4ZM4 12C4 16.4183 7.58172 20 12 20 14.5905 20 16.894 18.7695 18.3573 16.8573L16 14.5 22 14.5V20.5L19.7814 18.2814C17.9494 20.548 15.1444 22 12 22 6.47715 22 2 17.5228 2 12H4Z"
            ></path>
          </svg>
          <p class="ml-[10px]">Compare</p>
        </div>
        <div class="flex flex-row ml-4 items-center">
          <svg
            class="w-[25px] h-[25px]"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
            ></path>
          </svg>
          <p class="ml-[10px]">Wishlist</p>
        </div>
        <div class="flex flex-row ml-4 items-center">
          <svg  class="w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg>
          <p class="ml-[10px]">Cart</p>
        </div>
      </div>
    </div>
  </template>
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");
  .box {
    font-family: Quicksand;
  }
  </style>
  <script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { faL, fas } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  library.add(fas);
  
  export default {
    name: "Logo",
    components: {
      FontAwesomeIcon,
    },
  };
  </script>
  
  
  