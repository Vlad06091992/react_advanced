import { lazy, FC } from 'react';
import { AddCommentFormProps } from 'features/AddCommentForm/ui/addCommentForm/AddCommentForm';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => new Promise((res, rej) => {
    setTimeout(() => {
        // @ts-ignore

        res(import('./AddCommentForm'));
    }, 500);
}));
