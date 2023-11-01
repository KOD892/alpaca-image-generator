<script setup>
import { ref, watchEffect } from 'vue';
import { useAlpacaStore } from '../stores/alpaca';
const store = useAlpacaStore();

const neck = ref(null);
const ears = ref(null);
const hair = ref(null);
const mouth = ref(null);
const accessory =ref(null)
const eyes =ref(null)


watchEffect(() => {
  if (neck.value) {
     let url = getSrc(store.currentAccessory,store.currentStyle);
     setSrc(url);
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
})

function getSrc(accessory,style){
    return '/src/assets/alpaca/'+accessory+'/'+style+'.png'
}
function setSrc(url){
    switch (store.currentAccessory) {
     case "neck":
        neck.value.src = url
        break;
     case "ears":
        ears.value.src = url
        break;
     case "hair":
        hair.value.src = url
        break;
     case "eyes":
        eyes.value.src = url
        break;
     case "mouth":
        mouth.value.src = url
        break;
     case "accessories":
        accessory.value.src = url
        break;
  default:
    
    break;
}
}
    
</script>
<template>
    <div class="main">
      <div class="img">
        <img ref="neck" src="../assets/alpaca/neck/default.png" alt="">
        <img ref="ears" src="../assets/alpaca/ears/default.png" alt="">
        <img ref="hair" src="../assets/alpaca/hair/default.png" alt="">
        <img src="../assets/alpaca/nose.png" alt="">
        <img ref="eyes" src="../assets//alpaca/eyes/default.png" alt="">
        <img ref="mouth" src="../assets//alpaca/mouth/default.png" alt="">
        <img ref="accessory" src="../assets/alpaca/accessories/earings.png" alt="">
      </div>  
    </div>

 
</template>
<style scoped>
.main{
    height: 60dvh;
    background: #00013f;
    position: relative;
}
img{
    max-width: 60dvh;
    position: absolute;
    bottom: 0;
    left: -5%;
}
</style>