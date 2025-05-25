import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard';

interface ProfilePageprops {
    classname?:string

}

const initialReducers:ReducerList = {
    profileData: profileReducer,
};

const ProfilePage = ({}:ProfilePageprops) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const { t } = useTranslation('about');
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>{t('Страница профиля')}</div>
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
