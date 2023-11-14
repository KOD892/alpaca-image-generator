<script setup>
import ImageGen from './components/ImageGen.vue';
import ImageDisplay from './components/ImageDisplay.vue';


</script>

<template>
  <header class="container">
    <h1>Alpaca Image Generator</h1>
  </header>
  <main class="container">
    <div class="row">
      <div class="six columns">  
        <ImageDisplay/>
      </div>
      <div class="six columns">
        <ImageGen/>
      </div>
      
    </div>
  </main>
</template>

<style scoped>

</style>
