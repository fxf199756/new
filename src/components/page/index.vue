<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="main">
                    <i class="iconfont icon-youjian"></i>
                    <div class="text">
                        <h3>今日头条</h3>
                        <i class="iconfont icon-shuaxin"></i>
                    </div>
                    <i class="iconfont icon-sousuo"></i>
                </div>
            </div>
        </div>
        <!--头部下方列表-->
        <div class="list">
            <div class="text_list">
                <a v-for="(item,index) in type" @click="toggle(item,index)" :class="{active:(i==index)}">{{item}}</a>
            </div>
            <div id="add">
                <router-link to="/list">
                    <i class="iconfont icon-iconjia"></i>
                </router-link>
            </div>
        </div>
        <!--新闻列表-->
        <div class="content">
            <div class="container">
                <!--<div class="news_1">-->
                    <!--<h4>习近平论互联网十大金句</h4>-->
                    <!--<p>-->
                        <!--<i>置顶</i>-->
                        <!--<span>人民日报</span>-->
                        <!--<span>评论 887</span>-->
                        <!--<span>刚刚</span>-->
                    <!--</p>-->
                <!--</div>-->
                <!--<div class="news_1">-->
                    <!--<h4>习近平论互联网十大金句</h4>-->
                    <!--<div class="picture">-->
                        <!--<img src="../../../static/img/1.jpg"  alt="">-->
                        <!--<img src="../../../static/img/1.jpg" alt="">-->
                        <!--<img src="../../../static/img/1.jpg" alt="">-->
                        <!--<div style="clear: both"></div>-->
                    <!--</div>-->
                    <!--<p>-->
                        <!--<i>置顶</i>-->
                        <!--<span>人民日报</span>-->
                        <!--<span>评论 887</span>-->
                        <!--<span>刚刚</span>-->
                    <!--</p>-->
                <!--</div>-->

                    <div class="news_1" v-for="item in data">
                        <router-link :to="{name:'detail',query:{id:item.newsId}}">
                        <div class="left">
                            <h4>{{item.title}}</h4>
                            <p>
                                <!--<i>置顶</i>-->
                                <span style="margin-right: .2rem">{{item.source}}</span>
                                <!--<span>日期 </span>-->
                                <span>{{item.publishTime}}</span>
                            </p>
                        </div>
                        <img id="pic" :src="item.newsImg" alt="">
                        <div style="clear: both"></div>
                        </router-link>
                    </div>


                <!--<div class="news_1">-->
                    <!--<h4>习近平论互联网十大金句</h4>-->
                    <!--<img style="width: 100%;margin-top: .2rem" src="../../../static/img/abs.jpg" alt="">-->
                    <!--<div style="clear: both"></div>-->
                    <!--<p>-->
                        <!--<i style="color: #2a90d7;border: 1px solid rgba(42, 144, 215, 0.5);">广告</i>-->
                        <!--<span>人民日报</span>-->
                        <!--<span>评论 887</span>-->
                        <!--<span>刚刚</span>-->
                    <!--</p>-->

                <!--</div>-->
            </div>
        </div>
        <!--底部-->
        <div class="foot" >
            <div class="container">
                <div class="left">
                    <img src="../../../static/img/logo.png" alt="">
                    <h4>今日头条</h4>
                </div>
                <div class="btn">打开</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "index",
        data(){
            return{
                type:"",
                data:[],
                types:"",
                i:0
            }
        },
        methods:{
            typeNav(){
                axios.get("http://api.shujuzhihui.cn/api/news/categories?appKey=2c573e9489234bd993d1978ea549ab38")
                    .then((res)=>{
                        this.type=res.data.RESULT;
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
            },
            typeMain(){
                axios.post(`http://api.shujuzhihui.cn/api/news/list?appKey=2c573e9489234bd993d1978ea549ab38&category=${this.types}`)
                    .then((res)=>{
                        this.data=res.data.RESULT.newsList;
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
            },
            toggle(item,index){
                this.i=index;
                this.types=item;
                this.data=[];
            }
        },
        created(){
            this.typeNav();
            this.typeMain("要闻");
        },
        watch:{
            types(){
                this.typeMain()
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    i{
        font-style: normal;
    }
    li{
        list-style: none;
    }
    .container{
        width: 100%;
        height: 100%;
        padding: 0 .3rem;
    }

    /*头部开始*/
    .header{
        width: 100%;
        height: .9rem;
        background: #d43d3d;
        position: fixed;
        top: 0;
        left: 0;
    }
    .header{
        font-size: .4rem;
        color: white;
    }
    .text{
        display: flex;
        align-items: center;
    }
    .main{
        width: 100%;
        height: 100%;
        padding:0 .2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .main i{
        font-size: .4rem;
    }
    h3{
        margin-right: 6px;
    }
    /*标题下方滑动列表*/
    .list{
        width: 100%;
        height: .75rem;
        background: #f4f5f6;
        overflow: hidden;
        overflow-x: scroll;
        padding-left:.3rem;
        position: fixed;
        top: .9rem;
        left: 0;
    }
    .list::-webkit-scrollbar{
        display: none;
    }
    .text_list{
        width: 19rem;
        height: 100%;
        display: flex;
        line-height: .75rem;
    }
    .list a {
        color: #505050;
        font-size: .36rem;
        margin-right: .6rem;
    }
    #add{
        width: .8rem;
        height: .75rem;
        display: flex;
        align-items: center;
        justify-content:center;
        background: #f4f5f6;
        position: fixed;
        right:0;
        top: 0.9rem;
    }
    #add i{
        font-size: .36rem;
        color: #d43d3d;
        font-weight: 900;
    }
    /*内容*/
    .content{
        margin-top: 1.65rem;
        margin-bottom: 1.4rem;
    }
    .content h4{
        font-size: .3rem;
        font-weight: normal;
    }
    .content p{
        font-size: .23rem;
        margin-top: .15rem;
        color: rgba(0,0,0,0.7);
    }
    .content p i{
        display: flex;
        align-items: center;
        justify-content:center;
        padding: 0 0.1rem;
        height: .34rem;
        color: #d43d3d;
        font-weight: normal;
        border: 1px solid #d43d3d;
        border-radius: .04rem;
        float: left;
        margin-right: .1rem;
    }
    .content .news_1{
        padding: .35rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    .content .news_1 .picture{
        margin-top:.2rem;
    }
    .content .news_1 img{
        width: calc(100% / 3);
        float: left;
    }
    .content .news_1 .left{
        width: 67%;
        float: left;
    }
    #pic{
        width: 33%;
        float: right;
    }

    /*底部*/
    .foot{
        width: 100%;
        height: 1.2rem;
        position: fixed;
        bottom: 0;
        left: 0;
        background: white;

    }
    .foot .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .foot .left{
        width: 40%;
        display: flex;
        align-items: center;
        font-size: .32rem;
    }
    .foot .left img{
        width: .8rem;
        height: .8rem;
        margin-right: .1rem;
    }
    .foot .btn{
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
    .list .active{
        color:#d43d3d ;
    }
</style>