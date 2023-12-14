<template>
    <div class="h-[600px] m-auto rounded-[40px] " style="background-color:rgb(245, 245, 224);">
        <div class="" style="background-image: url('./src/assets/image/bg.png'); width: 100%; height:100%;">
            <div class="w-[800px] flex flex-col">
                <p class="text-[70px] font-[1000] leading-[100px] " style="font-family: Quicksand;">Don't miss amazing grocery deals</p>
                <p class="text-[30px] mt-[40px]" style="color: #7E7E7E;">Sign up for the daily newsletter</p>
                <div class="w-[442px] h-[50px] mt-[50px] rounded-[30px] flex justify-between bg-white items-center" >
                    <div class="flex flex-row">
                        <svg class="w-[25px] h-[25px] ml-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>
                        <p class="ml-[20px] opacity-50">Your email address</p>
                    </div>
                    <div class="w-[149px] h-[50px] rounded-[30px] flex items-center justify-center" style="background-color: #3bb77e">
                        <p style="color: white;">Subscribe</p>
                    </div>

                </div>
            </div>
        </div>
        <img class="w-[740px] h-[500px]" src="../assets/image/cover.png" alt="">
    </div>
</template>
<style>
 @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");
  .box {
    font-family: Quicksand;
  }

</style>
<script>

    export default{
        name:"PageCover",
    };
</script>