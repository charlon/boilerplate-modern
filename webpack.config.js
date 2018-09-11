const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  mode: "development",
  context: __dirname,

  entry : {
    boilerplate: './boilerplate/static/boilerplate/',
    home: './myuw/static/home/',
    teaching: './myuw/static/teaching/',
  },

  optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},

  output: {
      path: path.resolve('./boilerplate/static/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({
      filename: './webpack-stats.json'
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
    })

  ],

  module: {
      rules: [
          {
              test: /\.(ts|tsx)$/,
              loader: 'awesome-typescript-loader'
          },
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  babelrc: false,
                  presets: ['react']
              }
          },
          {
              test: /\.(css|scss)$/,
              use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
              ]
          },
          {
              test: /\.(jpg|png|gif|svg|pdf|ico)$/,
              use: [
                  {
                      loader: 'url-loader',
                  },
              ]
          },
      ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }

}
