/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const WebpackUserscript = require('webpack-userscript');
const dev = process.env.NODE_ENV === 'development';

const script = process.env.SCRIPT;
if (!fs.existsSync(script)) {
  throw new Error(`Path ${script} is not existed`);
}
const dirname = path.dirname(script);
const headers = require(path.join(process.cwd(), dirname, './header.json'));
if (dev) {
  headers.name += ' - Dev';
  headers.version = `${headers.version}-t.[buildTime]`;
}
const outName = path.relative('./src', dirname).replace(/\//g, '-');

module.exports = {
  mode: dev ? 'development' : 'production',
  entry: script,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${outName}.user.js`
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, './src/common'),
      log: path.resolve(__dirname, './src/common/log'),
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'last 2 Chrome versions' }],
              [
                '@babel/preset-react',
                {
                  'pragma': 'h'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.CANDY': process.env.CANDY ? JSON.stringify(Buffer.from(process.env.CANDY).toString('base64')) : '',
    }),
    new WebpackUserscript({
      headers,
      proxyScript: {
        baseUrl: 'http://127.0.0.1:8080',
        filename: '[basename].proxy.user.js',
        enable: () => process.env.LOCAL_DEV === '1'
      }
    })
  ]
};
