import { FC } from 'react';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classnames } from 'shared/lib/classnames';

export interface ArticleCodeBlockComponentProps {
    className?:string
}

export const ArticleCodeBlockComponent:FC<ArticleCodeBlockComponentProps> = ({ className }) =>
// const dispatch = useAppDispatch();
// const value = useSelector<StateSchema>(getCounterValue);

    (
        <div className={classnames(className)}>
            ArticleCodeBlockComponent
        </div>
    );
