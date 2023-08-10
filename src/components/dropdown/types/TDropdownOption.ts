import { ReactElement } from 'react';

import { TIconProps } from '@/components/icon/types/TIconProps';

export type TDropdownOption = {
  label: string;
  textColor?: string;
  callback?: () => void;
  options?: TDropdownOption[];
  icon?: (props: TIconProps) => ReactElement;
};
