<template>
    <div class="selectBar">
        <div>
          {{ $t("selectFolder") }}
          <span class="selectBarPath">{{currentPath}}</span>
        </div>
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
  