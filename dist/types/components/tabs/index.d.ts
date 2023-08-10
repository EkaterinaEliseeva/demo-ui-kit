import React from 'react';
import { TTabDataElement } from '@/components/tabs/types/TTabDataElement';
export type TTabsProps = {
    tabsData: TTabDataElement[];
};
export default function Tabs({ tabsData }: TTabsProps): React.JSX.Element;
