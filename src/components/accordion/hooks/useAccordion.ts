import { MutableRefObject, useEffect, useState } from 'react';

export type useAccordionProps = {
  accordionContentRef: MutableRefObject<HTMLDivElement | null>;
  opened: boolean;
};

export default function useAccordion({ accordionContentRef, opened }: useAccordionProps) {
  const [contentHeight, setContentHeight] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  const contentHeightHandler = () => {
    if (!accordionContentRef.current || !accordionContentRef) {
      return;
    }

    setContentHeight(accordionContentRef.current?.scrollHeight ?? 0);
  };

  useEffect(() => {
    if (!accordionContentRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      contentHeightHandler();
    });

    resizeObserver.observe(accordionContentRef.current as Element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const toggleAccordion = () => {
    contentHeightHandler();
    setIsOpened(!isOpened);
  };

  return { contentHeight, isOpened, toggleAccordion };
}
