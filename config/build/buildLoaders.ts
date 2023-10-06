import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

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

  const babelLoader = buildBabelLoader(isDev)
  return [srgrLoader, fileLoader, babelLoader, typescriptLoaders, stylesLoader]
}
