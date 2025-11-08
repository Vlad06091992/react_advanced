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
import { TestProps } from '@/shared/types';

interface PageProps extends TestProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void

}

export const Page = (props: PageProps) => {
    const {
        className, children, onScrollEnd, 'data-testid': dataTestId
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

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
        <main
            data-testid={dataTestId ?? 'Page'}
            id={PAGE_ID}
            ref={wrapperRef}
            className={classnames(className, [cls.page])}
            onScroll={throttledOnScroll}
        >
            {children}
            {onScrollEnd && <div className={cls.scrollTrigger} ref={triggerRef} />}
        </main>
    );
};
