import { classnames } from 'shared/lib/classnames';
import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: string
    isOpen?: boolean
    onClose?: () => void
}

const ANUIMATION_DELAY = 300;

export const Modal = ({
    className, isOpen, onClose, children,
}: ModalProps) => {
    const mods = {
        [styles.opened]: isOpen,
    };

    const [isClosing, setIsClosing] = useState(false);
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

    const onKeyDown = useCallback((e:any) => {
        if (e.key === 'Escape') closeHandler();
    }, [closeHandler]);

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
    return (
        <Portal>
            <div className={classnames(styles.Modal, [className], mods)}>
                <div onClick={() => closeHandler()} className={styles.overlay}>
                    <div onClick={onClickContent} className={classnames(styles.content, [], contentMods)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
