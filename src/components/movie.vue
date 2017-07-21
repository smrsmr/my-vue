<template>
  <div class="container" id="app">
    <spinner v-if="bool"></spinner>
    <div v-if="!bool">
      <h2 class="pull-left">{{search_result.title}}(<span class="movie-sp1">{{search_result.year}}</span>)</h2>
      <div class="res-movies-wrap clear" >
        <div class="res-movies-show">
          <div class="res-movies-show-child">
            <div><img :src="search_result.images.medium" :alt="search_result.alt"></div>
            <div class="res-movieMsg">
              <h6 class="pull-left">导演：{{search_result.directors[0].name}}</h6>
              <h6 class="pull-left">评分：{{search_result.rating.average}}分  ({{search_result.collect_count}}评价)</h6>
              <star :score="search_result.rating.average" class="pull-left clear"></star>
              <h6 class="pull-left">上映日期：{{search_result.pubdates[0]}} <span v-if="search_result.pubdates[1]"> / </span>{{search_result.pubdates[1]}}</h6>
              <h6 class="pull-left">时长：{{search_result.durations[0]}}</h6>
              <h6 class="pull-left">影片类型：{{search_result.genres[0]}} {{search_result.genres[1]}} {{search_result.genres[2]}}</h6>
            </div>
          </div>
        </div>
      </div>
      <section class="msg-count clear">
        <div>{{search_result.wish_count}}人想看</div>
        <div>{{search_result.reviews_count}}人看过</div>
      </section>
      <div class="movie-summary">
        <h4 class="pull-left h4">{{search_result.original_title}}的剧情简介 · · · · · ·</h4>
        <p class="pull-left clear">{{search_result.summary}}</p>
      </div>

      <h4 class="pull-left h4">{{search_result.original_title}}的影人 · · · · · ·</h4>
      <div class="movie-casta  pull-left clear">
        <div v-for="item in search_result.directors">
          <div>
            <img :src="item.avatars.medium"/>
          </div>
          {{item.name}}[导演]
        </div>
        <div v-for="item in search_result.casts">
          <div class="movie-casta-medium">
            <img :src="item.avatars.medium"/>
          </div>
          {{item.name}}
        </div>
      </div>
      <section class="pull-left clear movie-duanping">
        <h4 class="h4 pull-left">热门短评 · · · · · ·</h4>
        <div v-for="item in search_result.popular_comments">
          <div class="movie-duanping-star">
            <star :score="item.rating.value*2" class="pull-left clear"></star>
            <span class="pull-left">{{item.created_at}}</span>
          </div>
          <p class="pull-left clear movie-duanping-p">{{item.content}}</p>
          <div class="pull-left movie-duanping-img clear">
            <img :src="item.author.avatar">
            <span>{{item.author.name}}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import spinner from './spinner/spinner'
  import star from './star/star'
  export default {
    data () {
      return {
        search_result: '',
        bool: true,
        movieMsg: {
          'rating': {
            'max': '',
            'average': '',
            'details': {
              '1': '',
              '3': '',
              '2': '',
              '5': '',
              '4': ''
            },
            'stars': '',
            'min': 0
          },
          trailer_urls: [],
          collect_count: '',
          'wish_count': '',
          'reviews_count': '',
          'images': {
            'small': '',
            'large': '',
            'medium': ''
          },
          'alt': '',
          'year': '',
          'pubdates': [],
          'id': '',
          'pubdate': '',
          'title': '',
          'languages': [],
          'countries': [],
          'writers': [{
            'avatars': {
              'small': '',
              'large': '',
              'medium': ''
            },
            'name_en': '',
            'name': '',
            'alt': '',
            'id': ''
          },
            {
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            }
          ],
          'casts': [
            {
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            }
          ],
          'summary': '',
          'directors': [
            {
              'avatars': {
                'small': '',
                'large': '',
                'medium': ''
              },
              'name_en': '',
              'name': '',
              'alt': '',
              'id': ''
            }
          ],
          'durations': [],
          'genres': [],
          popular_comments: [{
            rating: {
              max: '',
              min: '',
              value: ''
            },
            author: {
              uid: '',
              avatar: '',
              name: ''
            },
            content: '',
            create_at: ''
          }],
          comments_count: '',
          popular_reviews: ''
        }
      }
    },
    components: {
      star: star,
      spinner: spinner
    },
    created: function () {
      this.movie()
    },
    methods: {
      movie: function () {
        this.val = this.$route.query.name;
        var _this = this;
        let url = "https://api.douban.com/v2/movie/subject/"+this.$route.params.id +'?apikey=0b2bdeda43b5688921839c8ecb20399b&city="广州"';
        this.$http.jsonp(url)
          .then(function (res) {
            this.bool = false;
            _this.search_result = res.data
          })
          .catch(function (res) {
            console.log(res)
          })
      }
    },
    activated: function () {
      this.bool = true;
      this.movie()
    }
  }
</script>

<style scoped>
  body {
    background-color: #f8f8f8;
  }
  #app h2 {
    font-weight: 600;
  }
  .movie-sp1 {
    color: #c0c0c0;
  }
  body {
    background-color: #f8f8f8;
  }
  .res-movies-wrap {
    text-decoration: none;
    font-size: 0;
  }
  .res-movies-show {
    padding: 10px 0;
    cursor: pointer;
  }
  .res-movies-show-child {
    display: flex;
    align-items: center;
    padding-bottom: 10px;

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
  .res-movieMsg h6 {
    clear: both;
    color: #666;
  }
  .msg-count {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  .msg-count div:nth-child(1),.msg-count div:nth-child(2) {
    width: 100px;
    height: 35px;
    line-height: 35px;
    background-color: indianred;
    border-radius: 10px;
    color: #fff;
  }
  .msg-count div:nth-child(1) {
    margin-right: 10%;
  }
  .msg-count div:nth-child(2) {
    margin-left: 10%;
  }
  .movie-summary {
    margin-top: 60px;
  }
  .h4 {
    color: turquoise;
    margin: 20px 0;
  }
  .movie-summary p {
    text-indent: 2em;
    text-align: left;
    line-height: 24px;
  }
  .movie-casta {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: wrap;
  }
  .movie-casta img {
    margin-right: 20px;
  }
  .movie-duanping {
    margin-top: 40px;
  }
  .movie-duanping-star {

  }
  .movie-duanping-p {
    text-align: left;
  }
  .movie-duanping-img {
    margin: 20px 0;
  }
  .movie-duanping-img img {
    border-radius: 10px;
  }
</style>
