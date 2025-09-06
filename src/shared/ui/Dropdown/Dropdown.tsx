import { Menu } from '@headlessui/react';
import { classnames } from 'shared/lib/classnames';
import { Fragment, ReactNode } from 'react';
import { DropDownDirections } from 'shared/types';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from './Dropdown.module.scss';

interface DropdownItem {
    content: string;
    href?:string
    disabled?:boolean
    onClick?:() => void
}

interface DropdownProps {
    dropDownDirection?:DropDownDirections
    className?: string;
    items: DropdownItem[];
    trigger:ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const {
        className, trigger, items, dropDownDirection = 'down-right'
    } = props;

    const mods = {
        [styles.upRight]: dropDownDirection === 'up-right',
        [styles.upLeft]: dropDownDirection === 'up-left',
        [styles.downRight]: dropDownDirection === 'down-right',
        [styles.downLeft]: dropDownDirection === 'down-left'
    };

    return (
        <Menu className={classnames(styles.dropdown, [className])} as="div">
            <Menu.Button className={styles.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classnames(styles.menu, [], mods)}>
                {items.map((item) => {
                    const content = ({ active }:{active:boolean}) => (
                        <button
                            onClick={item.onClick}
                            className={classnames(styles.item, [], { [styles.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
