<template>
    <div class="conflictListElement" :class="[element.merge]">
      <span>{{ element.fileA.name }}</span>
      <span>{{ getSize(element.fileA.size) }}</span>
      <span>{{ getTimestamp(element.fileA.lastModified) }}</span>
      <div class="conflictChoiceSelector">
        <button @click="setTakeA">{{ takeA }}</button>
        <button @click="setIgnore">{{ ignore }}</button>
        <button @click="setTakeB">{{ takeB }}</button>
      </div>
      <span>{{ element.fileB.name }}</span>
      <span>{{ getSize(element.fileB.size) }}</span>
      <span>{{ getTimestamp(element.fileB.lastModified) }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConflictListElement',
    emits: ["mergeChanged"],
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
      setTakeA(){
        let url = `http://localhost:8080/api/v1.0/conflict/${this.element.id}/setMergeStrategy`;
        fetch(url, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: 1
        }).then((response) => {
          if (response?.ok) {
            return response.json();
          } else {
            console.warn(`HTTP Response not ok: ${response?.status}`);
          }
        })
        .then((data) => {
          // handleResponse(data);
          this.$emit("mergeChanged", [this.element, data])
        })
        .catch((error) => {
          console.log("Something went wrong while calling the API", error);
        });
      },
      setTakeB(){
        let url = `http://localhost:8080/api/v1.0/conflict/${this.element.id}/setMergeStrategy`;
        fetch(url, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: 2
        }).then((response) => {
          if (response?.ok) {
            return response.json();
          } else {
            console.warn(`HTTP Response not ok: ${response?.status}`);
          }
        })
        .then((data) => {
          // handleResponse(data);
          this.$emit("mergeChanged", [this.element, data])
        })
        .catch((error) => {
          console.log("Something went wrong while calling the API", error);
        });
      },
      setIgnore(){
        let url = `http://localhost:8080/api/v1.0/conflict/${this.element.id}/setMergeStrategy`;
        fetch(url, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: 3
        }).then((response) => {
          if (response?.ok) {
            return response.json();
          } else {
            console.warn(`HTTP Response not ok: ${response?.status}`);
          }
        })
        .then((data) => {
          // handleResponse(data);
          this.$emit("mergeChanged", [this.element, data])
        })
        .catch((error) => {
          console.log("Something went wrong while calling the API", error);
        });
      },
      getTimestamp(timeString){
        let date = new Date(timeString);
        let today = new Date(Date.now());
        if (date.toLocaleDateString() == today.toLocaleDateString()) {
          return `${date.toLocaleTimeString()} Uhr`;
        }
        return `${date.toLocaleString()} Uhr`;
      },
      getSize(sizeInBytes) {
        let size = parseInt(sizeInBytes);
        let sizeEnding = "B";
        let shortSize = size;
        if (size >= 1000000000000) {
          sizeEnding = "TB";
          shortSize = size / 1000000000000;
        } else if (size >= 1000000000) {
          sizeEnding = "GB";
          shortSize = size / 1000000000;
        } else if (size >= 1000000) {
          sizeEnding = "MB";
          shortSize = size / 1000000;
        } else if (size >= 1000) {
          sizeEnding = "KB";
          shortSize = size / 1000;
        } else if (size == 0) {
          return "";
        }
        shortSize = new Intl.NumberFormat("de-DE", {
          maximumSignificantDigits: 3,
        }).format(shortSize);
        return `${shortSize} ${sizeEnding}`;
      }
    },
    computed: {
      takeA(){
        let haken = this.element.merge == "KEEP_A" ? "✔" : "";
        return haken + " " + this.$i18n.t('takeA');
      },
      takeB(){
        let haken = this.element.merge == "KEEP_B" ? "✔" : "";
        return haken + " " + this.$i18n.t('takeB');
      },
      ignore(){
        let haken = this.element.merge == "IGNORE" ? "✔" : "";
        return haken + " " + this.$i18n.t('ignore');
      }
    }
  }
  </script>
  
  <style scoped>
    .NOT_SET{
      background-color:#ff990081;
    }
    .IGNORE{
      background-color:transparent;
    }
    .KEEP_A{
      background-color: lightblue;
    }
    .KEEP_B{
      background-color: lightcoral;
    }
    .conflictListElement{
      display:flex;
      justify-content: space-around;
      border-bottom: 1px solid black;
      margin-block:1em;
    }
    button:not(:last-child){
      margin-right:.5em;
    }

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
