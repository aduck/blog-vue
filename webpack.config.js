const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  devtool:'#eval-source-map',
  // 入口
  entry:{
    app:__dirname+'/src/main',
  },
  // 输出
  output:{
    path:__dirname+'/dist',
    filename:'[name].js'
  },
  module:{
    loaders:[
      {
        test:/\.vue$/,
        loader:'vue-loader',
        options:{
          loaders:{
            css:'vue-style-loader!css-loader',
            scss:'vue-style-loader!css-loader!sass-loader'
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
      template:__dirname+'/src/index.tmpl.html'
    })
  ],
  resolve:{
    extensions:['.vue','.js','.json','.css','.scss']
  },
  devServer:{
    contentBase:__dirname+'/dist',
    noInfo:true,
    inline:true,
    historyApiFallback:true,
    proxy: {
      '/api': {
         target:'http://127.0.0.1/',
         secure:false,
         pathRewrite: {
            '^/api': '/api'
         }
      }
    }
  }

}