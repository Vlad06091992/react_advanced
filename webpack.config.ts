import path from "path";
import webpack from "webpack";
import {BuildOptions, ENV} from "./config/build/types/BuildOptions";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildPlugins} from "./config/build/buildPlugins";
import {buildDevServer} from "./config/build/buildDevServer";

export default (env:ENV): webpack.Configuration => {

    const options:BuildOptions = {
        paths:{
            build: path.resolve(__dirname, 'build'),
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            html:path.resolve(__dirname, 'public', 'index.html')
        },
        isDev:env.mode === 'development',
    }

    const {paths: {build, entry, html}, isDev = true} = options

    return {
        devtool: isDev ? 'inline-source-map': null,
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
        devServer:isDev ? buildDevServer(options,env) : null
    }
}
