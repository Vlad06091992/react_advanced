import { fireEvent, render, screen } from '@testing-library/react';
import { RenderWithBrowserRouter } from 'shared/config/tests/renderWithBrowserRouter';
import { Sidebar } from '../Sidebar/Sidebar';

describe('Sidebar', () => {
    it('renders Sidabar component', () => {
        render(
            <RenderWithBrowserRouter>
                <Sidebar />
            </RenderWithBrowserRouter>,
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // screen.debug();
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
        // screen.debug();
    });
});
