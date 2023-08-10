import { ReactElement } from 'react';
import { TSelectOption } from './types/TSelectOption';
type SelectProps = {
    size: 'sm' | 'md';
    theme?: 'dark' | 'light';
    options: TSelectOption[];
    defaultValue: TSelectOption;
    onSelect: (value: TSelectOption) => void;
};
declare const Select: ({ options, onSelect, defaultValue, theme, size }: SelectProps) => ReactElement;
export default Select;
