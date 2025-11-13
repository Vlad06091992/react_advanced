import { BuildOptions, ENV } from './types/BuildOptions';

export function buildDevServer(options:BuildOptions, env:ENV):any {
    return {
        port: env?.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
