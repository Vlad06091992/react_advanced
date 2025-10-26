import { memo } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/Article';
import cls from './ArticleImageBlockComponent.module.scss';

export interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    const { title, src } = block;

    return (
        <div className={classnames(className)}>
            <img alt={block.title} src={src} className={cls.img} />
            {title && <Text text={title} align={TextAlign.CENTER} />}
        </div>
    );
});
