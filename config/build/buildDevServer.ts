import {BuildOptions, ENV} from "./types/BuildOptions";
import {Configuration as DevServerConfiguration} from "webpack-dev-server"

export function buildDevServer (options:BuildOptions,env:ENV):DevServerConfiguration{
    return {
        port:env.port,
        open:true,
        historyApiFallback:true
  }
}
