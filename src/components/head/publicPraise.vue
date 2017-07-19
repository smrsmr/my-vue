<template>
  <div id="app" class="container">
    <spinner v-if="bool"></spinner>
    <div v-if="!bool">
      <h2>本周口碑榜</h2>
      <div class="fever-d">
        <div class="fever-d-img" v-for="item in msg" @click="serch(item.subject.id)">
          <div class="fever-img">
            <img v-bind:src="item.subject.images.medium" alt="item.subject.id">
          </div>
          <div class="fever-title">
            <h3 class="pull-left"><a>{{item.subject.title}}</a> </h3>
            <h5 class="pull-left">时间（地区）：{{item.subject.pubdates[0]}}</h5>
            <h5 class="pull-left">导演：{{item.subject.directors[0].name}}</h5>
            <h5 class="pull-left">评分：{{item.subject.rating.average}}分</h5>
            <star :score="item.subject.rating.average" class="pull-left clear"></star>
            <h5 class="pull-left">类型：{{item.subject.genres[0]}}  {{item.subject.genres[1]}}  {{item.subject.genres[2]}}</h5>
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
        bool: true
      }
    },
    components: {
      star: star,
      spinner: spinner
    },
    created: function () {
      var _this = this
      let url = "/api/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b&city='广州'&count=10";
      this.$http.get(url).then(res => {
        console.log(res.data);
        this.bool = false
        _this.msg = res.data.subjects;
      }, res => {
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
    margin-top: 60px;
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
    margin-left: 4%;
  }
  .fever-title h5 {
    clear: both;
  }
  .fever-title a:hover {
    text-decoration: none;
    background-color: deepskyblue;
  }
</style>

