<template>
  <div class="mergeStarter">
    <button class="btn" @click="mergeFromTo('b', 'a')">{{ $t('mergeToA') }}</button>
    <button class="btn" @click="sync()">{{ $t('sync') }}</button>
    <button class="btn" @click="mergeFromTo('a', 'b')">{{ $t('mergeToB') }}</button>
  </div>
</template>

<script>
export default {
  name: 'MergeStarter',
  components: {
  },
  props: {
  },
  data() {
  },
  methods:{
    mergeFromTo(source, dest){
      let url = `http://localhost:8080/api/v1.0/directory/copy/${source.toLowerCase()}/${dest.toLowerCase()}`;
      fetch(url).then(response => {
        if (response.status === 200) {
          console.log("Done copying")
        }
        else {console.warn(`HTTP Response not ok: ${response?.status}`);}
      });
    },
    sync(){
      let url = `http://localhost:8080/api/v1.0/directory/copy/a/b}`;
      fetch(url).then(response => {
        if (response.status === 200) {
          url = `http://localhost:8080/api/v1.0/directory/copy/b/a}`;
          fetch(url);
        }
        else {console.warn(`HTTP Response not ok: ${response?.status}`);}
      });
    }
  }
}
</script>

<style scoped>
.mergeStarter{
  text-align: center;
}
button:not(:last-child){
  margin-right:.5em;
}
</style>
