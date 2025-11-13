import { classnames } from '@/shared/lib/classnames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticlesViewMode } from '../../../entities/Article/model/types/Article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    viewMode: ArticlesViewMode;
    onViewClick: (viewMode: ArticlesViewMode) => void;
}

const viewModesTypes = [
    {
        viewMode: ArticlesViewMode.SMALL,
        icon: TiledIcon,
    },
    {
        viewMode: ArticlesViewMode.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = ({
    className,
    onViewClick,
    viewMode,
}: ArticleViewSelectorProps) => (
    <div className={classnames(cls.ArticlesViewSelector, [className])}>
        {viewModesTypes.map((v) => (
            <Button
                theme={ThemeButton.CLEAR}
                onClick={() => onViewClick(v.viewMode)}
            >
                <Icon
                    className={classnames(undefined, undefined, {
                        [cls.notSelected]: v.viewMode !== viewMode,
                    })}
                    Svg={v.icon}
                />
            </Button>
        ))}
    </div>
);

// t('Редактировать')
