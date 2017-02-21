const path = require('path');

const distDir = path.resolve(__dirname, '../../dist');

module.exports = {
  filename: '[name].[hash].bundle.js',
  path: distDir,
  library: 'Kokuma',
  libraryTarget: 'var',
};
