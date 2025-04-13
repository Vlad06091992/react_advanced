import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildOptions} from "./config/build/types/BuildOptions";

const options:BuildOptions = {
    paths:{
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        html:path.resolve(__dirname, 'public', 'index.html')
    },
    buildMode:'development'
}

const config: webpack.Configuration = buildWebpackConfig(options)

export default config