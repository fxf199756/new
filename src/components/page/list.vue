<template>
    <div>
        <div class="some">
            <div class="del">
                <div class="title">
                    <p>点击删除以下频道</p>
                </div>
                <ul class="content" id="del">
                    <!--数据-->
                    <!--<li><a href="javascript:;" class="hot">推荐</a></li>-->
                    <!--<li><a href="javascript:;">热点</a></li>-->
                    <!--<li><a href="javascript:;">社会</a></li>-->
                    <!--<li><a href="javascript:;">娱乐</a></li>-->
                    <!--<li><a href="javascript:;">科技</a></li>-->
                    <!--<li><a href="javascript:;">汽车</a></li>-->
                    <!--<li><a href="javascript:;">体育</a></li>-->
                    <!--<li><a href="javascript:;">财经</a></li>-->
                    <!--<li><a href="javascript:;">军事</a></li>-->
                    <!--<li><a href="javascript:;">国际</a></li>-->
                    <!--<li><a href="javascript:;">时尚</a></li>-->
                    <!--<li><a href="javascript:;">游戏</a></li>-->
                </ul>
            </div>
            <div class="del">
                <div class="title">
                    <p>点击添加以下频道</p>
                </div>
                <ul class="content" id="add">
                    <!--数据-->
                    <!--<li><a href="javascript:;" >旅游</a></li>-->
                    <!--<li><a href="javascript:;" >历史</a></li>-->
                    <!--<li><a href="javascript:;" >探索</a></li>-->
                    <!--<li><a href="javascript:;" >美食</a></li>-->
                    <!--<li><a href="javascript:;" >育儿</a></li>-->
                    <!--<li><a href="javascript:;">养生</a></li>-->
                    <!--<li><a href="javascript:;" >故事</a></li>-->
                    <!--<li><a href="javascript:;">美文</a></li>-->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        data(){
            return{

            }
        },
        mounted(){
            // 添加数据
            // let add = $("#add li");
            // let del = $("#del li");
            // let addArr=[];
            // let delArr=[];
            // add.each(function () {
            //     addArr.push($(this).text());
            // });
            // del.each(function () {
            //     delArr.push($(this).text());
            // });
            // localStorage.setItem("del",JSON.stringify(delArr));
            // localStorage.setItem("add",JSON.stringify(addArr));

            // 修改数据
            let add = document.querySelector("#add");
            let del =document.querySelector("#del");
            let addArr=JSON.parse(localStorage.getItem("add"));
            let delArr=JSON.parse(localStorage.getItem("del"));
            delArr=delData(delArr);
            addArr=addData(addArr);

            del.onclick=function (e) {
                delArr=delArr.filter(value=>value!=e.target.innerText);
                addArr.push(e.target.innerText);
                delArr=delData(delArr);
                addArr=addData(addArr);
            };
            add.onclick=function (e) {
                addArr=addArr.filter(value=>value !=e.target.innerText);
                delArr.push(e.target.innerText);
                delArr=delData(delArr);
                addArr=addData(addArr);
            };
            function delData(arr){
                localStorage.setItem("del",JSON.stringify(arr));
                let strDel = "";
                arr = JSON.parse(localStorage.getItem("del"));
                arr.forEach((v, i) => {
                    if (i == 0) {
                        strDel += `<li style="display: inline-block;
        width: 25%;
        margin-bottom: 10px;"><a href="javascript:;" class="hot" style=" font-size: .32rem;
        display: block;
        margin: 0 .16rem;
        border: .02rem solid #ccc;
        text-align: center;
        line-height: 2em;
        text-decoration: none;
        color: #131313;">${v}</a></li>`
                    } else {
                        strDel += `<li style="display: inline-block;
        width: 25%;
        margin-bottom: 10px;"><a href="javascript:;" style=" font-size: .32rem;
        display: block;
        margin: 0 .16rem;
        border: .02rem solid #ccc;
        text-align: center;
        line-height: 2em;
        text-decoration: none;
        color: #131313;">${v}</a></li>`
                    }
                });
                del.innerHTML=strDel;

                return arr;
            }
            function addData(arr) {
                localStorage.setItem("add",JSON.stringify(arr));
                let strAdd="";
                arr = JSON.parse(localStorage.getItem("add"));
                arr.forEach((v)=>{
                    strAdd += `<li style="display: inline-block;
        width: 25%;
        margin-bottom: 10px;"><a href="javascript:;" style=" font-size: .32rem;
        display: block;
        margin: 0 .16rem;
        border: .02rem solid #ccc;
        text-align: center;
        line-height: 2em;
        text-decoration: none;
        color: #131313;">${v}</a></li>`
                });
                add.innerHTML=strAdd;
                return arr;
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        font-family: "苹方";
        box-sizing: border-box;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    header {
        width: 100%;
        height: 1rem;
        position: relative;
        background-color: #d43d3d;
        text-align: center;
    }
    body{
        background-color: #f5f5f5;
    }

    .back {
        width: .88rem;
        height: 1rem;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .back span {
        width: 50%;
        height: 50%;
        /*background: url('../img/back.png') no-repeat 50%;*/
        background-size: 100%;
        display: block;
        color: white;
    }

    header p {
        color: #fff;
        font-weight: 800;
        font-size: .34rem;
        line-height: 1rem;
    }

    .some {
        background-color: #f5f5f5;
    }

    .title {
        display: block;
        padding: 0 .2rem;
        line-height: 2em;
        background-color: #f5f5f5;
        font-size: .24rem;
        color: #666;
    }

    .content {
        margin: .2rem 0;
        display: flex;
        flex-wrap: wrap;
    }

    .content li {
        display: inline-block;
        width: 25%;
        margin-bottom: 10px;
    }

    .content li a {
        font-size: .32rem;
        display: block;
        margin: 0 .16rem;
        border: .02rem solid #ccc;
        text-align: center;
        line-height: 2em;
        text-decoration: none;
        color: #131313;
    }

    .content li a.hot {
        background-color: #f0f0f0;
    }
</style>