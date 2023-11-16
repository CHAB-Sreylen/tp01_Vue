<template>
  <div
    class="box w-[298px] h-[402px] relative bg-white rounded-[10px] border-solid border-2 "
  >
    <div
      class="top-[20px] relative w-[58px] h-[32px] rounded-r-[30px] flex justify-center items-center"
      :style="{backgroundColor:pbg}"
    >
      <p class="text-[12px] text-white">{{ ptype }}</p>
    </div>
    <img
      alt=""
      class="w-[201px] h-[145px] relative top-[40px] left-[47px] "
      :src="pimg"
    />
    <p class="text1 text-[12px] relative top-[60px] left-[20px]">Hodo Foods</p>
    <p class="text2 relative top-[60px] left-[20px] w-[210px] h-2">
      {{ pdetail }}
    </p>
    <div class="relative left-[20px] top-[90px] flex row items-center gap-1">
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
    <p class="relative text-slate-500 top-[95px] left-[20px]">500 gram</p>
    <div class="flex row justify-between absolute top-[270px]">
      <div class="flex ">
        <p class="text4 relative top-[75px] left-[20px]">$2.51</p>
        <p class="text5 line-through relative top-[83px] left-[30px]">$2.00</p>
      </div>
      <div
        class="relative flex justify-center items-center gap-2 w-[67px] h-[29px] top-[80px] left-[130px] rounded-[4px]"
        style="background-color: #def9ec"
      >
        <p class="text-xs" style="color: #3bb77e">Add</p>
        <font-awesome-icon
          :icon="['fas', 'plus']"
          class="w-3 h-3"
          style="color: #3bb77e"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export default {
  name: "AllProduct",
  props: {
    pimg: String,
    pbg: String,
    ptype: String,
    pdetail: String,
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");
.box {
  font-family: Quicksand;
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

.text1 {
  color: #7e7e7e;
}
</style>
