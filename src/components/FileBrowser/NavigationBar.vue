<template>
  <div class="navBar">
    <span class="back" @click="back">←</span>
    <span class="up" @click="up">↑</span>

    <!-- This could be an own Component e. g. pathBar -->
    <div class="pathBar">
      <img src="@/assets/icons/window/browser.png" alt="ICON" class="favicon" />
      <span v-for="folder of cwdPathArray" :key="folder" class="pathObj">
        {{ folder }}
      </span>
      <!-- ToDo: Bei Klick auf Ordner zu diesem springen -->
      <!-- ToDo: Bei Hover, zeige Ordnerinhalt (Ordner) als Dropdown an-->
    </div>
    <div class="searchBar">
      <span class="searchIcon">🔎</span>
      <input
        type="text"
        id="searchInput"
        :placeholder="'&quot;' + currentFolder + '&quot; durchsuchen'"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  emits: ["new-cwd", "back"],
  props: {
    cwdPath: String,
    currentFolder: String,
  },
  computed: {
    cwdPathArray() {
      return this.cwdPath?.split("\\");
    },
  },
  methods: {
    up() {
      let upPath = [...this.cwdPathArray];
      if (upPath.length <= 2) {
        console.warn("Cannot go further up in file tree.");
        this.$emit("new-cwd", ".");
        return;
      }
      console.log(upPath)
      upPath.pop();
      upPath = upPath.join("\\");
      this.$emit("new-cwd", upPath + "\\");
    },
    back() {
      this.$emit("back");
    },
  },
};
</script>
