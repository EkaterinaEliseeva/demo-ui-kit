import React, { ChangeEventHandler } from 'react';
import { checkboxSizesEnum } from './types/input-styles.enum';
type CheckboxProps = {
    onChange: ChangeEventHandler;
    theme?: 'dark' | 'light';
    id?: string;
    className?: string;
    size: checkboxSizesEnum;
    checked?: boolean;
    disabled?: boolean;
};
declare const Checkbox: ({ disabled, className, id, size, theme, checked, onChange }: CheckboxProps) => React.JSX.Element;
export default Checkbox;
