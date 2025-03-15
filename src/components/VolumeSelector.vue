<template>
  <div class="volumeSelector" >
    <h2>Volume {{ volume }}</h2>
     <p class="volumeSelect"> ausgewählter Pfad: {{selectedPath}} </p>
     <button class="volumeSelectBtn" @click="volumeClicked"> Pfad wählen </button>
  </div>
</template>

<script>
export default {
  name: 'VolumeSelector',
  emits: ["openFilebrowser"],
  components: {
  },
  props: {
    volume: String,
    selectedPath: String
  },
  data() {
    return {
      isSelected: false,
      tmpPath: ""
    }
  },
  methods:{
    volumeClicked(){
      if(this.isSelected){
        return;
      }

      // this.tmpPath = "C:/Hallo";
      this.$emit("openFilebrowser", this.volume);
      this.isSelected = true;
    }
  }
}
</script>

<style scoped>
  .volumeSelector{
    user-select: none;
    cursor:pointer;
    padding: 1em;
  }
</style>
