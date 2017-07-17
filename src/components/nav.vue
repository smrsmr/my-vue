<template>
  <div class="nav-head" >
    <nav class="container">
      <router-link to="home"> <div class="nav-logo"></div></router-link>
      <div class="nav-search">
        <form action="">
          <div class="form-group  col-lg-12 col-md-12 col-sm-12 col-xs-12" >
            <input type="text" class="form-control"  placeholder=" 电影、影人、影院、电视剧">
          </div>
          <div class="nav-submit">
            <input type="submit" class="btn btn-default" value="">
          </div>
        </form>
      </div>
    </nav>
    <hr>
    <div class="container nav-ul">
      <div class="nav-movie">
        <ul>
          <li><router-link to="FilmBoy">影讯&购票</router-link> </li>
          <li><router-link to="movie">选电影</router-link> </li>
          <li><router-link to="teleplay">电视剧</router-link> </li>
          <li><router-link to="ranking-list">排行榜</router-link> </li>
          <li><router-link to="classify">分类</router-link> </li>
          <li><router-link to="Inception">影评</router-link> </li>
          <li><router-link to="Crunchies">2016年度榜单</router-link> </li>
          <li><router-link to="report">2016观影报告</router-link> </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: ''
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
  }
  .nav-movie ul li a:hover {
    text-decoration: none;
    background-color: deepskyblue;
  }
</style>


