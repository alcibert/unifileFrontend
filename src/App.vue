<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <button class="btn" @click="switchLanguage('de')">🇩🇪 Deutsch</button>
    <button class="btn" @click="switchLanguage('en')">🇬🇧 English</button>
    <h1>{{ $t("welcome") }}</h1>
    <div class="row">
      <VolumeSelector class="volSelA col-md-6" volume="A" 
        @openFilebrowser="onOpenFilebrowser" 
        @scanned="onScanned" 
        :selectedPath="selectedPaths['A']"
      />
      <VolumeSelector class="volSelB col-md-6" volume="B" 
        @openFilebrowser="onOpenFilebrowser" 
        @scanned="onScanned" 
        :selectedPath="selectedPaths['B']"
      />
    </div>
    <ConflictList v-if="this.allScanned" class ="conflictList" />
    <FileBrowserWindow @closeFilebrowser="onCloseFilebrowser" @cwdPathUpdate="updateCurrentPath" :isVisible = "isOpen"/>
    <MergeStarter />
  </div>
</template>

<script>
import VolumeSelector from './components/VolumeSelector.vue';
import FileBrowserWindow from "./components/FileBrowser/FileBrowserWindow.vue";
import ConflictList from './components/ConflictList/ConflictList.vue';
import MergeStarter from './components/MergeStarter.vue';

export default {
  name: 'App',
  components: {
    ConflictList,
    VolumeSelector,
    FileBrowserWindow,
    MergeStarter
  },
  data(){
    return{
      isOpen: false,
      currentVolume: "",
      volume: String,
      selectedPaths: {},
      isScannedA: false,
      isScannedB: false,
      allScanned: false,
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
    onCloseFilebrowser(){
      this.isOpen = false;

    },
    switchLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang); //Spracheinstellung in local Storage speichern
    },
    onScanned(volume){
      if (volume == "A") {this.isScannedA = true;}
      else if (volume =="B") {this.isScannedB = true;}
      if (this.isScannedA && this.isScannedB == true) {this.allScanned = true;}
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
  .btn{
    margin-right:1em;
  }
</style>
