import { Fragment } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classnames } from 'shared/lib/classnames';
import { HStack } from 'shared/ui/Stack';
import { DropDownDirections } from 'shared/types';
import { Button } from '../Button/Button';
import styles from './ListBox.module.scss';

interface ListBoxItem {
    value:string
    content:string
    disabled?:boolean
}

interface ListBoxProps {
    items:ListBoxItem[]
    className?:string
    label?:string
    value:string
    defaultValue:string
    disabled?:boolean
    onChange:(value:string) => void
    dropDownDirection?:DropDownDirections

}

export function ListBox(props: ListBoxProps) {
    const {
        items, className, onChange, value, defaultValue, disabled, dropDownDirection = 'down-right', label
    } = props;

    const mods = {
        [styles.upRight]: dropDownDirection === 'up-right',
        [styles.upLeft]: dropDownDirection === 'up-left',
        [styles.downRight]: dropDownDirection === 'down-right',
        [styles.downLeft]: dropDownDirection === 'down-left'
    };
    return (
        <HStack gap="4">
            {label && (
                <span>
                    {`${label} >`}
                    {' '}
                </span>
            )}
            <HListbox
                disabled={disabled}
                as="div"
                className={classnames(className, [styles.listBox])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button as={Fragment}>
                    <Button disabled={disabled}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options className={classnames(styles.options, [], mods)}>
                    {items.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classnames(styles.item, [], {
                                        [styles.active]: active,
                                        [styles.disabled]: item.disabled
                                    })}
                                    key={item.value}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>

    );
}
