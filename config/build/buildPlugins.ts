import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
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

        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /node_modules/,
            // include specific files based on a RegExp
            // include: /dir/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // allow import cycles that include an asyncronous import,
            // e.g. via import(/* webpackMode: "weak" */ './file.js')
            // allowAsyncCycles: false,
            // set the current working directory for displaying module paths
            // cwd: process.cwd(),
        })

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
