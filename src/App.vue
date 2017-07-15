<template>
  <div id="app">
    <router-view></router-view>
    <HtmlCenter></HtmlCenter>
    <HtmlFooter></HtmlFooter>
  </div>
</template>

<script>
  import HtmlCenter from './components/center'
  import HtmlFooter from './components/footer'
  export default {
    name: 'app',
    components: {
      HtmlCenter,
      HtmlFooter
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
