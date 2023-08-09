import React, { ReactElement } from 'react';

import classNames from '@/utils/classNames';

type TModalContentProps = {
  children: ReactElement;
  className: string;
};

export default function ModalContent({ children, className }: TModalContentProps) {
  return <div className={classNames('rounded-lg border-1 border-solid border-gray-300', className)}>{children}</div>;
}
