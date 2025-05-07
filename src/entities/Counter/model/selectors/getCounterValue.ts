import { createSelector } from 'reselect';
import { CounterSchema } from 'entities/Counter';
import { getCounter } from './getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter:CounterSchema) => counter.value,
);
