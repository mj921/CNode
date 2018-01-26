<style lang="scss" scoped>
    $headerHeight:50px;
    .header{
        height:$headerHeight;
        background-color: #444;
        .header-content{
            margin: 0 auto;
            width:90%;
            min-width: 1200px;
            ul{
                float: left;
                height:$headerHeight;
                line-height: $headerHeight;
                li{
                    float: left;
                    padding: 10px 30px 10px 0;
                    height: $headerHeight - 20px;
                    line-height: $headerHeight - 20px;
                    color: #ccc;
                    font-size: 13px;
                    list-style:none;
                    a{
                        &:hover{
                            color: #fff;
                            text-decoration: none;
                        }
                    }
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