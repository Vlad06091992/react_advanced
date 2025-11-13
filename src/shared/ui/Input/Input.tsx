import React, {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classnames } from '@/shared/lib/classnames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

export interface InputProps extends HTMLInputProps {
    className?: string;
    autofocus?: boolean;
    value?: string | number;
    readonly?: boolean;
    type?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChange,
        placeholder,
        value,
        type = 'text',
        autofocus,
        readonly = false,
        ...restProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef.current?.focus();
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

    const mods = {
        [styles.readonly]: readonly,
    };

    const isCaretVisible = isFocused && !readonly;

    return (
        <div className={classnames(styles.inputWrapper, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>{`${placeholder}>`}</div>
            )}

            <div className={styles.caretWrapper}>
                <input
                    readOnly={readonly}
                    ref={inputRef}
                    // autoFocus={autofocus}
                    onBlur={onBlur}
                    type={type}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    value={value}
                    onChange={onChangeHandler}
                    {...restProps}
                    className={classnames(styles.input, [], mods)}
                />
                {isCaretVisible && (
                    <span
                        style={{ left: `${caretPosition * 7.5}px` }}
                        className={styles.caret}
                    />
                )}
            </div>
        </div>
    );
});
