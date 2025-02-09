<template>
  <div class="contentRow" @dblclick="elementClicked(element)">
    <span :class="'name ' + elementClass">{{ element.name }}</span>
    <span class="modified">{{ elementModifiedFormated }}</span>
    <span class="type">{{ element.isDirectory }}</span>
    <span class="size">{{ elementSizeFormated }}</span>
  </div>
</template>

<script>
export default {
  emits: ["new-cwd"],
  name: "ContentElement",
  props: {
    element: Object,
  },
  methods: {
    elementClicked(e) {
      if (e.isDirectory) {
        this.$emit("new-cwd", e.absolutePath);
      } else {
        console.log("file");
      }
    },
  },
  computed: {
    elementSizeFormated() {
      let size = parseInt(this.element.size);
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
    },
    elementModifiedFormated() {
      if(this.element.lastModified == null){
        return "";
      }
      let date = new Date(this.element.lastModified);
      let today = new Date(Date.now());
      if (date.toLocaleDateString() == today.toLocaleDateString()) {
        return `${date.toLocaleTimeString()} Uhr`;
      }
      return `${date.toLocaleString()} Uhr`;
    },
    elementClass() {
      if (this.element.isDirectory) {
        return "folder";
      }
      let ext = this.element.name.split(".");
      return ext[ext.length - 1];
    },
  },
};
</script>
