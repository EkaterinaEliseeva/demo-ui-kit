import React, { ReactNode } from 'react';
export type TRulesElementProps = {
    text: string;
    color: string;
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};
export default function Rule({ children, text, color, onClick, disabled }: TRulesElementProps): React.JSX.Element;
