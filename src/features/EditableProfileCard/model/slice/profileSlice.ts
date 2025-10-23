import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';
import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';
import { ProfileSchema } from '../../model/types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: null,
    data: null,
    formData: null,
    validateError: []
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action:PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfile: (state, action:PayloadAction<Profile>) => {
            state.formData = { ...state.data, ...action.payload };
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.formData = state.data;
            state.validateError = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                // state.validateError = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
                state.readonly = true;
                state.validateError = [];
            })
            .addCase(updateProfileData.rejected, (state, action:PayloadAction<ValidateProfileError[] | undefined >) => {
                state.isLoading = false;
                state.validateError = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice;
