import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard';
import { useSelector } from 'react-redux';
import { Currency } from 'shared/const/common';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { classnames } from 'shared/lib/classnames';
import { VStack } from 'shared/ui/Stack';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

interface ProfilePageprops {
    className?: string

}

const initialReducers: ReducerList = {
    profileData: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageprops) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validationTranslates:Record<ValidateProfileError, string> = {
        [ValidateProfileError.INCORRECT_AGE]: t('Некоректный возраст'),
        [ValidateProfileError.NO_DATA]: t('Нет даных'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некоректная страна'),
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорретные данные пользователя'),
    };

    useEffect(() => {
        if (id) dispatch(fetchProfileData(id));
    }, [dispatch, id]);

    const onChangeFirstname = (value:string) => {
        dispatch(profileActions.updateProfile({ first: value }));
    };
    const onChangeLastname = (value:string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    };

    const onChangeAge = (value:string) => {
        if (!(Number.isNaN(+value))) {
            dispatch(profileActions.updateProfile({ age: +value.trim() }));
        }
    };

    const onChangeUsername = (value:string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    };

    const onChangeAvatar = (value:string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    };

    const onChangeCurrency = (value:Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    };

    const onChangeCountry = (value:Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    };

    const onChangeCity = (value:string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    };

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page className={classnames(className)}>
                <VStack max justify="between" gap="16">
                    <ProfilePageHeader readonly={readonly} />
                    {validateErrors.length > 0 && validateErrors!.map((error) => <Text key={error} title={validationTranslates[error]} theme={TextTheme.ERROR} />)}
                    <ProfileCard onChangeCountry={onChangeCountry} onChangeCurrency={onChangeCurrency} onChangeUsername={onChangeUsername} onChangeAvatar={onChangeAvatar} onChangeAge={onChangeAge} onChangeCity={onChangeCity} readonly={readonly} onChangeFirstname={onChangeFirstname} onChangeLastname={onChangeLastname} data={formData} isLoading={isLoading} error={error} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
