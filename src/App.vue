<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <h1>Unifile</h1>
    <div class="row">
      <VolumeSelector class="volSelA col-md-6" volume="A" />
      <VolumeSelector class="volSelB col-md-6" volume="B" />
    </div>
    <FileBrowserWindow />
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
  }
}
</script>

<style>
  .volSelA{
    background-color:lightblue;
  }
  .volSelB{
    background-color: lightcoral;
  }
</style>
