<template>
    <div class="selectBar">
        <span class="selectBarPath">{{currentPath}}</span>
        <button class="selectBarButton" @click="pathSelected">Ordner auswählen</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SelectBar",
    emits: ["closeFilebrowser"],
    props: {
      currentPath: String,
    },
    methods: {
        pathSelected(e){
            if (this.currentPath == "" ) {return}
            
            this.$emit("closeFilebrowser",e);
            
        }
    }
  };
  </script>
  