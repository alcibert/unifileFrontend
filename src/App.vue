<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <button @click="switchLanguage('de')">🇩🇪 Deutsch</button>
    <button @click="switchLanguage('en')">🇬🇧 English</button>
    <h1>{{ $t("welcome") }}</h1>
    <div class="row">
      <VolumeSelector class="volSelA col-md-6" volume="A" @openFilebrowser="onOpenFilebrowser" :selectedPath="selectedPaths['A']" />
      <VolumeSelector class="volSelB col-md-6" volume="B" @openFilebrowser="onOpenFilebrowser" :selectedPath="selectedPaths['B']"/>
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
      currentVolume: "",
      volume: String,
      selectedPaths: {},
    };
  },
  methods:{
    updateCurrentPath(newPath){
      // if (this.currentVolume=="A"){this.newPathA = newPath;}
      // else if (this.currentVolume=="B"){this.newPathB = newPath;}
        this.selectedPaths = { ...this.selectedPaths, [this.currentVolume]: newPath };
    },
    onOpenFilebrowser(volume){
      this.isOpen= true;
      console.log("Volume= " + volume);
      this.currentVolume = volume;
    },
    switchLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang); //Spracheinstellung in local Storage speichern
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
