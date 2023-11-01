import { defineStore } from 'pinia'
import { ref } from 'vue';
export const useAlpacaStore = defineStore('alpaca',{
  
state: ()=>({
    accessories: {
      hair:['default','bang','curls','elegant','fancy','quiff','short'],
      ears:['default','tilt-backward','tilt-forward'],
      eyes:['default','angry','naughty','panda','smart','star'],
      mouth:['default','astonished','eating','laugh','tongue'],
      neck:['default','thick','bend-forward','bend-backward'],
      leg:['default','bubble-tea','cookie','tilt-forward','tilt-backword','game-console'],
      accessories:['earings','flower','glasses','headphone'],
      background:[]
    },
    currentAccessory:ref('hair'),
    currentStyle:ref('default')

  }),
  getters:{
    getCurrentAccessory(){
      return this.currentAccessory
    },
    getCurrentStyle(){
      return this.currentStyle
    }

  },
actions:{
  onAccessoryChange(accessory){
      this.currentAccessory = accessory
      // if(this.accessories[accessory].includes(this.currentStyle)){
      //     this.currentStyle = this.accessories[accessory][0]
      // }
      
  },
  onStyleChange(style){
    this.currentStyle = style
    console.log(this.currentStyle)
  }



  }
})
