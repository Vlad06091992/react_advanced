import { lazy, FC } from 'react';
import { AddCommentFormProps } from '../addCommentForm/AddCommentForm';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore

                res(import('./AddCommentForm'));
            }, 500);
        }),
);
