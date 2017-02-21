const path = require('path');

const srcDir = path.resolve(__dirname, '../../src');

module.exports = {
  rules: [
    {
      test: /\.jsx?$/,
      use: [
        {
          loader: 'babel-loader',
          query: {
            babelrc: true,
            presets: [['es2015', { module: false }], 'stage-0', 'stage-1', 'stage-2', 'react'],
            plugins: ['transform-decorators-legacy', 'transform-object-assign'],
          },
        },
        { loader: 'eslint-loader' },
      ],
      include: [srcDir],
    },
    {
      test: /\.(css|sass|scss)$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            camelCase: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' },
      ],
    },
    {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            camelCase: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        { loader: 'postcss-loader' },
        { loader: 'less-loader' },
      ],
    },
    {
      test: /\.styl$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            camelCase: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        { loader: 'postcss-loader' },
        { loader: 'stylus-loader' },
      ],
    },
    {
      test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
      use: [
        { loader: 'url-loader', options: { limit: 100000 } },
      ],
    },
    {
      test: /\.(mp4|ogg|svg)$/,
      use: [{ loader: 'file-loader' }],
    },
  ],
};
