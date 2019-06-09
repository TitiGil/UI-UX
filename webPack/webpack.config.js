var webpack=require("webpack");
var path=require('path');
var WriteFilePlugin =require('write-file-webpack-plugin');
module.exports = {
  
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "dist/public"),
        filename:"bundle.js",
		publicPath : "public"
    },
    devServer :{
inline:true,
contentBase:'dist/public',
port:3000
    },
	  plugins: [
        new WriteFilePlugin()
    ],
   module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    }
  ]
}
}
