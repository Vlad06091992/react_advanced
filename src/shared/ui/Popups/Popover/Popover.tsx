import { Popover as HPopover } from '@headlessui/react';
import { classnames } from '@/shared/lib/classnames';
import { ReactNode } from 'react';
import { DropDownDirections } from '@/shared/types';
import { popupPositions } from '../styles/utils';
import styles from './Popover.module.scss';
import popupStyles from '../styles/popup.module.scss';

interface PopoverProps {
    className?: string
    trigger:ReactNode;
    children:ReactNode;
    dropDownDirection?:DropDownDirections
}

export function Popover(props:PopoverProps) {
    const {
        className, dropDownDirection = 'down-right', trigger, children
    } = props;

    const modes = popupPositions(dropDownDirection);

    return (
        <HPopover className={classnames(popupStyles.popup, [className])}>
            <HPopover.Button className={popupStyles.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel className={classnames(styles.panel, [], modes)}>{children}</HPopover.Panel>
        </HPopover>
    );
}
