<template>
  <div class="hello">
    <h1><translation text="test"></Translation></h1>
    <h2>Essentialds Links</h2>
  </div>
</template>

<script>

import Translation from '../components/Translation.vue';
import FileLoader from '../classes/FileLoader.js'



export default {

  components: {

    'translation': Translation
  },

  data () {
    return {

    }
  },

  created() {

    const loader = new FileLoader('https://vuetest-a6aa2.firebaseio.com/posts.json')
    loader.load();
  }
}
</script>


<style lang="scss" scoped>
h1, h2 {

}
</style>
