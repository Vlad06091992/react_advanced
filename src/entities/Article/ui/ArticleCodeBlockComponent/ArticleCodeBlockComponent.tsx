import { memo } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { Code } from '@/shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/Article';

export interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => (
    <div className={classnames(className)}>
        {block.code && <Code text={block.code} />}
    </div>
));
