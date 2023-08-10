import React, { ReactNode, useEffect, useRef, useState } from 'react';

import useResize from '@/hooks/useResize';

export type TCardsGridProps = {
  children: ReactNode;
  cardsWidth: number;
  gap: number;
};

export default function CardsGrid({ children, gap, cardsWidth }: TCardsGridProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cardsAmount, setCardsAmount] = useState(1);

  const handleCardsAmount = () => {
    if (!containerRef || !containerRef.current) {
      return;
    }

    const count = containerRef.current?.clientWidth / (cardsWidth + gap / 2);

    setCardsAmount(Math.floor(count));
  };

  useResize(handleCardsAmount);

  useEffect(() => {
    handleCardsAmount();
  }, []);

  return (
    <div
      className="grid"
      ref={containerRef}
      style={{
        gridTemplateColumns: `repeat(${cardsAmount}, ${cardsWidth}px)`,
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
}
