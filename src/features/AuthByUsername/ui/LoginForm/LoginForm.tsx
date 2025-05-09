import { classnames } from 'shared/lib/classnames';
import { FC, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import styles from './loginForm.module.scss';

export interface LoginFormProps {
    className?:string
}

export const LoginForm:FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    return (
        <div className={classnames(classnames(className, [styles.loginForm]))}>
            <Input autofocus type="text" placeholder={t('Введите username')} className={styles.input} />
            <Input autoFocus value={value} onChange={setValue} type="text" placeholder={t('Введите password')} className={styles.input} />
            <Button className={styles.btn}>{t('Войти')}</Button>
        </div>
    );
};
