import {
  NamedModulesPlugin,
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
} from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || '3000'

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: process.env.NODE_ENV !== 'production',
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: () => [require('autoprefixer')],
            },
          },
          {
            loader: 'sass-loader', // compiles SASS to CSS
          }],
      },
    ],
  },
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  devServer: {
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
  },
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    extractSass,
    new HtmlPlugin({
      template: 'index.html',
      files: {
        js: ['bundle.js'],
        css: ['bundle.css'],
      },
    }),
  ],
}