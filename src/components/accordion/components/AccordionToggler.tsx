import React, { ReactNode } from 'react';

import { IconAccordion } from '@/components/icon';
import classNames from '@/utils/classNames';

type TAccordionTogglerProps = {
  isOpened: boolean;
  children: ReactNode;
  toggleAccordion: () => void;
  className?: string;
};

export default function AccordionToggler({ isOpened, children, toggleAccordion, className }: TAccordionTogglerProps) {
  return (
    <button
      className={classNames('flex justify-between relative items-center w-full gap-x-4 px-6 py-5', className ?? '')}
      onClick={toggleAccordion}
    >
      <div className="flex items-center gap-2">{children}</div>
      <IconAccordion className={!isOpened ? 'before:rotate-90' : ''} />
    </button>
  );
}
