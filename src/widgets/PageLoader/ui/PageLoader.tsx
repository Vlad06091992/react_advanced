import { Loader } from '@/shared/ui/Loader';
import { classnames } from '@/shared/lib/classnames';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classnames(styles.pageLoader, [className])}>
        <Loader />
    </div>
);
