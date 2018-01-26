<style lang="scss" scoped>
    #main{
        width: 90%;
        min-width: 1200px;
        max-width: 90%;
        margin: 15px auto;
        background-color: #fff;
    }
    .detail-header{
        padding: 10px;
        border-bottom: 1px solid #e5e5e5;
        .title{
            margin: 8px 0;
            width: 75%;
            line-height: 1.3em;
            font-size: 22px;
            color: #333;
        }
        span{
            display:inline-block;
            font-size: 14px;
            color: #838383;
            line-height: 14px;
            &:before{
                vertical-align: top;
                content: "•";
                width: 10px;
                text-align: center;
                line-height: 14px;
                height: 14px;
                display: inline-block;                
            }
        }
    }
    .content{
        padding:10px;
        ol,ul,li{
            list-style: disc;
        }
    }
</style>
<style lang="scss">
    .topic_content{
        padding:10px;
        a{
            color:#4b8cf0;
        }
    }
</style>
<template>
    <div>
        <myHeader></myHeader>
        <div id="main">
            <div class="detail-header">
                <div class="title">{{article.title}}</div>
                <span>发布于 {{timeAgo(new Date(article.last_reply_at))}}</span><span>作者 {{article && article.author && article.author.loginname}}</span><span>{{article.visit_count}} 次浏览</span><span>来自 {{tabList[article.tab]}}</span>
            </div>
            <div class="content inner topic">
                <div class="topic_content" v-html="article.content"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { ajax, timeAgo } from "../util.js";

    export default {
        data(){
            return {
                article:{},
                tabList:{"ask":"问答","share":"分享","job":"招聘","good":"精华"}
            }
        },
        methods:{
            timeAgo:timeAgo,
            getTopicDetail:function(){
                const self = this;
                const url = "https://cnodejs.org/api/v1/topic/" + this.$route.params.id;
                ajax({
                    url:url,
                    type:"get",
                    dataType:"json",
                    success:function(json){
                        if(json.success){
                            self.article = json.data;
                        }
                    }
                });
            }
        },
        created:function(){
            this.getTopicDetail();
        }
    }
</script>