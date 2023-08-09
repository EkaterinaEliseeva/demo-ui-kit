import React, { ReactNode } from 'react';
export type TRulesElementProps = {
    text: string;
    color: 'bg-blue-blue/5';
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};
export declare const RuleElement: React.FC<TRulesElementProps>;
