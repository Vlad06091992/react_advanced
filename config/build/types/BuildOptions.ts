export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry:string,
    build:string,
    html:string,
    src:string
}

export interface ENV {port:number, mode:BuildMode}

export interface BuildOptions {
    paths:BuildPaths,
    isDev:boolean
}
