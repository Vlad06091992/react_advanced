import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/BuildOptions';

export function buildPlugins(htmlPath: string, options:BuildOptions): webpack.WebpackPluginInstance[] {
    const { isDev, apiUrl } = options;
    const plugins = [
        new HtmlWebpackPlugin({
            template: htmlPath,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(apiUrl),
        }),

    ];

    isDev && plugins.push(new BundleAnalyzerPlugin({
        // автоматический запуск
        openAnalyzer: false,
    }));

    isDev && plugins.push(new webpack.HotModuleReplacementPlugin());

    return plugins;
}
