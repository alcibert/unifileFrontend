<template>
    <div class="contentListElement">
      <span>{{ element.name }}</span>
      <span>{{ element.size }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContentListElement',
    props: {
        element: {}
    },
    data() {
        return {
        }
    },
    mounted(){
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
