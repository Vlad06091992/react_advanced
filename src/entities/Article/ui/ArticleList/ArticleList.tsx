import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { ListRowProps, WindowScroller } from 'react-virtualized';
import List from 'react-virtualized/dist/commonjs/List';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { classnames } from '@/shared/lib/classnames';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article, ArticlesViewMode } from '../../model/types/Article';
import cls from './ArticleList.module.scss';
import { PAGE_ID } from '@/shared/const';

interface ArticleListProps {
    className?: string
    articles: any
    isLoading?: boolean
    virtualized?: boolean
    viewMode?: ArticlesViewMode
    target?: HTMLAttributeAnchorTarget
}

// eslint-disable-next-line react/no-array-index-key
const getSkeletons = (viewMode:ArticlesViewMode) => new Array(viewMode === 'BIG' ? 3 : 9).fill(0).map((_, index) => <ArticleListItemSkeleton className={cls.card} key={index} viewMode={viewMode} />);

export const ArticleList = ({
    className, isLoading, articles, viewMode = ArticlesViewMode.SMALL, target, virtualized = false,
}: ArticleListProps) => {
    const { t } = useTranslation('about');

    const isBig = viewMode === ArticlesViewMode.BIG;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    viewMode={viewMode}
                    target={target}
                    key={`str${i}`}
                    className={cls.card}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };
    if (!isLoading && !articles?.length) {
        return (
            <div className={classnames(className, [cls[viewMode]], {})}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        // @ts-ignore
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element || undefined}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    // @ts-ignore
                    ref={registerChild}
                    className={classnames(cls.ArticleList, [className, cls[viewMode]])}
                >
                    {virtualized
                        ? (
                            // @ts-ignore
                            <List
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRender}
                                width={width ? width - 80 : 700}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            articles.map((item:Article) => (
                                <ArticleListItem
                                    article={item}
                                    viewMode={viewMode}
                                    target={target}
                                    key={item.id}
                                    className={cls.card}
                                />
                            ))
                        )}
                    {isLoading && getSkeletons(viewMode)}
                </div>
            )}
        </WindowScroller>

    // <div className={classnames(className, [cls[viewMode]], {})}>
    //     {articles?.length > 0 ? articles.map(renderArticle) : null}
    //     {isLoading && getSkeletons(viewMode)}
    // </div>
    );
};
