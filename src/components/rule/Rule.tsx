import React, { ReactNode } from 'react';
import classNames from '@/utils/classNames';

export type TRulesElementProps = {
  text: string;
  color: string;
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
};

export const Rule: React.FC<TRulesElementProps> = ({
  children,
  text,
  color,
  onClick,
  disabled,
}: TRulesElementProps) => {
  return (
    <div
      className={classNames(
        'flex items-center max-w-fit select-none rounded-lg px-3 py-2',
        disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : '',
        color
      )}
      onClick={onClick}
    >
      <div className="mr-2">{children}</div>
      <div className="pl-2.5 pr-3.5">{text}</div>
    </div>
  );
};
