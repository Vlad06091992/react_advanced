import { FC } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { useCounterValue } from '../model/selectors/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

export interface CounterProps {
    className?:string
}

export const Counter:FC<CounterProps> = ({ className }) => {
    const value = useCounterValue();
    const { increment, decrement, add } = useCounterActions();

    const inc = () => {
        increment();
    };
    const dec = () => {
        decrement();
    };

    const addFive = () => {
        add(5);
    };

    return (
        <div className={classnames(className)}>
            <h1 data-testid="value-title">{value}</h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button data-testid="increment-btn" onClick={inc}>inc</button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button data-testid="decrement-btn" onClick={dec}>dec</button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button data-testid="decrement-btn" onClick={addFive}>add 5</button>
        </div>
    );
};
