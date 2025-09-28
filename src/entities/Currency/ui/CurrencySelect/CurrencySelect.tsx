// import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { ListBox } from '@/shared/ui/Popups/ListBox/ListBox';
import { Currency } from '../../model/consts/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            dropDownDirection="up-right"
            className={classnames(className)}
            label={t('Укажите валюту')}
            defaultValue={t('Укажите валюту')}
            items={options}
            value={value as string}
            onChange={onChangeHandler}
            disabled={!!readonly}
        />
    );
});
