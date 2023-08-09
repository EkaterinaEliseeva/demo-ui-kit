import React, { ReactNode } from 'react';

type TRulesElementProps = {
    text: string;
    color: string;
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};
declare const RuleElement: React.FC<TRulesElementProps>;

export { RuleElement, TRulesElementProps };
