import React from 'react';

import classNames from '@/utils/classNames';
import { buttonSizes, buttonTypes } from './button-styles/button-styles.config';
import { ButtonProps } from '@/components/buttons/types/button-props.type';

type ButtonLinkProps = ButtonProps & {
  link: string;
};

const ButtonLink = ({ children, link, size, type, className }: ButtonLinkProps) => {
  return (
    <a
      className={classNames(
        'relative rounded-lg transition duration-std ease-in-out disabled:pointer-events-none before:absolute before:top-0 before:rounded-lg before:bottom-0 before:left-auto before:right-auto before:origin-center hover:before:z-0 hover:before:animate-bgFromCenter',
        buttonTypes[type],
        buttonSizes[size],
        className ?? ''
      )}
      href={link}
    >
      <div className={'relative h-full w-full flex justify-center items-center text-center text-sm'}>{children}</div>
    </a>
  );
};

export default ButtonLink;
