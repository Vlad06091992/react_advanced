import htmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export function buildPlugins (htmlPath:string):webpack.WebpackPluginInstance[] {
    return [
    new htmlWebpackPlugin({
        template: htmlPath
    }),
    new webpack.ProgressPlugin()
];
}