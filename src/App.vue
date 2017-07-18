<template>
  <div id="app">
    <HtmlNav></HtmlNav>
    <router-view></router-view>
  </div>
</template>

<script>
  import HtmlCenter from './components/center'
  import HtmlFooter from './components/footer'
  import HtmlNav from './components/nav'
  export default {
    name: 'app',
    components: {
      HtmlCenter,
      HtmlFooter,
      HtmlNav
    },
    created: function () {
      this.$router.push({path: '/home'})

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
