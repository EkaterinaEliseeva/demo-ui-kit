import React, { ReactNode } from 'react';
type TCardsGridProps = {
    children: ReactNode;
    cardsWidth: number;
    gap: number;
};
export default function CardsGrid({ children, gap, cardsWidth }: TCardsGridProps): React.JSX.Element;
export {};
