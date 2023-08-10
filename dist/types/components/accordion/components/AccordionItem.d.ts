import React, { ReactNode } from 'react';
export type TAccordionItemProps = {
    children: ReactNode;
    title: ReactNode;
    details?: string;
    opened?: boolean;
};
export default function AccordionItem({ children, title, details, opened }: TAccordionItemProps): React.JSX.Element;
