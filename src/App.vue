<!-- <script setup>
 import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script> -->
<template>
  <h1>This is my first project</h1>
  <!-- <Button color="red" text="Hi"></Button> -->
  <!-- <Button text=""></Button> -->

</template>
<script>
import Button from"./components/Button.vue";
  export default{
      name: "App",
      components:{
        Button,

      },
  };
</script>

<style>

body{
  background-color: white;
  color: black;
}
   
</style>
