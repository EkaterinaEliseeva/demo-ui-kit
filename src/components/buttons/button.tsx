import React, { MouseEventHandler } from 'react';

import classNames from '@/utils/classNames';
import { ButtonProps } from '@/components/buttons/types/button-props.type';
import { buttonSizes, buttonTypes } from '@/components/buttons/button-styles/button-styles.config';

type CommonButtonProps = ButtonProps & {
  disabled?: boolean;
  onClick: MouseEventHandler;
};

const Button = ({ children, className, disabled, onClick, type, size }: CommonButtonProps) => {
  return (
    <button
      className={classNames(
        'relative rounded-lg transition duration-std ease-in-out disabled:pointer-events-none before:absolute before:top-0 before:rounded-lg before:bottom-0 before:left-auto before:right-auto before:origin-center hover:before:z-0 hover:before:animate-bgFromCenter',
        buttonTypes[type],
        buttonSizes[size],
        className ?? ''
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="relative h-full w-full flex justify-center items-center text-center text-sm">{children}</div>
    </button>
  );
};

export default Button;
