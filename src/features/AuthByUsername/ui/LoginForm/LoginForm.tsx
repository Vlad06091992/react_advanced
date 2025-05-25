import { classnames } from 'shared/lib/classnames';
import { memo, useCallback, useEffect } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './loginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername';

export interface LoginFormProps {
    className?:string
    onSuccess?:()=>void
}

// вынос за пределы компонента чтобы ссылка на объект была постоянной
const initialReducers:ReducerList = {
    loginData: loginReducer,
};

const LoginForm = memo(({ className,onSuccess }:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((val:string) => {
        dispatch(loginActions.setUsername(val));
    }, [dispatch]);

    const onChangePassword = useCallback((val:string) => {
        dispatch(loginActions.setPassword(val));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if(result.meta.requestStatus === 'fulfilled'){
            onSuccess?.()
        }

    }, [dispatch, username, password]);
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classnames(classnames(className, [styles.loginForm]))}>
                <Text title="Форма авторизации" />
                {error && <Text theme={TextTheme.ERROR} text={error} />}
                <Input onChange={onChangeUsername} autofocus value={username} type="text" placeholder={t('Введите username')} className={styles.input} />
                <Input onChange={onChangePassword} autoFocus value={password} type="text" placeholder={t('Введите password')} className={styles.input} />
                <Button disabled={isLoading} onClick={onLoginClick} theme={ThemeButton.OUTLINE} className={styles.btn}>{t('Войти')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
