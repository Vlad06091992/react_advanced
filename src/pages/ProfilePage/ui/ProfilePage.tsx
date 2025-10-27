import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';
import { classnames } from '@/shared/lib/classnames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ProfilePageProps {
    className?: string

}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classnames(className)}>
            <VStack max justify="between" gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
