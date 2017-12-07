<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import Component1 from './components/Component1.vue';
import Component2 from './components/Component2.vue';

export default {

  components: {

    'componentone': Component1,
    'componenttwo': Component2,
  },
  
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
