const path = require('path')
const fs = require('fs')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function (env = {}) {
  let babelConf;

  const babelRC = env.esnext ? './.es6.babelrc' : './.babelrc';
  if(fs.existsSync(babelRC)) {
    babelConf = JSON.parse(fs.readFileSync(babelRC));
    babelConf.babelrc = false;
  }

  const externals = {
    blockly: 'Blockly',
  };
  const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: env.esnext ? '[name].es6' : '[name]',
    publicPath: '/dist/',
    library: 'spritly',
    libraryTarget: env.esnext ? 'commonjs2' : 'umd',
  };

  if(env.production) {
    output.filename += '.min.js';
  } else {
    output.filename += '.js';
  }

  const lang = env.lang || 'zh-cn';

  return {
    mode: env.production ? 'production' : 'none',
    // entry: './src/web/entry-runtime-with-compiler.js',
    entry: {
      'spritly-runtime': './src/runtime/index.js',
      spritly: './src/index.js',
    },
    output,
    resolve: {
      aliasFields: ['browser', 'esnext', lang],
      // alias: require('./build/alias'),
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            resolve('src'), 
            resolve('node_modules/spritejs'),
            /node_modules\/(sprite-[\w-]+\/|svg-path-to-canvas|fast-animation-frame).*/
          ],
          use: {
            loader: 'babel-loader',
            options: babelConf,
          },
        },
      ],

      /* Advanced module configuration (click to show) */
    },

    externals,
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, ''),
      compress: true,
      port: 9090,
      // ...
    },

    plugins: [
      // ...
      new webpack.DefinePlugin({
        '__WEEX__': false
      }),
    ],
    // list of additional plugins


    /* Advanced configuration (click to show) */
  }
}