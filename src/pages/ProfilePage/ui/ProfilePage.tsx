import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileData,
    getProfileError, getProfileFormData,
    getProfileIsLoading,
    getProfileReadOnly,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard';
import { useSelector } from 'react-redux';
import { Currency } from 'shared/const/common';
import { Country } from 'entities/Country';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

interface ProfilePageprops {
    classname?: string

}

const initialReducers: ReducerList = {
    profileData: profileReducer,
};

const ProfilePage = ({ classname }: ProfilePageprops) => {
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

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

    const { t } = useTranslation('about');
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ProfilePageHeader readonly={readonly} />
            <ProfileCard onChangeCountry={onChangeCountry} onChangeCurrency={onChangeCurrency} onChangeUsername={onChangeUsername} onChangeAvatar={onChangeAvatar} onChangeAge={onChangeAge} onChangeCity={onChangeCity} readonly={readonly} onChangeFirstname={onChangeFirstname} onChangeLastname={onChangeLastname} data={formData} isLoading={isLoading} error={error} />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
