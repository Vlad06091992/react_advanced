import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './types/BuildOptions';

export function buildPlugins(htmlPath: string, options:BuildOptions): webpack.WebpackPluginInstance[] {
    const { isDev, apiUrl, paths } = options;
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

        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales }
            ],
        }),

    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            // автоматический запуск
            openAnalyzer: false,
        }));
    }

    // plugins.push(new BundleAnalyzerPlugin({
    //     // автоматический запуск
    //     openAnalyzer: true,
    // }));

    return plugins;
}
