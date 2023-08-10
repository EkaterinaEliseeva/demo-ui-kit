import { StoryObj, Meta } from '@storybook/react';

import { Rule }  from '@/components/rule';
import { RULES_DATA } from '@/stories/rules/Rules.data';

const meta: Meta<typeof Rule> = {
  component: Rule,
};

export default meta;

type Story = StoryObj<typeof Rule>;

export const AlwaysPairsWith: Story = {
  args: {
    text: RULES_DATA[0].text,
    color: RULES_DATA[0].color,
    onClick: () => {},
    disabled: false,
    children: RULES_DATA[0].icon,
  },
};
