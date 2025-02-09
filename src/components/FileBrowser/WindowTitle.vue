<template>
  <div class="titlebar">
    <img src="@/assets/icons/window/browser.png" alt="ICON" class="favicon" />
    <span class="view">Ansicht</span>
    <span class="title">{{ currentFolder }}</span>
    <span class="exp-close">╳</span>
  </div>
</template>

<script>
export default {
  name: "WindowTitle",
  props: {
    currentFolder: String,
  },
};
</script>
