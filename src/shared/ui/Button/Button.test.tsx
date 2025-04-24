import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    it('renders Button component', () => {
        render(<Button>TEXT</Button>);
        expect(screen.getByText('TEXT')).toBeInTheDocument();
    });

    it('Button', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEXT</Button>);
        expect(screen.getByText('TEXT')).toHaveClass('clear');
        screen.debug()
    });
});
