import { classnames } from 'shared/lib/classnames';
import React, {
    ReactNode,
    useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string
    lazy?: boolean
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const ANUIMATION_DELAY = 300;

// здесь мемоизация - это плохая идея так как children содержит в себе древовидную структуру компонентов 37 урок 26.18
export const Modal = ({
    className, isOpen, onClose, children, lazy,
}: ModalProps) => {
    const mods = {
        [styles.opened]: isOpen,
    };
    const { theme } = useTheme();
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);

            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANUIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e) => {
        if (e.key === 'Escape') closeHandler();
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timeRef.current);
        };
    }, [isOpen, onKeyDown]);

    const contentMods = {
        [styles.contentOpened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    const onClickContent = (e:React.MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classnames(styles.Modal, [className, theme], mods)}>
                <div onClick={() => closeHandler()} className={styles.overlay}>
                    <div onClick={onClickContent} className={classnames(styles.content, [], contentMods)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
