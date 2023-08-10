import React, { ReactNode } from 'react';
export type TCardFooterWithLikeProps = {
    name: string;
    offer: ReactNode;
    likeAction: () => void;
    isLiked: boolean;
    likesCount: number;
};
export default function CardFooterWithLike({ name, offer, likeAction, isLiked, likesCount }: TCardFooterWithLikeProps): React.JSX.Element;
