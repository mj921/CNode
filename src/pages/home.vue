<style lang="scss" scoped>
    $articleListHeight:30px;
    #main{
        margin: 15px auto;
        min-width: 1000px;
        width: 90%;
        .tabs{
            padding:10px;
            background-color: #f6f6f6;
            height: 20px;
            line-height: 20px;
            li{
                float: left;
                margin: 0 10px;
                padding:0 4px;
                color: #80bd01;
                font-size: 14px;
                border-radius: 3px;
                cursor: pointer;
                &.curr{
                    background-color: #80bd01;
                    color: #fff;
                }
            }
        }
        .article-list{
            background-color: #fff;
            dl{
                height: $articleListHeight;
                padding: 10px;
                &:not(:first-child){
                    border-top:1px solid #f0f0f0;
                }
                img{
                    float: left;
                    width: $articleListHeight;
                    height: $articleListHeight;
                }
                .reply-num{
                    float: left;
                    width: 70px;
                    line-height: $articleListHeight;
                    text-align:center;
                    font-size: 12px;
                    color:#9e78c0;
                    span{
                        font-size: xx-small;
                    }
                }
                .article-tab{
                    float: left;
                    width: 32px;
                    margin: $articleListHeight / 2 - 9px 0;
                    height: 18px;
                    line-height: 18px;
                    font-size: 12px;
                    color:#999;
                    background-color:#e5e5e5;
                    margin-right: 3px;
                    text-align: center;
                    border-radius:1px;
                    &.curr{
                        background-color: #80bd01;
                        color: #fff;
                    }
                }
                .article-title{
                    float: left;
                    max-width: calc(100% - 260px);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: $articleListHeight;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                .last-reply-time{
                    float: right;
                    width: 120px;
                    line-height: $articleListHeight;
                    text-align: right;
                    font-size: 12px;
                    color: #778087;
                }
            }
        }
    }
</style>
<template>
    <div>
        <myHeader></myHeader>
        <div id="main">
            <ul class="tabs clearfix">
                <li :class="{'tab':true,'curr':tab === ''}" @click="tab = ''">全部</li>
                <li :class="{'tab':true,'curr':tab === 'good'}" @click="tab = 'good'">精华</li>
                <li :class="{'tab':true,'curr':tab === 'share'}" @click="tab = 'share'">分享</li>
                <li :class="{'tab':true,'curr':tab === 'ask'}" @click="tab = 'ask'">问答</li>
                <li :class="{'tab':true,'curr':tab === 'job'}" @click="tab = 'job'">招聘</li>
            </ul>
            <div class="article-list">
                <dl class="clearfix" v-for="article in articleList">
                    <router-link :to="'/detail/' + article.id">
                        <img :src="article.author.avatar_url" alt="article.author.loginame">
                        <div class="reply-num">{{article.reply_count}}/<span>{{article.visit_count}}</span></div>
                        <div :class="{'article-tab':true,'curr':article.good || article.top}" @click="tab = article.good ? 'good' : article.tab">{{article.top ? "置顶" : (article.good ? "精华" : tabList[article.tab])}}</div>
                        <div class="article-title">{{article.title}}</div>
                        <div class="last-reply-time">{{dateFmt(new Date(article.last_reply_at),"yyyy-MM-dd HH:mm:ss")}}</div>
                    </router-link>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from "../components/header.vue";
    import ajax from "../ajax.js";
    export default{
        data(){
            return {
                tab:"",
                page:1,
                articleList:[],
                tabList:{"ask":"问答","share":"分享","job":"招聘","good":"精华"}
            }
        },
        methods:{
            dateFmt:function(date,fmt){
                if(date){
                    const month = date.getMonth() + 1;
                    const d = date.getDate() + 1;
                    const h = date.getHours();
                    const m = date.getMinutes();
                    const s = date.getSeconds();
                    const obj = {
                        "yyyy":date.getFullYear(),
                        "MM":month > 9 ? month :  ("0" + month),
                        "M":month,
                        "dd":d > 9 ? d : ("0" + d),
                        "d":d,
                        "HH":h > 9 ? h : ("0" + h),
                        "H":h,
                        "hh":h % 12 > 9 ? h % 9 : ("0" + (h % 9)),
                        "h":h % 12,
                        "mm":m > 9 ? m : ("0" + m),
                        "m":m,
                        "ss":s > 9 ? s : ("0" + s),
                        "s":s,
                        "S":date.getTime() % 1000
                    }
                    if(fmt){
                        for(var key in obj){
                            var reg = new RegExp(key,"g");
                            fmt = fmt.replace(reg,obj[key]);
                        }
                        return fmt;
                    }else{
                        return date;
                    }
                }else{
                    return "";
                }
            },
            getTopics:function(page){
                let url = "https://cnodejs.org/api/v1/topics?tab=" + this.tab + "&page=" + (page || this.page || 1);
                let self = this;
                ajax({
                    url:url,
                    type:"get",
                    dataType:"json",
                    success:function(json){
                        if(json.success){
                            self.articleList = json.data;
                        }
                    }
                });
            }
        },
        watch:{
            tab:function(){
                this.getTopics(1);
            }
        },
        components:{
            "myHeader":Header
        },
        created:function(){
            this.getTopics(1);
        }
    }
</script>