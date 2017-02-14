const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const ExtractTextPlugin=require("extract-text-webpack-plugin")
const UglifyJsPlugin=webpack.optimize.UglifyJsPlugin

module.exports={
  context:__dirname,
  // 入口
  entry:{
    vendor:['vue','vue-resource','vue-router'],
    app:'./src/main'
  },
  // 输出
  output:{
    path:'dist',
    filename:'[name].js?[hash:8]'
  },
  module:{
    loaders:[
      {
        test:/\.vue$/,
        loader:'vue-loader',
        options:{
          loaders:{
            css:ExtractTextPlugin.extract({
              loader:'css-loader',
              fallback:'vue-style-loader'
            })
          }
        }
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.tmpl.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor",
      minChunks:Infinity
    }),
    new ExtractTextPlugin("style.css"),
    new UglifyJsPlugin({
      output:{
        comments:false
      },
      compress:{
        warnings:false
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV:JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve:{
    extensions:['.vue','.js','.json','.css','.scss']
  }
}