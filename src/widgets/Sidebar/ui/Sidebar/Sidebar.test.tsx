import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
    it('renders Sidabar component', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });

    it('renders Button component', () => {
        render(<Sidebar />);
        fireEvent.click(screen.getByTestId('sidebar_toggle_button'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(screen.getByTestId('sidebar_toggle_button'));
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
        screen.debug();
    });
});
