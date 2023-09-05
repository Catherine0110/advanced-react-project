import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin()
    ]
}