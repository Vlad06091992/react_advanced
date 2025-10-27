import { FC, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';
import { Loader } from '@/shared/ui/Loader';

export interface LoginModalProps {
    className?:string
    isOpen?:boolean
    onClose?:()=>void
}

export const LoginModal:FC<LoginModalProps> = ({ isOpen, onClose }) => (
    <Modal onClose={onClose} isOpen={isOpen}>
        <Suspense fallback={<Loader />}>
            <LoginFormLazy onSuccess={onClose} />
        </Suspense>
    </Modal>
);
