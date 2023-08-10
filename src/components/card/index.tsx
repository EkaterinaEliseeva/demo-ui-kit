import React, { ReactNode } from 'react';

import CardContent from '@/components/card/components/card-content/CardContent';
import CardAttributeContent from '@/components/card/components/card-content/CardAttributeContent';
import CardFooterWithLike from '@/components/card/components/card-footer/CardFooterWithLike';
import CardFooterWithRange from '@/components/card/components/card-footer/CardFooterWithRange';
import CardFooterWithDropdown from '@/components/card/components/card-footer/CardFooterWithDropdown';

type TCardComponentProps = {
  children: ReactNode;
};

const Card = ({ children }: TCardComponentProps) => {
  return <div className="flex flex-col h-min w-full border-1-ui border-gray border-solid">{children}</div>;
};

Card.Content = CardContent;
Card.AttributeContent = CardAttributeContent;
Card.FooterWithDropdown = CardFooterWithDropdown;
Card.FooterWithLike = CardFooterWithLike;
Card.FooterWithRange = CardFooterWithRange;

export default Card;
