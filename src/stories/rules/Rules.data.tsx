import React from 'react';

import DoesntMixWithIcon from '@/resources/icons/rules/doesnt-mix-with.svg';
import OnlyMixesWithIcon from '@/resources/icons/rules/only-mixes-with.svg';
import AlwaysPairsWithIcon from '@/resources/icons/rules/always-pairs-with.svg';
import AppearsWithAtLeastOneIcon from '@/resources/icons/rules/appears-with-at-least-one.svg';

export const RULES_DATA = [
  {
    value: 'always_pairs_with',
    text: 'Always pairs with',
    icon: <AlwaysPairsWithIcon />,
    color: 'bg-blue-ui/5',
  },
  {
    value: 'appears_with_at_least_one',
    text: 'Appears with at least one',
    icon: <AppearsWithAtLeastOneIcon />,
    color: 'bg-yellow-ui/5',
  },
  {
    value: 'doesnt_mix_with',
    text: 'Does not mix with',
    icon: <DoesntMixWithIcon />,
    color: 'bg-red-ui/5',
  },
  {
    value: 'only_mixes_with',
    text: 'Only mixes with',
    icon: <OnlyMixesWithIcon />,
    color: 'bg-green-ui/5',
  },
  {
    value: 'only_mixes_with',
    text: 'Only mixes with',
    icon: <OnlyMixesWithIcon />,
    color: 'bg-green-ui/5',
    disabled: true,
  },
];
