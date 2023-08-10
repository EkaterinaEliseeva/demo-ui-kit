import React, { ReactNode } from 'react';
export type TAccordionTogglerProps = {
    isOpened: boolean;
    children: ReactNode;
    toggleAccordion: () => void;
    className?: string;
};
export default function AccordionToggler({ isOpened, children, toggleAccordion, className }: TAccordionTogglerProps): React.JSX.Element;
