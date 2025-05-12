import { classnames } from 'shared/lib/classnames';
import { memo, useCallback } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import styles from './loginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername';

export interface LoginFormProps {
    className?:string
}

export const LoginForm = memo(({ className }:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((val:string) => {
        dispatch(loginActions.setUsername(val));
    }, [dispatch]);

    const onChangePassword = useCallback((val:string) => {
        dispatch(loginActions.setPassword(val));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);
    return (
        <div className={classnames(classnames(className, [styles.loginForm]))}>
            <Text title="Форма авторизации" />
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Input onChange={onChangeUsername} autofocus value={username} type="text" placeholder={t('Введите username')} className={styles.input} />
            <Input onChange={onChangePassword} autoFocus value={password} type="text" placeholder={t('Введите password')} className={styles.input} />
            <Button disabled={isLoading} onClick={onLoginClick} theme={ThemeButton.OUTLINE} className={styles.btn}>{t('Войти')}</Button>
        </div>
    );
});
