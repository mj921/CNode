var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"./build")
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:"vue-loader"
            },
            {
                test:/\.js$/,
                use:"babel-loader"
            },
            {
                test:/\.css$/,
                use:"style-loader!css-loader"
            },
            {
                test:/\.scss$/,
                use:"style-loader!css-loader!sass-loader"
            },
            {
                test:/\.(png|jpg|gif|jpeg|PNG|GIF|JPEG|JPG)$/,
                use:"url-loader?limit=8196&name=images/[name].[hash:8].[ext]"
            }
        ]
    },
    devtool:"#eval-source-map",
    devServer:{
        contentBase:path.join(__dirname,'./build'),
        historyApiFallback: true,
        host: '0.0.0.0',
        port:8081
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({    //压缩代码
           compress: {
               warnings: false
           },
           except: ['$super', '$', 'exports', 'require']    //排除关键字
        })
    ]
}