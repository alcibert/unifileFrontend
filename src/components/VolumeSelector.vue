<template>
  <div class="volumeSelector" @click="volumeClicked">
    <h2>Volume {{ volume }}</h2>
    <ContentList v-if="isSelected" :selectedPath="tmpPath" :volume="volume" />
  </div>
</template>

<script>
import ContentList from './VolumeSelector/ContentList.vue'
export default {
  name: 'VolumeSelector',
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
    volumeClicked(){
      if(this.isSelected){
        return;
      }
      this.tmpPath = "B:/tmp";
      this.isSelected = true;
      //ToDo: Open Explorer
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
