import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <div>{t('Главная страница')}</div>
            <div>div</div>
            <HStack>
                <div>авылаолдываодыв</div>
                <ListBox
                    value="Выберите значение !!!!"
                    defaultValue="Значение"
                    items={[
                        { value: '1', content: '222' },
                        { value: '2', content: '33', disabled: true },
                        { value: '3', content: '242' },
                    ]}
                    onChange={(v:string) => {}}

                />
            </HStack>

            <div>div</div>
            <div>div</div>
            <div>div</div>
            <div>div</div>
            <div>div</div>
        </Page>
    );
};

export default MainPage;
