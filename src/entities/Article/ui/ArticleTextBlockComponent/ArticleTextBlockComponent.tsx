import { memo } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/Article';
import cls from './ArticleTextBlockComponent.module.scss';

export interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
    const { title, paragraphs } = block;

    return (
        <div className={classnames(className)}>

            {title && <Text title={title} className={cls.title} />}
            {paragraphs.length && paragraphs.map((p, i) => (
                // eslint-disable-next-line
                <Text text={p} key={i} className={cls.paragraph} />
            ))}
        </div>
    );
});
