import path from 'path';
import { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions, ENV } from './config/build/types/BuildOptions';
import { buildLoaders } from './config/build/buildLoaders';
import { buildResolvers } from './config/build/buildResolvers';
import { buildPlugins } from './config/build/buildPlugins';
import { buildDevServer } from './config/build/buildDevServer';

type ConfigurationAndDevServer = Configuration & { devServer: DevServerConfiguration }

export default (env:ENV): ConfigurationAndDevServer => {
    const options:BuildOptions = {
        paths: {
            build: path.resolve(__dirname, 'build'),
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
            locales: path.resolve(__dirname, 'public', 'locales'),
            buildLocales: path.resolve(__dirname, 'build', 'locales'),
        },
        isDev: env?.mode === 'development',
        apiUrl: env?.apiUrl || 'http://localhost:8001',
    };

    const { paths: { build, entry, html }, isDev = true } = options;

    return {
        devtool: isDev && 'eval-cheap-module-source-map',
        mode: env?.mode,
        entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(html, options),
        stats: {
            children: true,
        },
        devServer: isDev && buildDevServer(options, env),
    };
};
