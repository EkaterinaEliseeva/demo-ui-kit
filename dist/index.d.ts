import React, { ReactNode } from 'react';

type TRulesElementProps = {
    text: string;
    color: 'bg-blue-blue/5';
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};
declare const RuleElement: React.FC<TRulesElementProps>;

export { RuleElement, TRulesElementProps };
