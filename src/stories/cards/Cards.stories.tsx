import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import Card from '@/components/card';
import { COLLECTION_ITEM, ITEM, ATTRIBUTE } from '@/stories/cards/Cards.data';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Attribute: Story = {
  args: {
    children: (
      <>
        <Card.AttributeContent>
          <img src={ATTRIBUTE.file} alt="" />
        </Card.AttributeContent>
        <Card.FooterWithRange name={ATTRIBUTE.name} details={ATTRIBUTE.details} rangeAction={() => () => {}} />
      </>
    ),
  },
};

export const TextAttribute: Story = {
  args: {
    children: (
      <>
        <Card.AttributeContent />
        <Card.FooterWithRange name={ATTRIBUTE.name} details={ATTRIBUTE.details} rangeAction={() => () => {}} />
      </>
    ),
  },
};

export const ItemPrototype: Story = {
  args: {
    children: (
      <>
        <Card.Content>
          <img src={ITEM.file} alt="" />
        </Card.Content>
        <Card.FooterWithDropdown name={ITEM.name} />
      </>
    ),
  },
};

export const CollectionItem: Story = {
  args: {
    children: (
      <>
        <Card.Content>
          <img src={COLLECTION_ITEM.file} alt="" />
        </Card.Content>
        <Card.FooterWithLike
          name={COLLECTION_ITEM.name}
          offer={COLLECTION_ITEM.offer}
          isLiked={false}
          likeAction={() => () => {}}
          likesCount={0}
        />
      </>
    ),
  },
};
