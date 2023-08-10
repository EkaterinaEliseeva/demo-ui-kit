import React, { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react';
type FormProps = {
    position: 'left' | 'right';
    label: ReactNode;
    placeholder?: string;
    theme?: 'dark' | 'light';
    type: HTMLInputTypeAttribute;
    disabled?: boolean;
    className?: string;
    id?: string;
    onChange: ChangeEventHandler;
};
declare const InputLabel: ({ position, label, id, className, onChange, disabled, type, theme, placeholder, }: FormProps) => React.JSX.Element;
export default InputLabel;
