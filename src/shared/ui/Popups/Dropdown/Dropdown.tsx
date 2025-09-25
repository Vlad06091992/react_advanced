import { Menu } from '@headlessui/react';
import { classnames } from 'shared/lib/classnames';
import { Fragment, ReactNode } from 'react';
import { DropDownDirections } from 'shared/types';
import { AppLink } from '../../AppLink/AppLink';
import { popupPositions } from '../styles/utils';
import styles from './Dropdown.module.scss';
import popupStyles from '../styles/popup.module.scss';

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

    const modes = popupPositions(dropDownDirection);

    return (
        <Menu className={classnames(popupStyles.popup, [className])} as="div">
            <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classnames(styles.menu, [], modes)}>
                {items.map((item) => {
                    const content = ({ active }:{active:boolean}) => (
                        <button
                            onClick={item.onClick}
                            className={classnames(styles.item, [], { [popupStyles.active]: active })}
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
