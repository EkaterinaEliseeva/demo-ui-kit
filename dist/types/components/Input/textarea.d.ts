import { ChangeEventHandler, ReactElement } from 'react';
type TextareaProps = {
    onChange: ChangeEventHandler;
    placeholder?: string;
    disabled?: boolean;
    theme?: 'light' | 'dark';
};
declare const Textarea: ({ onChange, placeholder, disabled, theme }: TextareaProps) => ReactElement;
export default Textarea;
