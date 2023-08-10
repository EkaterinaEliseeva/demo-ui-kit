import React, { ReactElement } from 'react';
import classNames from '@/utils/classNames';

type TContainerProps = {
  children: ReactElement;
  className: string;
};

export default function Container({ children, className }: TContainerProps) {
  return <div className={classNames('w-full mx-auto', className)}>{children}</div>;
}
