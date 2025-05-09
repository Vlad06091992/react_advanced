import React, {
    ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classnames } from 'shared/lib/classnames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HTMLInputProps{
    className?:string
    autofocus?:boolean
    value?:string
    type? :string
    placeholder?:string
    onChange?:(value:string)=>void
}

export const Input = memo((props:InputProps) => {
    const {
        className, onChange, placeholder, value, children, type = 'text', autofocus, ...restProps
    } = props;

    const [isFocused, setIsFocused] = useState(null);
    const [caretPosition, setCaretPosition] = useState(null);
    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef.current.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classnames(styles.inputWrapper)}>
            {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}

            <div className={styles.caretWrapper}>
                <input
                    ref={inputRef}
                    // autoFocus={autofocus}
                    onBlur={onBlur}
                    type={type}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    value={value}
                    onChange={onChangeHandler}
                    {...restProps}
                    className={styles.input}
                />
                {isFocused && <span style={{ left: `${caretPosition * 6.5}px` }} className={styles.caret} />}
            </div>

        </div>

    );
});
