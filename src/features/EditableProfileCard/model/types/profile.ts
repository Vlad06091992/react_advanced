import { Profile, ValidateProfileError } from 'entities/Profile';

export interface ProfileSchema {
    data: Profile | null;
    formData: Profile | null;
    isLoading?: boolean;
    error?: null | string;
    readonly?: boolean;
    validateError?: ValidateProfileError[]
}
