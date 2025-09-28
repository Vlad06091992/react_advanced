import { classnames } from 'shared/lib/classnames';
import React, { ReactNode, } from 'react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string
    lazy?: boolean
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

// здесь мемоизация - это плохая идея так как children содержит в себе древовидную структуру компонентов 37 урок 26.18
export const Modal = ({
    className, isOpen, onClose, children, lazy,
}: ModalProps) => {
    const { theme } = useTheme();
    const { isClosing, isMounted, closeHandler } = useModal({ onClose, isOpen });

    const mods = {
        [styles.opened]: isOpen,
    };

    const contentMods = {
        [styles.contentOpened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classnames(styles.Modal, [className, theme], mods)}>
                <Overlay onClick={closeHandler} />
                <div className={classnames(styles.content, [], contentMods)}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
