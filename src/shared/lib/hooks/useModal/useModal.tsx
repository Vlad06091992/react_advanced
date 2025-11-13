import { useCallback, useEffect, useRef, useState } from 'react';

const ANUIMATION_DELAY = 300;

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay?: number;
}

/**
 * Переиспользуемый хук для модальных компонентов (drawer/modal)
 * @param animationDelay
 * @param isOpen
 * @param onClose
 */
export const useModal = ({
    onClose,
    isOpen,
    animationDelay = ANUIMATION_DELAY,
}: UseModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);

            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeHandler();
        },
        [closeHandler],
    );

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

    return {
        isClosing,
        isMounted,
        closeHandler,
    };
};
