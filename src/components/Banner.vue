<template>
  <div class="banner-box" :style="{ backgroundColor: bannerBg }">
    <div>
      <p class="text">{{ Title }}</p>
      <Button class="btn" :btnBg="btnColor"></Button>
    </div>
    <img class="image" :src="img" alt="" />
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Banner",
  components: {
    Button,
  },
  props: {
    bannerBg: String,
    img: String,
    Title: String,
    btnColor: String
  },
  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");

.banner-box {
  display: flex;
  position: relative;
  align-items: center;
  width: 505px;
  height: 300px;
  background-color: rgba(182, 182, 182, 1);
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* border: 1px solid #81B13D; */
  margin-right: 17px;
}
.text {
  width: 271px;
  height: 48px;
  position: absolute;
  left: 48px;
  top: 75px;
  font-family: Quicksand;
  font-weight: 700;
  font-size: 24px;
}
.btn {
  position: absolute;
  top: 240px;
  left: 48px;
  border: none;
  border-radius: 3px;
}
.image {
  margin-top: 95px;
  margin-left: 50px;
  width: 411px;
  height: 181px;
}
</style>
