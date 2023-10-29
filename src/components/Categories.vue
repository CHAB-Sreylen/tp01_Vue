<template>
  <div class="Item-Box" :style="{ backgroundColor: bg }">
    <img style="" :src="Img" alt="" />
    <div style="position: absolute; bottom: 10px">{{ ItemName }}</div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: {
    Img: String,
    ItemName: String,
    bg: String,
  },
};
</script>

<style scoped>
.Item-Box {
  position: relative;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 135px;
  
  border: 1px solid rgba(129, 177, 61, 1);
  border-radius: 10px;
}
.Image {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
