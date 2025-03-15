<template>
  <div class="volumeSelector" >
    <h2>Volume {{ volume }}</h2>
    <ContentList v-if="isSelected" :selectedPath="tmpPath" :volume="volume" />
     <p class="volumeSelect"> ausgewählter Pfad: {{tmpPath}} </p>
     <button class="volumeSelectBtn" @click="volumeClicked"> Pfad wählen </button>
  </div>
</template>

<script>
import ContentList from './VolumeSelector/ContentList.vue'
export default {
  name: 'VolumeSelector',
  emits: ["openFilebrowser"],
  components: {
    ContentList
  },
  props: {
    volume: String
  },
  data() {
    return {
      isSelected: false,
      tmpPath: String
    }
  },
  methods:{
    volumeClicked(e){
      if(this.isSelected){
        return;
      }
      this.tmpPath = "C:/Hallo";
      this.$emit("openFilebrowser",e)
      this.isSelected = true;
    }
  }
}
</script>

<style scoped>
  .volumeSelector{
    user-select: none;
    min-height:350px;
    cursor:pointer;
  }
</style>
