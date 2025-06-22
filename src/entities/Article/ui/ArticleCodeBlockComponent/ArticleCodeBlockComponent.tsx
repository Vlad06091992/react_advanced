import { memo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classnames } from 'shared/lib/classnames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/Article';

export interface ArticleCodeBlockComponentProps {
    className?:string
    block:ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, block } : ArticleCodeBlockComponentProps) => {
    const dispatch = useAppDispatch();
    // const value = useSelector<StateSchema>(getCounterValue);

    return (
        <div className={classnames(className)}>
            {block.code && <Code text={block.code} />}
        </div>
    );
});
