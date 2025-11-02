import {
    MutableRefObject, ReactNode, UIEvent, useEffect, useRef
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classnames } from '@/shared/lib/classnames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, scrollSaveActions } from '@/features/ScrollSave';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { PAGE_ID } from '@/shared/const';

interface PageProps {
    className?:string
    children:ReactNode
    onScrollEnd?: () => void

}

export const Page = ({ className, children, onScrollEnd }:PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state:StateSchema) => getUIScrollByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
        // eslint-disable-next-line
    }, []);

    const onScroll = (e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({ position: e.currentTarget.scrollTop, path: pathname }));
    };
    const throttledOnScroll = useThrottle(onScroll, 500);

    return (
        <main id={PAGE_ID} ref={wrapperRef} className={classnames(className, [cls.page])} onScroll={throttledOnScroll}>
            {children}
            { onScrollEnd && <div className={cls.scrollTrigger} ref={triggerRef} />}
        </main>
    );
};
