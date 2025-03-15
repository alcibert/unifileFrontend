<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <h1>Unifile</h1>
    <div class="row">
      <VolumeSelector class="volSelA col-md-6" volume="A" @openFilebrowser="onOpenFilebrowser" :selectedPath="newPathA" />
      <VolumeSelector class="volSelB col-md-6" volume="B" @openFilebrowser="onOpenFilebrowser" :selectedPath="newPathB"/>
    </div>
    <FileBrowserWindow @closeFilebrowser="isOpen = false" @cwdPathUpdate="updateCurrentPath" :isVisible = "isOpen"/>
  </div>
</template>

<script>
import VolumeSelector from './components/VolumeSelector.vue';
import FileBrowserWindow from "./components/FileBrowser/FileBrowserWindow.vue";

export default {
  name: 'App',
  components: {
    VolumeSelector,
    FileBrowserWindow,
  },
  data(){
    return{
      isOpen: false,
      isSelected: true,
      newPathA: "",
      newPathB:"",
      currentVolume: "",
    };
  },
  methods: {
    updateCurrentPath(newPath){
      if (this.currentVolume=="A"){this.newPathA = newPath;}
      else if (this.currentVolume=="B"){this.newPathB = newPath;}
    },
    onOpenFilebrowser(volume){
      this.isOpen="true"
      console.log("Volume= " + volume);
      this.currentVolume = volume;
    }
  }
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
