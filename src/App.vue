<template>
  <BarraNav/>
  <router-view/>
</template>

<script>
import BarraNav from './components/BarraNav.vue';

export default {
  name: 'App',
  components: {
    BarraNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  box-sizing: border-box;
}

</style>
