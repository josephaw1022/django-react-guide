// frontend/webpack.config.js
const path = require('path')
const webpack = require('webpack')
module.exports = {
    // Where Webpack looks to load your JavaScript
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    // Where Webpack spits out the results (the myapp static folder)
    output: {
        path: path.resolve(__dirname, '../backend/myapp/static/myapp/build/'),
        filename: '[name].js',
    },
    
    // Tell Webpack to use Babel for all JavaScript files, expect for stuff in node_modules.
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }, 

            
            {
                test: /\.jsx$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                      ]
                    }
                  } 
            },
            {
                test:/\.s[ac]ss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'

                ]
            }, 
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
             }, 
             {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              }
              ,
            
        ]
    },
    // plugins: [
    //     // Don't output new files if there is an error
    //     new webpack.NoEmitOnErrorsPlugin(),
    // ],
    // Where find modules that can be imported (eg. React) 
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.scss', '.sass' ],
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
    },
}
