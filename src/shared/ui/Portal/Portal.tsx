import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
    } = props;

    const [container, setContainer] = useState(null);

    useEffect(() => {
        const element = document.body.querySelector('.app');
        if (element) setContainer(element);
    }, []);

    if (!container) return null;

    return createPortal(children, container);
};
