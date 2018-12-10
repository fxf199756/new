<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="left">
                    <img src="../../../static/img/logo.png" alt="">
                    <h4>今日头条</h4>
                </div>
                <div class="btn">打开</div>
            </div>
        </div>
        <div class="main">
            <div class="container">
                <h2>{{data.title}}</h2>
                <div class="page">
                    <div class="logo">
                        <!--<img src="../../../static/img/6137994502.jpg" alt="">-->
                        <span>{{data.source}}</span>
                    </div>
                    <div class="right">
                        <span style="margin-right: .25rem">{{data.publishTime}}</span>
                    </div>
                </div>
                <div class="contents" v-html="data.content">

                </div>
            </div>
        </div>
        <div class="hot">
            <div class="container">
                <div class="title">
                    <div class="box"></div>
                    <h3>热门推荐</h3>
                </div>
                <div class="news_1">
                    <h4>习近平论互联网十大金句</h4>
                    <div class="picture">
                        <img src="../../../static/img/1.jpg"  alt="">
                        <img src="../../../static/img/1.jpg" alt="">
                        <img src="../../../static/img/1.jpg" alt="">
                        <div style="clear: both"></div>
                    </div>
                    <p>
                        <i>打开APP</i>
                        <span>人民日报</span>
                        <span>评论 887</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="hot">
            <div class="container">
                <div class="title">
                    <div class="box"></div>
                    <h3>猜你喜欢</h3>
                </div>
                <div class="news_1">
                    <h4>习近平论互联网十大金句</h4>
                    <div class="picture">
                        <img src="../../../static/img/1.jpg"  alt="">
                        <img src="../../../static/img/1.jpg" alt="">
                        <img src="../../../static/img/1.jpg" alt="">
                        <div style="clear: both"></div>
                    </div>
                    <p>
                        <i>打开APP</i>
                        <span>人民日报</span>
                        <span>评论 887</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "detail",
        data(){
          return{
              data:{}
          }
        },
        methods:{
          content(){
              let id=this.$route.query.id;
              axios.post(`http://api.shujuzhihui.cn/api/news/detail?appKey=2c573e9489234bd993d1978ea549ab38&newsId=${id}`)
                  .then(res=>{
                      console.log(res);
                      this.data=res.data.RESULT;
                  })
                  .catch(error=>{
                      console.log(error);
                  })
          }
        },
        created(){
           this.content();
        }

    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    i{
        font-style: normal;
    }
    .container{
        width: 100%;
        height: 100%;
        padding: 0 .3rem;
    }
    /*顶部*/
    .header{
        width: 100%;
        height: 1.1rem;
        background: white;
        box-shadow:0 2px 4px 0 rgba(0,0,0,0.1);;
    }
    .header .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header .left{
        width: 40%;
        display: flex;
        align-items: center;
        font-size: .32rem;
    }
    .header .left img{
        width: .8rem;
        height: .8rem;
        margin-right: .1rem;
    }
    .header .btn{
        height:0.6rem;
        font-weight: 500;
        line-height: .6rem;
        padding: 0 .4rem;
        font-size: .38rem;
        background-image: linear-gradient(90deg,red,#ff5050);
        color: #fff;
        text-align: center;
        border-radius: .5rem;
    }
    /*内容*/
    .main{
        width: 100%;
    }
    .main h2{
        font-size: .44rem;
        margin-top: .15rem;
    }
    .main .page{
        font-size: .3rem;
        color: rgba(0,0,0,.4);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: .2rem;
    }
    .main .logo{
        font-size: .3rem;
        display: flex;
        align-items: center;
    }
    .main .logo img{
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        margin-right: .3rem;
    }

    .main .contents {
        width: 100%;
        font-size: .36rem;
        line-height: .7rem;
        overflow: hidden;
    }
    .main img{
        width: 100%;
    }
    /*热门推荐*/
    .hot h4{
        font-size: .38rem;
        font-weight: normal;
    }
    .hot p{
        font-size: .23rem;
        margin-top: .15rem;
        color: rgba(0,0,0,0.7);
    }
    .hot p i{
        display: flex;
        align-items: center;
        justify-content:center;
        padding: 0 0.1rem;
        height: .34rem;
        color: #d43d3d;
        font-weight: normal;
        border-radius: .04rem;
        float: left;
        margin-right: .1rem;
    }
    .hot .news_1{
        padding: .35rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    .hot .news_1 .picture{
        margin-top:.2rem;
    }
    .hot .news_1 img{
        width: calc(100% / 3);
        float: left;
    }
    .hot .news_1 .left{
        width: 67%;
        float: left;
    }
    /*热门推荐*/
    .hot{
        margin-top: .2rem;
    }
    .hot .title{
        width: 100%;
        height: .34rem;
        font-size: .28rem;
        display: flex;
        align-items: center;
    }
    .hot .title .box{
        width: .08rem;
        height: 110%;
        border-radius: 1px;
        margin-right: 10px;
        background-color: #f85959;
    }
</style>