import React, { MouseEventHandler } from 'react';
import { ButtonProps } from '@/components/buttons/types/button-props.type';
type CommonButtonProps = ButtonProps & {
    disabled?: boolean;
    onClick: MouseEventHandler;
};
declare const Button: ({ children, className, disabled, onClick, type, size }: CommonButtonProps) => React.JSX.Element;
export default Button;
