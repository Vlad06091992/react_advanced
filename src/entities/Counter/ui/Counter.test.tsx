import { fireEvent, screen } from '@testing-library/react';

import { userEvent } from '@storybook/testing-library';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    xit('xit render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    xit('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        // опционально, можно использовать разный функционал для тестирования
        // fireEvent.click(screen.getByTestId('increment-btn'));
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    xit('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
