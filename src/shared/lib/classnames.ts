interface Mods {
    [key: string]: boolean | undefined
}

export function classnames(cls: string | undefined, additional?: Array<string | undefined>, mods?: Mods): string {
    let res = '';
    cls && (res += cls);

    mods && Object.keys(mods).forEach((c) => {
        if (mods[c]) {
            res += ` ${c}`;
        }

        if (!mods[c]) {
            res = res.replace(`${c}`, '');
        }
    });

    const ad = additional ? additional.join(' ') : '';

    res += ` ${ad}`;
    return res.trim();
}
