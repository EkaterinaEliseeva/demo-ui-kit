import React from 'react';
import { ButtonProps } from '@/components/buttons/types/button-props.type';
type ButtonLinkProps = ButtonProps & {
    link: string;
};
declare const ButtonLink: ({ children, link, size, type, className }: ButtonLinkProps) => React.JSX.Element;
export default ButtonLink;
