<template>
  <div class="nav-head" >
    <nav class="container">
      <router-link to="/"> <div class="nav-logo"></div></router-link>
      <div class="nav-search">
          <div class="form-group  col-lg-12 col-md-12 col-sm-12 col-xs-12" >
            <input type="text" class="form-control"  placeholder=" 电影、影人、影院" v-model="query" @click="clearText" @keyup.enter="serch()">
          </div>
          <div class="nav-submit" @click="serch">
            <input type="button" class="btn btn-default" value="">
          </div>
      </div>
    </nav>
    <hr>
    <div class="container nav-ul">
      <div class="nav-movie">
        <ul>
          <li><router-link to="/feverMovie">影讯&购票</router-link> </li>
          <li><router-link to="/rankingList">排行榜</router-link> </li>
          <li><router-link to="/publicPraise">口碑榜</router-link> </li>
          <li><router-link to="/Crunchies">Top 250</router-link> </li>
          <li><router-link to="/report">北美票房榜</router-link> </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        msg: '',
        query: '',
      }
    },
    methods: {
      serch: function () {
        this.$router.push({path: '/serchResult', query:{ name: this.query }})
        this.query = ''
      },
      clearText: function () {
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-head {
    width: 100%;
    height: 140px;
    background-color: #F0F3F5;
  }
  nav, .nav-ul {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  .nav-logo {
    margin-top: 2%;
    background: url("../../static/images/nav-logo.png") no-repeat;
    width: 115px;
    height: 27px;
    flex: 4;
  }
  .nav-search {
    margin-top: 2%;
    margin-left: 8%;
    flex: 4;
    position: relative;
  }
  .nav-submit input {
    background: url("../../static/images/nav_mv_bg.png") no-repeat 0 -40px;
    width: 39px;
    height: 34px;
    position: absolute;
    right: 0;
  }
  .nav-movie {
    flex: 1;
  }
  .nav-movie ul {
    display: flex;
    justify-content: space-between;
    flex-flow: row;
    align-items: center;
    font-size: 17px;
  }
  .nav-movie ul li a:hover {
    text-decoration: none;
    background-color: deepskyblue;
  }
</style>


