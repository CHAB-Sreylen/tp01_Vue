<template>
    <div class="banner-box"  :style="{ backgroundColor: bannerBg }">
       <div>
            <p class="text">{{ Title }}</p>
            
       </div>
       <img class="image" :src="img" alt="">
    </div>
</template>

<script>
// import Button from ".components/Button.Vue";
export default{
    name:"Banner",
    props: {
        bannerBg:String,
        img:String,
        Title:String,
    }
}
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap');
       
    .banner-box{ 
        display: flex;
        position: relative;
        align-items: center;
        width: 460px;
        height: 300px;
        background-color:rgba(182, 182, 182, 1);
        border-radius: 10px;
        margin-right: 17px;
    }
    .text{
        width: 271px;
        height: 48px;
        position: absolute;
        left: 48px;
        top: 75px;
        font-family: Quicksand;
        font-weight: 700;
        font-size: 24px;
    }
    .btn{
        position: absolute;
        top:190px;
        left: 48px;
    }
    .image{
        margin-top: 95px;
        margin-left: 50px;
        width: 411px;
        height: 181px;
        
    }
</style>
