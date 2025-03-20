<template>
    <div class="contentList">
        <p>Inhalt</p>
        <div v-if="hasConflicts">
            <ConflictListElement v-for="conflict in conflicts" :key="conflict.id" :element="conflict" @merge-changed="changeMerge"/>
        </div>
    </div>
    </template>
    
    <script>
    import ConflictListElement from "./ConflictListElement.vue";
    
    export default {
    name: 'ConflictList',
    components: {
        ConflictListElement
    },
    props: {
        allScanned: Boolean
    },
    computed: {
        hasConflicts(){
            return this.conflicts.length > 0;
        }
    },
    data() {
        return {
            conflicts: []
        }
    },
    mounted(){
        this.fetchContent();
    },
    methods:{
        fetchContent(){
            let url = `http://localhost:8080/api/v1.0/conflict/analyze`;
            fetch(url).then(response => response.json()).then((data) => {
                this.conflicts = data;
                console.log("fetched Conflict List");
                console.log(this.conflicts);
            });
        },
        changeMerge(e){
            e[0].merge = e[1];
        }
    }
    }
    </script>
    
    <style scoped>
    
    </style>
    