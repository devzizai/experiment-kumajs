const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

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

plugins.unshift(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: false,
    debug: false,
    options: {
      postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
      ]
    }
  })
);

const devTool = 'cheap-module-eval-source-map';

module.exports = {
  entry: entries,
  context: entryDir,
  devtool: devTool,
  module: modules,
  output,
  resolve,
  plugins
};
