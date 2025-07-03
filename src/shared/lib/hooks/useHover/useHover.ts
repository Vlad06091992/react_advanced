import {
    memo, useCallback, useMemo, useState
} from 'react';

interface UseHoverFuncs {
    onMouseLeave: () => void
    onMouseEnter: () => void
}

type UseHoverResult = [boolean, UseHoverFuncs]

export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState(false);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);
    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    return useMemo(() => [isHover, {
        onMouseLeave,
        onMouseEnter
    }], [isHover, onMouseEnter, onMouseLeave]);
};
