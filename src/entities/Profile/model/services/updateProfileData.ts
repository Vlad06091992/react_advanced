import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';
import { getProfileFormData } from '../selectors/getProfileFormData/getProfileFormData';

export interface LoginByUsernameProps {
 data:Profile
}

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        try {
            const formData = getProfileFormData(getState());

            const response = await extra.api.put<Profile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('error'));
        }
    },
);
