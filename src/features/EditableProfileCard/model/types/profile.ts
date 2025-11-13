import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    data: Profile | null;
    formData: Profile | null;
    isLoading?: boolean;
    error?: null | string;
    readonly?: boolean;
    validateError?: ValidateProfileError[];
}
