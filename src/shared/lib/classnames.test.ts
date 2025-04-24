// import { classnames } from './classnames';

import { classnames } from 'shared/lib/classnames';

describe('classnames', () => {
    test('with only first param', () => {
        expect(classnames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classnames('someClass', ['class1', 'class2'], {}))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass hovered scrollable class1 class2';
        expect(classnames(
            'someClass',
            ['class1', 'class2'],
            { hovered: true, scrollable: true },
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass hovered class1 class2';
        expect(classnames(
            'someClass',
            ['class1', 'class2'],
            { hovered: true, scrollable: false },
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass hovered class1 class2';
        expect(classnames(
            'someClass',

            ['class1', 'class2'],
            { hovered: true, scrollable: undefined },
        )).toBe(expected);
    });
});
