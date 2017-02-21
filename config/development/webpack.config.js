const autoprefixer = require('autoprefixer');
const path = require('path');
const strftime = require('strftime');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

const entries = require('../common/webpack.entries.config');
const output = require('../common/webpack.output.config');
const modules = require('../common/webpack.module.config');
const plugins = require('../common/webpack.plugins.config');

const baseDir = path.resolve(__dirname, '../..');
const srcDir = path.resolve(baseDir, 'src');
const nmDir = path.resolve(baseDir, 'node_modules');
const entryDir = path.resolve(srcDir, 'entries');

const resolve = {
  modules: [srcDir, nmDir]
};

entries.hmr = 'webpack-hot-middleware/client';

output.filename = `[name].${strftime('%Y%m%d%H%M%S%L')}.[hash].bundle.js`;

plugins.unshift(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    },
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: false,
    debug: false,
    options: {
      postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
      ]
    }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new Visualizer()
);

const devTool = 'cheap-module-eval-source-map';

const devServer = {
  contentBase: [path.resolve(baseDir, 'public')],
  compress: true,
  hot: true,
  inline: true,
  watchContentBase: true,
  port: 9000
};

module.exports = {
  entry: entries,
  context: entryDir,
  devtool: devTool,
  module: modules,
  output,
  resolve,
  plugins,
  devServer
};
