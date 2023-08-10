import { ReactNode } from 'react';

export type TAccordionDataElement = {
  title: string;
  content: ReactNode;
  details?: string;
  opened?: boolean;
};
