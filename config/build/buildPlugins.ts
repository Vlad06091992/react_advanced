import htmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(htmlPath: string): webpack.WebpackPluginInstance[] {
    return [
        new htmlWebpackPlugin({
            template: htmlPath
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].css'
        })
    ];
}
