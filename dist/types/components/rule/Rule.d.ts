import React, { ReactNode } from 'react';
export type TRulesElementProps = {
    text: string;
    color: string;
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};
export declare const Rule: React.FC<TRulesElementProps>;
