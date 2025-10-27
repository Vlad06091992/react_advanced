import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/consts/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            dropDownDirection="up-right"
            className={classnames(className)}
            label={t('Укажите страну')}
            defaultValue={t('Укажите страну')}
            items={options}
            value={value as string}
            onChange={onChangeHandler}
            disabled={!!readonly}
        />
    );
});
