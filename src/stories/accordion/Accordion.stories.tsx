import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Accordion } from '@/components/accordion';
import { ACCORDION_DATA } from '@/stories/accordion/Accordion.data';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;



export const Primary: Story = {
  args: {
    children: ACCORDION_DATA.map((item, index: number) => {
      const { title, details, opened, content } = item;

      return (
        <Accordion.Item key={index} {...{ title, details, opened }}>
          <div className="pt-2 pb-4">{content}</div>
        </Accordion.Item>
      );
    }),
    className: 'max-w-[1220px] p-5 m-auto',
  },
};
