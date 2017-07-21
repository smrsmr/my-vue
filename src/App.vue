<template>
  <div id="app">
    <HtmlNav></HtmlNav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import HtmlCenter from './components/center'
  import HtmlNav from './components/nav'
  export default {
    name: 'app',
    components: {
      HtmlCenter,
      HtmlNav
    },
    created: function () {
      this.$router.push({path: '/'})
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
