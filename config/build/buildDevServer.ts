import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions, ENV } from './types/BuildOptions';

export function buildDevServer(options:BuildOptions, env:ENV):any {
    return {
        port: env.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
