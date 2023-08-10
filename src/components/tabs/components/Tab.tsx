import React, { ReactNode } from 'react';

import classNames from '@/utils/classNames';

export type TTabProps = {
  id: number;
  children: ReactNode;
  action: (id: number) => void;
  className: string;
};

export default function Tab({ id, children, action, className }: TTabProps) {
  const underlineClasses =
    'after:absolute after:bottom-1 after:left-0 after:h-px w-full after:transition-all after:duration-std';

  return (
    <button onClick={() => action(id)}>
      <h4 className={classNames('relative transition duration-std', underlineClasses, className)}>{children}</h4>
    </button>
  );
}
