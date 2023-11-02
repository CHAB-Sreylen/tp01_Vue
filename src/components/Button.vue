<template>
    <!-- <button :style="{color,icon,text}" v-text="text"></button> -->
    <button :style="{ backgroundColor:btnBg}">
        <p class="text">Shop Now</p>
        <font-awesome-icon :icon="['fas', 'arrow-right']" style="color: white; margin-left: 15px;"/>
    </button>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

    export default{
        name: "Button",
        components:{
            FontAwesomeIcon,
        },
        props:{
            btnBg:String,
        }

    };
</script>

<style scoped>


  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap');
    button{
        color:white;
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 8px 15px 8px 15px;
        width: 120px;
        height: 30px;
    }
    .text{
        font-weight: 700;
        font-size: 12px;
    }
</style>