<template>
    <div>
      <span>{{ element.id }}</span>
      <span>{{ element.fileA }}</span>
      <span>{{ element.fileB }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConflictListElement',
    props: {
        element: {}
    },
    data() {
        return {
        }
    },
    mounted(){
      console.log("ConflictListElement mounted");
    },
    methods:{
    }
  }
  </script>
  
  <style scoped>

  </style>
  
  <!-- id: Number,
  name: String,
  size: Number,
  lastModified: Number,
  relativePath: String,
  absolutePath: String,
  isDirectory: Boolean,
  volume: String
  content: Array -->
