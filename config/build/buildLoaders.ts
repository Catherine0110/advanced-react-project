import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoaders = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const stylesLoader = buildCssLoader(isDev)
  const srgrLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }],
        ],
      },
    },
  }
  return [srgrLoader, fileLoader, babelLoader, typescriptLoaders, stylesLoader]
}
