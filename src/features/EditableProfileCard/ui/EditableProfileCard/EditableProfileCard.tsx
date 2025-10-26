import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classnames } from '@/shared/lib/classnames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ProfileCard } from '@/entities/Profile';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfilePageHeader } from '../../ui/EditableProfilePageHeader/EditableProfilePageHeader';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData';
import { ValidateProfileError } from '../../model/consts/consts';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const initialReducers: ReducerList = {
    profileData: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validationTranslates: Record<string, string> = {
        [ValidateProfileError.INCORRECT_AGE]: 'Некорректный возраст',
        [ValidateProfileError.NO_DATA]: 'Нет данных',
        [ValidateProfileError.INCORRECT_COUNTRY]: 'Некорректная страна',
        [ValidateProfileError.SERVER_ERROR]: 'Ошибка сервера',
        [ValidateProfileError.INCORRECT_USER_DATA]: 'Некорректные данные пользователя',
    };

    useEffect(() => {
        if (id) dispatch(fetchProfileData(id));
        // eslint-disable-next-line
    }, []);

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
            <VStack gap="8" max className={classnames('', [className], {})}>
                <EditableProfilePageHeader readonly={readonly} />
                {validateErrors.length > 0 && validateErrors.map((error) => (
                    <Text
                        key={error}
                        title={validationTranslates[error]}
                        theme={TextTheme.ERROR}
                    />
                ))}
                <ProfileCard
                    onChangeCountry={onChangeCountry}
                    onChangeCurrency={onChangeCurrency}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                />
            </VStack>
        </DynamicModuleLoader>

    );
});
