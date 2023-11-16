<template>
    <div class=" box w-[298px] h-[402px] bg-white absolute rounded-[10px] border-solid border-2 " style="border-color: #BCE3C9;"> 
        <div class="pLabel top-[20px] relative w-[58px] h-[32px] bg-#3BB77E rounded-r-[30px] flex justify-center items-center">
            <p class="text-[12px] text-white">-17%</p>
        </div>
        <img src="../assets/image/Mango.png" alt="" class="w-[201px] h-[145px] relative top-[40px] left-[47px] bg-none">
        <p class="text1 text-[12px] relative top-[60px] left-[20px]">Hodo Foods</p>
        <p class="text2 relative top-[60px] left-[20px]">Seeds of Change Organic Quioa,<br>Brown, & Red Rice</p>
        <div class="relative left-[20px] top-[60px] flex row items-center gap-1">
            <font-awesome-icon :icon="['fas', 'star']" style="color:rgb(253,192,64);" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:rgb(253,192,64);" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:rgb(253,192,64);" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:rgb(253,192,64);" />
            <font-awesome-icon :icon="['fas', 'star']" style="color:#CDCDCD;" />
            <p class=" text3  ml-2">(4.0)</p>
        </div>
        <p class="relative text-slate-500 top-[65px] left-[20px]">500 gram</p>
        <div class="flex row justify-between">
            <div class="flex row ">
            <p class="text4 relative top-[75px] left-[20px]">$2.51</p>
            <p class="text5 line-through relative top-[83px] left-[30px]">$2.00</p>
            </div>
            <div class="relative w-[67px] h-[29px] top-[75px] right-[20px] rounded-[4px] border-solid border-[1px]" style="border-color:#3BB77E ;" >
                <font-awesome-icon :icon="['fas', 'chevron-up']" class=" absolute w-2 h-2 left-12 top-[3px]"  style="color: #CDCDCD;"/>
                <input type="text" placeholder="1" class="absolute left-5 top-[8px]  bg-none border-none w-2 h-3">
                <font-awesome-icon :icon="['fas', 'chevron-down'] "  class=" absolute w-2 h-2 left-12 top-[18px]" style="color: #CDCDCD;"/>
            </div>
            

        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export default{
    components:{
        FontAwesomeIcon,
     },
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap');
.box{
    font-family: Quicksand;
}
.text1{
    font-weight: 400px;
    font-size: 12px;
    color:#7E7E7E;
}
.text2{
    font-weight: 700;
    font-size: 12px;
    
}
.text3{
    font-weight: 400;
    font-size: 12px;
    color:#7E7E7E;
}
.text4{
    font-weight: 700;
    font-size: 20px;
    color:#3BB77E;
}
.text5{
    font-weight: 700;
    font-size: 12px;
    color:#7E7E7E;
}
.pLabel{
    background-color: #3BB77E;

}
.text1{
    color:#7E7E7E;
}


</style>