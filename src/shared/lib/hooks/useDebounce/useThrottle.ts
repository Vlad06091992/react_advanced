import { useCallback, useRef } from 'react';

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */
export function useDebounce(
    callback: (...args: any[]) => void,
    delay: number,
): (...args: any[]) => void {
    const timer = useRef<any>(null);
    return useCallback(
        (...args) => {
            clearInterval(timer.current);
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}
