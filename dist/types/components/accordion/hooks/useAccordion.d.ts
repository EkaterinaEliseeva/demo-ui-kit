import { MutableRefObject } from 'react';
export type useAccordionProps = {
    accordionContentRef: MutableRefObject<HTMLDivElement | null>;
    opened: boolean;
};
export default function useAccordion({ accordionContentRef, opened }: useAccordionProps): {
    contentHeight: number;
    isOpened: boolean;
    toggleAccordion: () => void;
};
