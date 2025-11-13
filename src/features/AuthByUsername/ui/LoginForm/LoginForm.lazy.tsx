import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((res) => {
            setTimeout(() => {
                // @ts-ignore

                res(import('./LoginForm'));
            }, 500);
        }),
);
