<template>
  <link rel="icon" type="image/png" href="https://www.developmentaid.org/files/organizationLogos/vice-ministry-of-transport-vice-ministerio-de-transportes-216883.jpg">

  <BarraNav/>
  <router-view/>
  <FooterView/>
</template>

<script>
import BarraNav from './components/BarraNav.vue';
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: {
    BarraNav,
    FooterView
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
  background-color: #303845;

}



</style>
