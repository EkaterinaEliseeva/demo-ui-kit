import React, { MouseEventHandler, ChangeEventHandler, FC, ReactNode } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: React.FC<ButtonProps>;

interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const Input: FC<InputProps>;

type TRulesElementProps = {
    text: string;
    color: string;
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};
declare const RuleElement: React.FC<TRulesElementProps>;

export { Button, Input, RuleElement, TRulesElementProps };
