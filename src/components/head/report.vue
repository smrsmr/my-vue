<template>
  <div id="app" class="container">
    <spinner v-if="bool"></spinner>
    <div v-if="!bool">
      <h2>北美票房榜 {{newdate}}</h2>
      <div class="fever-d">
        <div class="fever-d-img" v-for="item in msg" @click="serch(item.subject.id)">
          <div class="fever-img">
            <img v-bind:src="item.subject.images.medium" alt="item.id">
          </div>
          <div class="fever-title">
            <h3 class="pull-left"><a>{{item.subject.title}}</a> </h3>
            <h5 class="pull-left">时间：{{item.subject.year}}</h5>
            <h5 class="pull-left">评分：{{item.subject.rating.average}}分</h5>
            <star :score="item.subject.rating.average" class="pull-left clear"></star>
            <h5 class="pull-left">导演：{{item.subject.directors[0].name}}</h5>
            <h5 class="pull-left">主演：{{item.subject.casts[0].name}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/star'
  import spinner from '../spinner/spinner'

  export default {
    data () {
      return {
        msg: '',
        newdate: '',
        bool: true
      }
    },
    components: {
      star: star,
      spinner: spinner
    },
    created: function () {
      var _this = this
      let url = "https://api.douban.com/v2/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b&city='广州'&count=30";
      this.$http.jsonp(url)
        .then(function (res) {
          this.bool = false;
          _this.msg = res.data.subjects;
          _this.newdate = res.data.date;
        })
        .catch(function (res) {
          console.log(res)
        })
    },
    methods: {
      serch: function (str) {
        const path = '/movie/' + str
        this.$router.push({path: path})
      }
    }
  }
</script>

<style>
  body {
    background-color: #f8f8f8;
  }
  .fever-d {
    padding: 10px 20px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 0;
  }
  .fever-d-img {
    display: flex;
    align-items: flex-end;
    padding-bottom: 2%;
    padding-top: 10px;
    border-bottom: 1px dashed #cccccc;
  }
  .fever-d-img:nth-child(1) {
    border-top: 1px dashed #cccccc;
  }
  .fever-title {
    margin-left: 30px;
  }
  .fever-title h5 {
    clear: both;
  }
  .fever-title a:hover {
    text-decoration: none;
    background-color: deepskyblue;
  }
  @media (max-width: 768px) {
    .fever-title h3 {
      margin-left: -132px;
      margin-bottom: 40px;
    }
  }
</style>

