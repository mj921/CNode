<style src="../index.min.css"></style>
<style>
    *{
        font-family: "微软雅黑";
    }
    body,div,dt,dl,ol,ul,li,span,p,b,i,h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #e1e1e1;
    }
    ul,ol,li{
        list-style: none;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    .clearfix{
        *zoom: 1;
    }
    .clearfix:after{
        content: "";
        display: block;
        clear: both;
    }
</style>
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
