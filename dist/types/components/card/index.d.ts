import React, { ReactNode } from 'react';
import CardContent from '@/components/card/components/card-content/CardContent';
import CardAttributeContent from '@/components/card/components/card-content/CardAttributeContent';
import CardFooterWithLike from '@/components/card/components/card-footer/CardFooterWithLike';
import CardFooterWithRange from '@/components/card/components/card-footer/CardFooterWithRange';
import CardFooterWithDropdown from '@/components/card/components/card-footer/CardFooterWithDropdown';
type TCardComponentProps = {
    children: ReactNode;
};
declare const Card: {
    ({ children }: TCardComponentProps): React.JSX.Element;
    Content: typeof CardContent;
    AttributeContent: typeof CardAttributeContent;
    FooterWithDropdown: typeof CardFooterWithDropdown;
    FooterWithLike: typeof CardFooterWithLike;
    FooterWithRange: typeof CardFooterWithRange;
};
export default Card;
