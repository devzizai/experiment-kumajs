const fs = require('fs');
const path = require('path');

const entryDir = path.resolve(__dirname, '../../src/entries');
const entryMatch = /\.jsx?$/;
const entries = {
  vendor: ['babel-polyfill', 'es6-promise/auto', 'whatwg-fetch'],
};

const parseEntryName = (file) => {
  const extName = path.extname(file);
  return file.substring(0, file.length - extName.length);
};

fs.readdirSync(entryDir)
  .forEach((fileName) => {
    const fullPath = path.join(entryDir, fileName);
    if (fs.statSync(fullPath).isFile()
      && entryMatch.test(fileName)) {
      const entryName = parseEntryName(fileName);
      entries[entryName] = fullPath;
    }
  });

module.exports = entries;
