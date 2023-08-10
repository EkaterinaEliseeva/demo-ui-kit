import React, { ReactNode } from 'react';
export type TTabProps = {
    id: number;
    children: ReactNode;
    action: (id: number) => void;
    className: string;
};
export default function Tab({ id, children, action, className }: TTabProps): React.JSX.Element;
