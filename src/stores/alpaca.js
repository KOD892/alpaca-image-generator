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
      backgrounds:['blue50','blue60','blue70','darkblue30','darkblue70','darkblue50','green50','green60','green70','grey40','grey70','grey80','red50','red60','red70','yellow50','yellow60','yellow70']
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
      this.currentStyle = this.accessories[accessory][0]
      
  },
  onStyleChange(style){
    this.currentStyle = style
  },
  getRandom(el){
    let keys = Object.keys(this.accessories)
    keys.forEach(k=>{
       if(el.id==k){
        el.src = '/src/assets/alpaca/'+k+'/'+this.accessories[k][Math.floor(Math.random()*this.accessories[k].length)]+'.png'
      }   
    })
  }
     
    



  }
})
