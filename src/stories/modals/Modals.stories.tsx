import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Modal } from '@/components/modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isShown: true,
    setIsShown: () => {},
    children: (
      <Modal.Content className="bg-white p-40">
        <h2>Hi, I&apos;m a Modal Window!</h2>
      </Modal.Content>
    ),
  },
};
