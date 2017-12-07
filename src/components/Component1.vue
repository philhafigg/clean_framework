<template>
  <div class="hello">
    <h1><translation text="test"></Translation></h1>
    <h2>Essentialds Links</h2>
  </div>
</template>

<script>

import Translation from '../components/Translation.vue';

export default {

  components: {

    'translation': Translation
  },

  data () {
    return {

    }
  },

  created() {

  }
}
</script>


<style lang="scss" scoped>
h1, h2 {

}
</style>
