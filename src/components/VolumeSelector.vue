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
    currentPath: String,
    selectedPath: String
  },
  data() {
    return {
      isSelected: false,
    }
  },
  methods:{
    volumeClicked(){
      if(this.isSelected){
        return;
      }
      this.$emit("openFilebrowser", this.volume);
      this.isSelected = true;
    },
    fetchContent(){
        let url = `http://localhost:8080/api/v1.0/directory/scan/${this.volume}?path=${this.selectedPath}`;
        fetch(url).then(response => response.json()).then((data) => {
            this.contentElement = data;
            console.log("fetchContent from VolumeSelector:  " + this.contentElement);
        });
    }
  },
  // watch: {
  //   selectedPath(newValue, oldValue) {
  //     this.selectedPath = newValue;
  //   }
  // },
}
</script>

<style scoped>
  .volumeSelector{
    user-select: none;
    cursor:pointer;
    padding: 1em;
  }
</style>
