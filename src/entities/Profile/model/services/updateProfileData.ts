import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from '../../model/services/validateProfile';
import { Profile, ValidateProfileError } from '../types/profile';
import { getProfileFormData } from '../selectors/getProfileFormData/getProfileFormData';

export interface LoginByUsernameProps {
 data:Profile
}

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        try {
            const formData = getProfileFormData(getState());
            let errors = validateProfileData(formData);
            if (formData) errors = validateProfileData(formData);
            if (errors.length) {
                return rejectWithValue(errors);
            }

            const response = await extra.api.put<Profile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
