<template>
  <div class="filebrowser">
    <WindowTitle :currentFolder="curFolder" />
    <NavigationBar
      :cwdPath="cwdResponse.absolutePath"
      :currentFolder="curFolder"
      @new-cwd="
        (newCWDValue) => {
          newCWD(newCWDValue);
        }
      "
      @back="historyBack"
    />
    <FolderContentArea
      :contentObject="cwdResponse"
      @new-cwd="
        (newCWDValue) => {
          newCWD(newCWDValue);
        }
      "
    />
  </div>
</template>

<script>
import WindowTitle from "./WindowTitle.vue";
import NavigationBar from "./NavigationBar.vue";
import FolderContentArea from "./FolderContentArea.vue";
export default {
  name: "FileBrowserWindow",
  props: {},
  components: {
    WindowTitle,
    NavigationBar,
    FolderContentArea,
  },
  computed: {
    curFolder() {
      return this.cwdResponse.name
      // if(this.cwdResponse.absolutePath == ""){
      // }
      // let pathArray = this.cwdResponse.absolutePath.split("\\");
      // return pathArray[pathArray.length - 1];
    },
  },
  data() {
    return {
      cwdResponse: { error: true, absolutePath: "" },
      cwd: ".",
      search: "",
      cwdHistory: ["."],
    };
  },
  methods: {
    fetchData() {
      let url = `http://localhost:8080/api/v1.0/directory/explore?cwd=${encodeURIComponent(
        this.cwd
      )}`;
      fetch(url)
        .then((response) => {
          if (response?.ok) {
            return response.json();
          } else {
            console.warn(`HTTP Response not ok: ${response?.status}`);
          }
        })
        .then((data) => {
          // handleResponse(data);
          this.cwdResponse = data;
        })
        .catch((error) => {
          console.log("Something went wrong while calling the API", error);
        });
    },
    newCWD(newValue) {
      this.cwd = newValue;
      this.cwdHistory.push(newValue);
      this.fetchData();
    },
    historyBack() {
      if (this.cwdHistory.length <= 1) {
        console.warn("Cannot go back in History any further.");
        return;
      }
      this.cwdHistory.pop();
      this.cwd = this.cwdHistory[this.cwdHistory.length - 1];
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
