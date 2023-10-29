<template>
    <button :style="{color,icon,text}" v-text="text"></button>
</template>

<script>
    export default{
        name: "Button",
        props:["text","color","icon"],

    };
</script>

<style scoped>
    button{
        background-color: aquamarine;
        width: 200px;
        height: 40px;
    }
</style>