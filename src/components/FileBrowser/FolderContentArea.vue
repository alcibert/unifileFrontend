<template>
  <div class="contentScroll">
    <div class="folderContent">
      <!-- Resizable div: https://htmldom.dev/resize-columns-of-a-table/ -->
      <div class="header">
        <span>Name</span>
        <span>Änderungsdatum</span>
        <span>Typ</span>
        <span>Größe</span>
      </div>
      <ContentElement
        v-for="element of contentObject.content"
        :key="element.absolutePath + '\\' + element.name"
        :element="element"
        @new-cwd="(e) => newCwd(e)"
      />
    </div>
  </div>
</template>

<script>
import ContentElement from "./ContentElement.vue";
export default {
  name: "FolderContentArea",
  emits: ["new-cwd"],
  props: {
    contentObject: Object,
  },
  components: {
    ContentElement,
  },
  methods: {
    newCwd(e) {
      this.$emit("new-cwd", e);
    },
  },
};
</script>
