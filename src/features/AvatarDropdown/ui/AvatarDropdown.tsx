import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions
} from '@/entities/User';
import styles from './AvatarDropdown.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/paths';

export const AvatarDropdown = () => {
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useAppDispatch();
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            dropDownDirection="down-left"
            items={[
                {
                    content: 'Выйти',
                    onClick: onLogout
                },
                {
                    content: 'Профиль',
                    href: getRouteProfile(authData.id),
                },
                ...(isAdminPanelAvailable ? [{
                    content: 'Админка',
                    href: getRouteAdminPanel(),
                }] : [])
            ]}
            trigger={
                <Avatar fallbackInverted size={30} className={styles.avatar} src={authData?.avatar} />
            }
        />
    );
};
