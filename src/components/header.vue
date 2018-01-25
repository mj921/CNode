<style lang="scss" scoped>
    $headerHeight:50px;
    .header{
        height:$headerHeight;
        min-width: 1000px;
        background-color: #444;
        .header-content{
            margin: 0 auto;
            width:90%;
            ul{
                float: left;
                height:$headerHeight;
                line-height: $headerHeight;
                li{
                    float: left;
                    padding: 10px 15px;
                    height: $headerHeight - 20px;
                    line-height: $headerHeight - 20px;
                    color: #ccc;
                    font-size: 13px;
                    list-style:none;
                }
            }
        }
    }
</style>
<template>
    <div class="header">
        <div class="header-content clearfix">
            <ul class="clearfix">
                <li><router-link to="/">首页</router-link></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>