import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {
  WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin,
} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiURL, project }: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
      title: './index.html',
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiURL),
      __PROJECT__: JSON.stringify(project),
    }),
  ]

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }))
  }
  return plugins
}
