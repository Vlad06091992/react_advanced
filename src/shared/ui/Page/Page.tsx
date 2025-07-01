import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames';
import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?:string
    children:ReactNode
    onScrollEnd?: () => void

}

export const Page = ({ className, children, onScrollEnd }:PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    return (
        <section ref={wrapperRef} className={classnames(className, [cls.page])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};

// t('Редактировать')
