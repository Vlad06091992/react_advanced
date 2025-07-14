export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry:string,
    build:string,
    html:string,
    src:string,
    locales:string,
    buildLocales:string
}

export interface ENV {port:number, mode:BuildMode, apiUrl:string}

export interface BuildOptions {
    paths:BuildPaths,
    apiUrl:string,
    isDev:boolean
}
