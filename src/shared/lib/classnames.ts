interface Mods {
    [key: string]: boolean
}

export function classnames(cls: string, additional?: string[], mods?: Mods): string {
    let res = '';
    res += cls;

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
