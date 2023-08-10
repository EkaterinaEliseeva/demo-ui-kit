import React, { ChangeEventHandler } from 'react';
import { checkboxSizesEnum } from './types/input-styles.enum';
type CheckboxProps = {
    disabled?: boolean;
    onChange: ChangeEventHandler;
    theme?: 'dark' | 'light';
    id?: string;
    className?: string;
    size: checkboxSizesEnum;
    checked?: boolean;
};
declare const Radio: ({ disabled, size, className, id, theme, checked, onChange }: CheckboxProps) => React.JSX.Element;
export default Radio;
