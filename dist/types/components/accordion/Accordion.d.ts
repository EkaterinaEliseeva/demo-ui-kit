import React, { ReactElement } from 'react';
import AccordionItem from '@/components/accordion/components/AccordionItem';
type TAccordionProps = {
    children: ReactElement[];
    className?: string;
};
declare function Accordion({ children, className }: TAccordionProps): React.JSX.Element;
declare namespace Accordion {
    var Item: typeof AccordionItem;
}
export { Accordion };
