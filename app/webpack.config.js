/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/**
 * Root Path
 * @desc Constructs a valid path from the current project directory
 * @param args Path components
 * @returns Valid concatenated path
 */
const rootPath = (...args) => args.reduce((fullPath, pathComponent) => path.join(fullPath, pathComponent), __dirname)

/**
 * HTML Webpack Plugin
 * @desc Configuration for building the HTML page
 * @note Some props are injected and some are configuration (rendering) settings
 */
const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Coding Challenge',
  template: rootPath('index.html'),
  filename: 'index.html',
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  },
  minify: false
})

const hotModulePlugin = new webpack.HotModuleReplacementPlugin()

/**
 * Webpack Configuration
 */
module.exports = {
  entry: ['webpack/hot/dev-server', rootPath('app.tsx')],
  target: 'web',
  output: {
    path: rootPath('dist'),
    publicPath: '/',
    filename: '[name]-[hash].bundle.js',
    chunkFilename: '[name]-[hash].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\\.less$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useCache: true,
            errorsAsWarnings: true
          }
        },
        exclude: [/node_modules/]
      },
      {
				test: /\.jsx?$/,
				use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env', '@babel/react', 'es2015'],
              plugins: ['@babel/plugin-syntax-jsx', '@babel/proposal-class-properties']
          }
        },
        exclude: [/node_modules/]
			},
      {
        test: /\.s(a|c)ss$/,
        oneOf: [
          {
            test: /\.module\.s(a|c)ss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { modules: true }
              },
              { loader: 'sass-loader' }
            ]
          },
          {
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]'
              },
              sourceMap: true
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader, options: { hmr: true } }, 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    htmlPlugin,
    hotModulePlugin,
    new webpack.WatchIgnorePlugin([/less\.d\.ts$/, /scss\.d\.ts$/]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
    cacheWithContext: false
  },
  devServer: {
    publicPath: 'http://localhost:3000',
    contentBase: rootPath('assets'),
    open: true,
    lazy: false,
    hot: true,
    compress: true,
    historyApiFallback: true,
    port: 3000
  }
}
