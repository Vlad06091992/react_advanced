import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { Input } from '@/shared/ui/Input';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
// Тест обновленного линтера
// import { addCommentFormActions, addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const initialReducers = {
    addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = ({
    className,
    onSendComment,
}: AddCommentFormProps) => {
    const { t } = useTranslation('about');
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendCommentForm = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <HStack
                data-testid="AddCommentForm"
                align="center"
                justify="between"
                className={classnames(cls.addCommentForm, [className])}
            >
                <Input
                    data-testid="AddCommentForm.input"
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t('Введите текст комментария')}
                />
                <Button
                    data-testid="AddCommentForm.button"
                    onClick={onSendCommentForm}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
