import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

interface ProfilePageprops {
    classname?:string

}

const initialReducers:ReducerList = {
    profileData: profileReducer,
};

const ProfilePage = ({}:ProfilePageprops) => {
    const { t } = useTranslation('about');
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>{t('Страница профиля')}</div>
            );
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
