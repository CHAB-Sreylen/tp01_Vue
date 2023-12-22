<template>
    
    <div class="flex flex-col">
        <h1>fsdfasf</h1>
        <div class="mr-3">{{ IconFront }}</div>
        <p class="mr-3">{{ name }}</p>
        <div class="">{{ IconBack }}</div>
    </div>

</template>

<script>
import {mapState} from "pinia";
import { useProductStore } from "../stores/ProductStore";
export default{
    name:"Nav_item",
    prop:{
        IconFront:String,
        name:String,
        IconBack:String,
    },
    computed:{
        ...mapState(useProductStore,["NavItem"]),
    }
};

</script>


<style>



</style>