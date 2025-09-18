import webpack from 'webpack';
import { buildBabelLoader } from '../build/loaders/buildBabelLoader';
import { BuildOptions } from '../build/types/BuildOptions';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const scssLoader = buildCssLoader(isDev);
    const codeBabelLoader = buildBabelLoader(isDev, false);
    const tsxCodeBabelLoader = buildBabelLoader(isDev, true);

    // порядок лоадеров важен!

    return [
        fileLoader, svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        scssLoader,
    ];
}
