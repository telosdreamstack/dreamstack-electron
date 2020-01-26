/**
 * Base webpack config used across other specific configs
 */

import path from 'path'
import webpack from 'webpack'
import { dependencies } from '../package.json'

export default {
  externals: [
    ...Object.keys(dependencies || {}),
  ],

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [
                // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
                'react-hot-loader/babel',
              ],
            },
          },
          'ts-loader',
        ],
      },
    ],
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    modules: ['node_modules'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),

    new webpack.NamedModulesPlugin(),
  ],
}
