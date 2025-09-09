import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { classnames, Mods } from 'shared/lib/classnames';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'shared/const/common';
import { CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?:Profile| null
    isLoading?:boolean|null
    readonly?:boolean
    error?:string|null
    onChangeFirstname?:(v:string)=> void
    onChangeLastname?:(v:string)=> void
    onChangeAge?:(v:string)=> void
    onChangeCity?:(v:string)=> void
    onChangeAvatar?:(v:string)=> void
    onChangeUsername?:(v:string)=> void
    onChangeCurrency?:(v:Currency)=> void
    onChangeCountry?:(v:Country)=> void
}

export const ProfileCard = ({
    className, data, isLoading, error, readonly, onChangeLastname, onChangeFirstname, onChangeCity, onChangeAge, onChangeUsername, onChangeAvatar, onChangeCountry, onChangeCurrency
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack className={classnames(cls.ProfileCard, [className], {})}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack className={classnames(cls.ProfileCard, [className, cls.error], {})}>
                <Text theme={TextTheme.ERROR} text={t('Попробуйте обновить страницу')} title={t('Произошла ошибка при загрузке профиля')} />
            </HStack>
        );
    }

    const mods:Mods = {
        [cls.editing]: !readonly
    };
    const currencyOptions = [
        { value: Currency.RUB, content: 'рубли' },
        { value: Currency.EUR, content: 'вро' },
        { value: Currency.USD, content: 'доллары' }
    ];
    return (
        <VStack gap="16" max className={classnames(cls.ProfileCard, [className], mods)}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </div>
            )}
            <Input
                onChange={onChangeFirstname}
                readonly={readonly}
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
            />
            <Input
                onChange={onChangeLastname}
                readonly={readonly}
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
            />
            <Input
                onChange={onChangeAge}
                readonly={readonly}
                value={data?.age}
                placeholder={t('Возраст')}
                className={cls.input}
            />
            <Input
                onChange={onChangeCity}
                readonly={readonly}
                value={data?.city}
                placeholder={t('Город')}
                className={cls.input}
            />
            <Input
                onChange={onChangeUsername}
                readonly={readonly}
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
            />
            <Input
                onChange={onChangeAvatar}
                readonly={readonly}
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
