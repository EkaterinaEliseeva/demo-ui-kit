import React, { ReactElement } from 'react';

import AccordionItem from '@/components/accordion/components/AccordionItem';

type TAccordionProps = {
  children: ReactElement[];
  className?: string;
};

function Accordion({ children, className }: TAccordionProps) {
  return <div className={`flex flex-col gap-2 w-full ${className}`}>{children}</div>;
}

Accordion.Item = AccordionItem;

export { Accordion } ;
