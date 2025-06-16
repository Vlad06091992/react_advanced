import { FC } from 'react';
import { classnames } from 'shared/lib/classnames';

export interface ArticleImageBlockComponentProps {
    className?:string
}

export const ArticleImageBlockComponent:FC<ArticleImageBlockComponentProps> = ({ className }) =>
// const dispatch = useAppDispatch();
// const value = useSelector<StateSchema>(getCounterValue);

    (
        <div className={classnames(className)}>
            ArticleImageBlockComponent
        </div>
    );
