import { DropDownDirections } from '../../../types/index';
import styles from './popup.module.scss';

export const popupPositions = (dropDownDirection:DropDownDirections):Record<string, boolean> => ({
    [styles.upRight]: dropDownDirection === 'up-right',
    [styles.upLeft]: dropDownDirection === 'up-left',
    [styles.downRight]: dropDownDirection === 'down-right',
    [styles.downLeft]: dropDownDirection === 'down-left'
});
