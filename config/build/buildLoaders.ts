import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
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

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = buildCssLoader(isDev);
    const babelLoader = buildBabelLoader(isDev);

    // порядок лоадеров важен!

    return [
        fileLoader, svgLoader,
        babelLoader,
        typescriptLoader, scssLoader,
    ];
}
