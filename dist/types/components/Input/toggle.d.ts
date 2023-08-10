import React, { ChangeEventHandler } from 'react';
type CheckboxProps = {
    disabled?: boolean;
    onChange: ChangeEventHandler;
    theme?: 'dark' | 'light';
    id?: string;
    className?: string;
    checked?: boolean;
};
declare const Toggle: ({ disabled, theme, onChange, id, className, checked }: CheckboxProps) => React.JSX.Element;
export default Toggle;
