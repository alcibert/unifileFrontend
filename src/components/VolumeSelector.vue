<template>
  <div class="volumeSelector" >
    <h2>Volume {{ volume }}</h2>
     <p class="volumeSelect"> {{$t("selectedPath")}} {{selectedPath}} </p>
     <button class="volumeSelectBtn" @click="volumeClicked"> {{ $t("selectPath") }} </button>
  </div>
</template>

<script>
export default {
  name: 'VolumeSelector',
  emits: ["openFilebrowser", "scanned"],
  components: {
  },
  props: {
    volume: String,
    selectedPath: String
  },
  data() {
    return {
      isSelected: false,
      isScanned: false,
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
    scanContent(){
        let url = `http://localhost:8080/api/v1.0/directory/scan/${this.volume}?path=${encodeURIComponent(this.selectedPath)}`;
        fetch(url).then(response => {
          if (response.status === 200) {
            this.isScanned = true;
            console.log(`${this.volume} scanned successfully`);
            this.$emit("scanned", this.volume);
          }
          else {console.warn(`HTTP Response not ok: ${response?.status}`);}
        // fetch(url).then(response => response.json()).then((data) => {
        //     this.contentElement = data;
        //     console.log("fetchContent from VolumeSelector"+ this.volume + ": " + this.contentElement);
        });
    }
  },
  watch: {
    selectedPath() {
      this.scanContent();
    }
  },
}
</script>

<style scoped>
  .volumeSelector{
    user-select: none;
    cursor:pointer;
    padding: 1em;
  }
</style>
