import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const RenderWithBrowserRouter = ({
    children,
}: {
    children: ReactNode;
}) => <MemoryRouter>{children}</MemoryRouter>;
