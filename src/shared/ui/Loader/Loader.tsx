import React from 'react';
import './Loader.scss';
import { classnames } from '@/shared/lib/classnames';

interface LoaderProps {
    className?:string
}

export const Loader = ({ className }:LoaderProps) => (
    <div className={classnames('lds-ring', [className], {})}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
