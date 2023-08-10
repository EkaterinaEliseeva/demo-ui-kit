import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
type InputProps = {
    placeholder?: string;
    disabled?: boolean;
    type: HTMLInputTypeAttribute;
    onChange: ChangeEventHandler;
    theme?: 'dark' | 'light';
    id?: string;
    className?: string;
};
declare const Input: ({ placeholder, id, className, theme, onChange, disabled, type }: InputProps) => React.JSX.Element;
export default Input;
