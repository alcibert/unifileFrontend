<template>
    <div class="selectBar">
        <span class="selectBarPath">{{currentPath}}</span>
        <button class="selectBarBtn" @click="pathSelected">{{ $t("selectPath") }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SelectBar",
    emits: ["pathSelected"],
    props: {
      currentPath: String,
    },
    methods: {
        pathSelected(){
            if (this.currentPath == "" ) {return}
            this.$emit("pathSelected");
            
        }
    }
  };
  </script>
  