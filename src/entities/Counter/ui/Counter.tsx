import { classnames } from 'shared/lib/classnames';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from '../model/selectors/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export interface CounterProps {
    className?:string
}

export const Counter:FC<CounterProps> = ({ className }) => {
    const dispatch = useDispatch();
    const value = useSelector<StateSchema>(getCounterValue);

    const inc = () => {
        dispatch(counterActions.increment());
    };
    const dec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div className={classnames(classnames(className))}>
            <h1 data-testid="value-title">{value}</h1>
            <button data-testid="increment-btn" onClick={inc}>inc</button>
            <button data-testid="decrement-btn" onClick={dec}>dec</button>
        </div>
    );
};
