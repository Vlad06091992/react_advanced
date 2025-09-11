import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';
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

            const profileId = formData?.id;

            const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData);
            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
