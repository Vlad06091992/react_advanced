import htmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/BuildOptions';

export function buildPlugins(htmlPath: string, options:BuildOptions): webpack.WebpackPluginInstance[] {
    const { isDev } = options;
    return [
        new htmlWebpackPlugin({
            template: htmlPath,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];
}
