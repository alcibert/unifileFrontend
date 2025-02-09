<template>
<div class="contentList">
    <p>Inhalt</p>
    {{ selectedPath }}
    <div v-if="contentElement != {}">
        <ContentListElement v-for="content in contentElement.content" :key="content.absolutePath + content.name" :element="content"/>
    </div>
</div>
</template>

<script>
import ContentListElement from "./ContentListElement.vue";

export default {
name: 'ContentList',
components: {
    ContentListElement
},
props: {
    selectedPath: String,
    volume: String
},
data() {
    return {
        contentElement: {}
    }
},
mounted(){
    this.fetchContent();
},
methods:{
    fetchContent(){
        let url = `http://localhost:8080/api/v1.0/directory/scan/${this.volume}?path=${this.selectedPath}`;
        fetch(url).then(response => response.json()).then((data) => {
            this.contentElement = data;
        });
    }
}
}
</script>

<style scoped>

</style>
