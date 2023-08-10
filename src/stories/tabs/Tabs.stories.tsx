import { StoryObj, Meta } from '@storybook/react';

import Tabs from '@/components/tabs';
import { TABS_DATA } from '@/stories/tabs/Tabs.data';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {
    tabsData: TABS_DATA,
  },
};
