<template>
  <div class="result">
    <spinner v-if='guodu'></spinner>
    <h2 v-if='!guodu' class="search-title">'{{val}}'的搜索结果, 共{{search_result.total}}条信息</h2>
    <div class="container">
    <div v-if='!guodu' class="res-theaters-area">
      <div class="res-movies-wrap" >
        <div class="res-movies-show" v-for="(item, index) in search_result.subjects" @click="serch(item.id)">
          <div class="res-movies-show-child">
            <div><img :src="item.images.medium" :alt="item.alt"></div>
            <div class="res-movieMsg">
              <h2 class="pull-left">{{item.title}}</h2>
              <p class="pull-left">评分：{{item.rating.average}}分  ({{item.collect_count}}评价)</p>
              <star :score="item.rating.average" class="pull-left clear"></star>
              <p class="pull-left">上映日期：{{item.year}}年</p>
              <p class="pull-left">影片类型：{{item.genres[0]}} {{item.genres[1]}} {{item.genres[2]}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import star from './star/star'
  export default {
    data () {
      return {
        val: '',
        guodu: '',
        search_result: {
          total: '',
          subjects: [{
            rating: {
              max: '',
              average: ''
            },
            genres: [],
            title: '',
            year: '',
            images: {
              small: '',
              large: '',
              medium: ''
            },
            directors: [{
              name: ''
            }],
            casts: [{
              name: '',
              id: ''
            }],
            collect_count: '',
            alt: '',
            id: ''
          }]
        }
      }
    },
    components: {
      star: star
    },
    created: function () {
      this.val = this.$route.query.name;
      var _this = this;
      let url = "/api/search?q="+this.val;
      this.$http.get(url).then(res => {
        console.log(res.data);
        _this.guodu = false
        _this.search_result = res.data
      }, res => {
        console.log(res);
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
  .result {
    margin-top: -20px;
    background-color: #f8f8f8;
  }
  .res-theaters-area {
    font-size: 0;
  }
  .res-movies-wrap {
    text-decoration: none;
    font-size: 0;
  }
  .res-movies-show {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 0;
  }
  .res-movies-show-child {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #d6d6d6;
  }
  .res-movieMsg {
    padding-left: 60px;
    vertical-align: top;
  }
  .res-movieMsg h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    clear: both;
  }
  .res-movieMsg p {
    clear: both;
  }
  .res-movies-show p {
    font-size: 14px;
    line-height: 2;
    color: #666;
  }
  .search-title {
    font-size: 20px;
    font-weight: 700;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    background-color: #f2fbfb;
  }
</style>
