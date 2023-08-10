import React, { ReactNode } from 'react';

import Button from '@/components/buttons/button';
import LikeIcon from '@/resources/icons/like.svg';
import { buttonSizesEnum, buttonTypesEnum } from '@/components/buttons/types/button-styles.enum';

export type TCardFooterWithLikeProps = {
  name: string;
  offer: ReactNode;
  likeAction: () => void;
  isLiked: boolean;
  likesCount: number;
};

export default function CardFooterWithLike({ name, offer, likeAction, isLiked, likesCount }: TCardFooterWithLikeProps) {
  return (
    <div className="w-full p-4 h-[120px] flex flex-col justify-between">
      <div className="common-text font-semibold">{name}</div>
      <div className="flex justify-between">
        <div className="common-text font-semibold">{offer}</div>
        <Button onClick={likeAction} type={buttonTypesEnum.noBorder} size={buttonSizesEnum.xs}>
          <LikeIcon className={`${isLiked ? 'fill-gray' : ''} mr-2`} />
          <span className={'font-semibold leading-regular-ui'}>{likesCount}</span>
        </Button>
      </div>
    </div>
  );
}
