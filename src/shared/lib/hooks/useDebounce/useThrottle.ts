import { useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number): (...args: any[]) => void {
    const timer = useRef<any>(null);
    return useCallback((...args) => {
        clearInterval(timer.current);
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
