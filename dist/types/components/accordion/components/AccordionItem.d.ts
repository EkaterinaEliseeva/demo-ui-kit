import React, { ReactNode } from 'react';
type TAccordionItemProps = {
    children: ReactNode;
    title: ReactNode;
    details?: string;
    opened?: boolean;
};
export default function AccordionItem({ children, title, details, opened }: TAccordionItemProps): React.JSX.Element;
export {};
