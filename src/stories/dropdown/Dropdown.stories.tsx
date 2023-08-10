import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import Dropdown from '@/components/dropdown';
import { DROPDOWN_DATA } from '@/stories/dropdown/Dropdown.data';
import { TDropdownOption } from '@/components/dropdown/types/TDropdownOption';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Top: Story = {
  args: {
    theme: 'light',
    menuPosition: 'top',
    children: <Dropdown.Section options={DROPDOWN_DATA as TDropdownOption[]} />,
  },
};

export const Bottom: Story = {
  args: {
    theme: 'light',
    menuPosition: 'bottom',
    children: <Dropdown.Section options={DROPDOWN_DATA as TDropdownOption[]} />,
  },
};

export const ThemeDark: Story = {
  args: {
    theme: 'dark',
    menuPosition: 'bottom',
    children: <Dropdown.Section options={DROPDOWN_DATA as TDropdownOption[]} />,
  },
};
