// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
