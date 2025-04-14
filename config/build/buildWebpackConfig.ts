import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions, ENV} from "./types/BuildOptions";
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions,env:ENV): webpack.Configuration {
    console.log('options',options)
    console.log('env',env)
    const {paths: {build, entry, html}} = options

    return {
        devtool: 'inline-source-map',
        mode: env.mode,
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
        devServer:buildDevServer(options,env)
    }
}