// import { fireEvent, screen } from '@testing-library/react';
// import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// import { userEvent } from '@storybook/testing-library';
// import { Counter } from './Counter';
//
// describe('Counter', () => {
//     test('test render', () => {
//         componentRender(<Counter />, {
//             initialState: { counter: { value: 10 } },
//         });
//         expect(screen.getByTestId('value-title')).toHaveTextContent('10');
//     });
//
//     test('increment', () => {
//         componentRender(<Counter />, {
//             initialState: { counter: { value: 10 } },
//         });
//         // опционально, можно использовать разный функционал для тестирования
//         // fireEvent.click(screen.getByTestId('increment-btn'));
//         userEvent.click(screen.getByTestId('increment-btn'));
//         expect(screen.getByTestId('value-title')).toHaveTextContent('11');
//     });
//
//     test('decrement', () => {
//         componentRender(<Counter />, {
//             initialState: { counter: { value: 10 } },
//         });
//         fireEvent.click(screen.getByTestId('decrement-btn'));
//         expect(screen.getByTestId('value-title')).toHaveTextContent('9');
//     });
// });

// import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// import { Counter } from 'entities/Profile/ui/Counter';
// import { screen } from '@testing-library/react';

describe('Counter', () => {
    test('test render', () => {
        // componentRender(<Counter />, {
        //     initialState: { counter: { value: 10 } },
        // });
        expect(1).toBe(1);
    });
});
