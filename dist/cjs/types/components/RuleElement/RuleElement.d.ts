import React, { ReactNode } from "react";
export type TRulesElementProps = {
    text: string;
    color: string;
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};
declare const RuleElement: React.FC<TRulesElementProps>;
export default RuleElement;
