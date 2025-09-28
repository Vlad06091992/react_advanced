import { useTranslation } from 'react-i18next';
import { classnames } from '@/shared/lib/classnames';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?:string
    onSendComment:(text:string)=>void

}

const initialReducers = {
    addCommentForm: addCommentFormReducer
};

export const AddCommentForm = ({ className, onSendComment }:AddCommentFormProps) => {
    const { t, i18n } = useTranslation('about');
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback((value:string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendCommentForm = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [dispatch, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <HStack align="center" justify="between" className={classnames(cls.addCommentForm, [className])}>
                <Input className={cls.input} value={text} onChange={onCommentTextChange} placeholder={t('Введите текст комментария')} />
                <Button onClick={onSendCommentForm} theme={ThemeButton.OUTLINE}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
