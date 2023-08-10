import React, { ReactElement } from 'react';

import classNames from '@/utils/classNames';

export type TModalContentProps = {
  children: ReactElement;
  className: string;
};

export default function ModalContent({ children, className }: TModalContentProps) {
  return <div className={classNames('rounded-lg border-1-ui border-solid border-gray-ui-300', className)}>{children}</div>;
}
