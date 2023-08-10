import React, { ReactNode, useRef } from 'react';

import useAccordion from '@/components/accordion/hooks/useAccordion';
import AccordionToggler from '@/components/accordion/components/AccordionToggler';

export type TAccordionItemProps = {
  children: ReactNode;
  title: ReactNode;
  details?: string;
  opened?: boolean;
};

export default function AccordionItem({ children, title, details, opened = false }: TAccordionItemProps) {
  const accordionContentRef = useRef<HTMLDivElement | null>(null);
  const { contentHeight, isOpened, toggleAccordion } = useAccordion({ accordionContentRef, opened });

  return (
    <div className="w-full border-1-ui border-solid border-gray-300 rounded-lg">
      <AccordionToggler isOpened={isOpened} toggleAccordion={toggleAccordion}>
        <h4 className="font-semibold">{title}</h4>
        {!!details && <div className="common-text text-gray-ui/60">{details}</div>}
      </AccordionToggler>
      <div
        ref={accordionContentRef}
        style={{
          maxHeight: isOpened ? `${contentHeight}px` : '0px',
        }}
        className="px-6 transition-all duration-std overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
}
