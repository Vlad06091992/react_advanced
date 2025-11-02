import { Story } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// TODO разобраться почему не работает исключение для линтера -> ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
// eslint-disable-next-line
import {loginReducer} from '@/features/AuthByUsername';
// eslint-disable-next-line
import {profileReducer} from '@/features/EditableProfileCard';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line
import {articleDetailsReducer} from '@/entities/Article';
// eslint-disable-next-line
import {addCommentFormReducer} from '@/features/AddCommentForm';
// eslint-disable-next-line
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';

const defaultAsyncReducers: Partial<ReducerList> = {
    loginData: loginReducer,
    profileData: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

// eslint-disable-next-line no-undef
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
