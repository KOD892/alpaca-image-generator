<script setup>
import { ref, watchEffect } from 'vue';
import { useAlpacaStore } from '../stores/alpaca';
import mergeImages from 'merge-images';
const store = useAlpacaStore();

const image = ref(null)
const neck = ref(null);
const ears = ref(null);
const hair = ref(null);
const mouth = ref(null);
const accessory = ref(null)
const eyes = ref(null)
const nose = ref(null)
const bg = ref(null)
const merged = ref(null)
const mergedSrc = ref(null)
watchEffect(() => {
  if (neck.value) {
     let url = getSrc(store.currentAccessory,store.currentStyle);
     mergedSrc.value = merged.value.src;
     setSrc(url);
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
})
function merge(){
   let blob;
   mergeImages([
   bg.value.src,
   neck.value.src,
   ears.value.src,
   hair.value.src,
   accessory.value.src,
   eyes.value.src,
   nose.value.src,
   mouth.value.src,
])
  .then(b64 =>{
   merged.value.src = b64
   blob = dataURItoBlob(merged.value.src);
// Create a Blob URL for the Blob
   mergedSrc.value = URL.createObjectURL(blob);

   const downloadLink = document.createElement('a');
  // Set the href attribute to the Blob URL
  downloadLink.href = mergedSrc.value;
  // Set the download attribute to specify the filename
  downloadLink.download = 'alpaca.png';
  // Append the anchor element to the body
  document.body.appendChild(downloadLink);
  // Simulate a click on the anchor to trigger the download
  downloadLink.click();
  // Remove the anchor element from the document
  document.body.removeChild(downloadLink);
  // Clean up the Blob URL
  URL.revokeObjectURL(mergedSrc.value);

});


}
function genRandom(){
   image.value.childNodes.forEach(el => {
      if(el.id){
         store.getRandom(el)
      }
   });

}
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
     case "backgrounds":
        bg.value.src = url
        break;
  default:
    
    break;
}
};
function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
</script>
<template>
    <div class="main">
      <div ref="image" class="img">
        <img ref="bg" src="../assets/alpaca/backgrounds/darkblue50.png" id="backgrounds" alt="">
        <img ref="neck" src="../assets/alpaca/neck/default.png" id="neck" alt="">
        <img ref="ears" src="../assets/alpaca/ears/default.png" id="ears" alt="">
        <img ref="hair" src="../assets/alpaca/hair/default.png" id="hair" alt="">
        <img ref="nose" src="../assets/alpaca/nose.png" alt="">
        <img ref="eyes" src="../assets//alpaca/eyes/default.png" id="eyes" alt="">
        <img ref="mouth" src="../assets//alpaca/mouth/default.png" id="mouth" alt="">
        <img ref="accessory" src="../assets/alpaca/accessories/earings.png" id="accessories" alt="">
      </div>  
    </div>
    <img ref="merged" id="merged"/>
    <div class="btns">
         <button @click="genRandom"  id="Random">Random</button>
         <div class="button" @click="merge" id="download">Download</div>
    </div>
</template>
<style scoped>
.main{
    height: 60dvh;
    position: relative;
}
img{
    max-width: 60dvh;
    position: absolute;
    bottom: 0;
    left: -5%;
}
button{
  margin: 20px 0;
}
button[id=Random]{
  margin-right: 20px;
}
#merged{
   position: absolute;
   display: none;
}
</style>