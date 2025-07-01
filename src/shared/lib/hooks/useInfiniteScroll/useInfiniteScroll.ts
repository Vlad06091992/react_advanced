import { MutableRefObject, useEffect, useRef } from 'react';

interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>

}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) => {
    useEffect(() => {
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);

            return () => {
                if (observer && triggerRef.current) {
                    observer.unobserve(triggerRef.current);
                }
            };
        }
    }, [triggerRef, wrapperRef, callback]);
};
