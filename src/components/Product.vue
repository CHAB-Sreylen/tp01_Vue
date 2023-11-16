<template>
  <div
    class="box w-[298px] h-[402px] bg-white relativ rounded-[10px] border-solid border-2 relative"
    style="border-color: #bce3c9"
  >
    <div
      class="pLabel top-[20px] relative w-[58px] h-[32px] bg-#3BB77E rounded-r-[30px] flex justify-center items-center"
    >
      <p class="text-[12px] text-white">-17%</p>
    </div>
    <img
      src="../assets/image/Mango.png"
      alt=""
      class="w-[201px] h-[145px] relative top-[40px] left-[47px] bg-none"
    />
    <p class="text1 text-[12px] relative top-[60px] left-[20px]">Hodo Foods</p>
    <p class="text2 relative top-[60px] left-[20px]">
      Seeds of Change Organic Quioa,<br />Brown, & Red Rice
    </p>
    <div class="relative left-[20px] top-[60px] flex row items-center gap-1">
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
    <p class="relative text-slate-500 top-[65px] left-[20px]">500 gram</p>
    <div class="flex flex-row justify-between absolute bottom-[25px] items-end w-full">
      <div class="flex row items-center ml-[20px]">
        <p class="text4">$2.51</p>
        <p class="text5 line-through ml-2 mt-1">$2.00</p>
      </div>
      <div class="w-[50px] border-green-600 border h-[30px]  mr-[20px]">
        <input type="number" value="1" min="0" class="w-[40px] pl-[10px]">
      </div>
      
      <!-- <div class="relative w-[67px] h-[29px] top-[75px] right-[20px] rounded-[4px] border-solid border-[1px]" style="border-color:#3BB77E ;" > -->
      <!-- <font-awesome-icon :icon="['fas', 'chevron-up']" class=" absolute w-2 h-2 left-12 top-[3px]"  style="color: #CDCDCD;"/>  -->

      <!-- <font-awesome-icon :icon="['fas', 'chevron-down'] "  class=" absolute w-2 h-2 left-12 top-[18px]" style="color: #CDCDCD;"/>  -->

      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export default {
  components: {
    FontAwesomeIcon,
  },
  methods: {
    increaseNum() {
      this.button = false;
    },
    decreaseNum() {
      let n = document.getElementById("input_amount");
      if (n.value == 0) {
        this.button = true;
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");
.box {
  font-family: Quicksand;
}
input{
  outline: none ;
  border: #3bb77e;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {
  opacity: 1;
  color: #3bb77e;
}
.text1 {
  font-weight: 400px;
  font-size: 12px;
  color: #7e7e7e;
}
.text2 {
  font-weight: 700;
  font-size: 12px;
}
.text3 {
  font-weight: 400;
  font-size: 12px;
  color: #7e7e7e;
}
.text4 {
  font-weight: 700;
  font-size: 20px;
  color: #3bb77e;
}
.text5 {
  font-weight: 700;
  font-size: 12px;
  color: #7e7e7e;
}
.pLabel {
  background-color: #3bb77e;
}
.text1 {
  color: #7e7e7e;
}
</style>
