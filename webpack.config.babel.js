const path = require('path')

const webpack = require('webpack')

const TerserPlugin = require('terser-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const autoprefixer = require('autoprefixer')

//const Config = require('./src/config.js')

import { projectConfig } from './src/config'

const CONFIG = (env, options) => {
  const inProd = options.mode === 'production';

  return {
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      //compress: true,
      hot: true,
      port: 3000,
      open: true
    },

    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'all.js',
      library: projectConfig.name
    },

    devtool: inProd ? 'source-map' : false,

    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),

        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              inline: false
            }
          }
        })
      ]
    },

    plugins: inProd
      ? [
          new MiniCssExtractPlugin({ filename: 'all.css' }),
          new webpack.DefinePlugin({ IS_PRODUCTION: JSON.stringify(inProd) })
        ]
      : [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.DefinePlugin({ IS_PRODUCTION: JSON.stringify(inProd) })
        ],

    module: {
      rules: [/*{
        test: /\.m?js$/,
        enforce: 'pre',
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      },*/{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }, {
        test: /(\.styl$|\.css$)/,
        use: inProd
          ? [
              {
                loader: MiniCssExtractPlugin.loader
              },
              {
                loader: 'css-loader',
                options: {
                  url: false,
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [autoprefixer()],
                  sourceMap: true
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          : ['style-loader', 'css-loader?url=false', 'stylus-loader']
      }]
    }
  }
}

export default CONFIG
