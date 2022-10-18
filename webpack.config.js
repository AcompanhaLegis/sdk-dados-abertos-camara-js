const path = require('path');

module.exports = {
  entry: {
    'sdk-dados-abertos-camara': './index.ts',
    'sdk-dados-abertos-camara.min': './index.ts',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'SdkSadosAbertosCamara',
    umdNamedDefine: true,
  },
};
