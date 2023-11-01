<script setup>
import { onMounted, ref } from 'vue';
import {useAlpacaStore} from '../stores/alpaca'
const store = useAlpacaStore()
const keys =ref()
keys.value = Object.keys(store.accessories)
const currentAccessory =ref(null);
const currentStyle =ref(null);

//functions
const onClickAccessory = (e)=>{
    currentAccessory.value = e.target.value
    store.onAccessoryChange(currentAccessory.value)
}
const onClickStyle=(e)=>{
    currentStyle.value = e.target.value
    store.onStyleChange(currentStyle.value)
}




onMounted(()=>{
    currentAccessory.value = store.getCurrentAccessory
    currentStyle.value = store.getCurrentStyle
})
</script>
<template>
    <div class="container">
        <div class="controllers">
            <h4>Accessorize the ALPACA</h4>
            <input :class="currentAccessory==k?'selected':''" @click="onClickAccessory($event)" v-for="(k,index) in keys" :key="index" type="button" :value="k">
        </div>            
        <div class="options">
            <h4>Styles</h4>
            <input :class="currentStyle==a?'selected':''" @click="onClickStyle($event)" v-for="(a,index) in store.accessories[currentAccessory]" :key="index" type="button" :value="a">
        </div>
    </div>
</template>

<style scoped>
input[type=button]{
    margin:1.2rem;
    border: 1px solid #00fcda;
    border-radius: 20px;
}
.selected{
    background-color: #00fcda;
    color: #fff;
}
</style>