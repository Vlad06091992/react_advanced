import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { BrowserRouter, Router } from 'react-router-dom';
import { RenderWithBrowserRouter } from 'shared/config/tests/renderWithBrowserRouter';

describe('Sidebar', () => {
    it('renders Sidabar component', () => {
        render(
            <RenderWithBrowserRouter>
                <Sidebar />
            </RenderWithBrowserRouter>,
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });

    it('renders Button component', () => {
        render(
            <RenderWithBrowserRouter>
                <Sidebar />
            </RenderWithBrowserRouter>,
        );
        fireEvent.click(screen.getByTestId('sidebar_toggle_button'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(screen.getByTestId('sidebar_toggle_button'));
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
        screen.debug();
    });
});
