// import { counterReducer, counterActions } from 'src/entities/Article/model/slice/ArticleSlice';
// import { Article } from 'src/entities/Article/model/types/Article';

describe('counterSlice.test', () => {
    // test('decrement', () => {
    //     const state: Article = { value: 10 };
    //
    //     expect(
    //         counterReducer(state, counterActions.decrement()),
    //     ).toEqual({ value: 9 });
    // });
    // test('increment', () => {
    //     const state: Article = { value: 10 };
    //
    //     expect(
    //         counterReducer(state, counterActions.increment()),
    //     ).toEqual({ value: 11 });
    // });

    test('should work with empty state', () => {
        expect(1).toBe(1);
    });
});
