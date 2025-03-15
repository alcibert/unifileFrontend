<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <h1>Unifile</h1>
    <div class="row">
      <VolumeSelector class="volSelA col-md-6" volume="A" @openFilebrowser="isOpen = true" />
      <VolumeSelector class="volSelB col-md-6" volume="B" @openFilebrowser="isOpen = true"/>
    </div>
    <FileBrowserWindow @closeFilebrowser="isOpen = false" :isVisible = "isOpen"/>
  </div>
</template>

<script>
import VolumeSelector from './components/VolumeSelector.vue';
import FileBrowserWindow from "./components/FileBrowser/FileBrowserWindow.vue";

export default {
  name: 'App',
  components: {
    VolumeSelector,
    FileBrowserWindow
  },
  data(){
    return{
      isOpen: false,
    };
  },
};
</script>

<style>
  .volSelA{
    background-color:lightblue;
  }
  .volSelB{
    background-color: lightcoral;
  }
</style>
