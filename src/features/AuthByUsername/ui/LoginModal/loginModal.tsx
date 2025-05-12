import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormLazy } from 'features/AuthByUsername/ui/LoginForm/LoginForm.lazy';
import { Loader } from 'shared/ui/Loader/Loader';

export interface LoginModalProps {
    className?:string
    isOpen?:boolean
    onClose?:()=>void
}

export const LoginModal:FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal onClose={onClose} isOpen={isOpen}>
        {/* <LoginForm /> */}

        <Suspense fallback={<Loader />}>
            <LoginFormLazy />
        </Suspense>
    </Modal>
);
