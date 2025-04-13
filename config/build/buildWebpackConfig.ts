import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/BuildOptions";


export function buildWebpackConfig(options:BuildOptions):webpack.Configuration{

    const {buildMode,paths:{build,entry,html}} = options

    return  {
    mode: buildMode,
    entry: entry,
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
        filename: "[name].[contenthash].js",
        path: build,
        clean: true
    },
    plugins: buildPlugins(html),
      stats: {
      children: true,
    },
}
}