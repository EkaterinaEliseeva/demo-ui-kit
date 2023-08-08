import React from "react";

import DoesntMixWithIcon from "./icons/doesnt-mix-with.svg";
import OnlyMixesWithIcon from "./icons/only-mixes-with.svg";
import AlwaysPairsWithIcon from "./icons/always-pairs-with.svg";
import AppearsWithAtLeastOneIcon from "./icons/appears-with-at-least-one.svg";

export const RULES_DATA = [
  {
    value: "always_pairs_with",
    text: "Always pairs with",
    icon: <AlwaysPairsWithIcon />,
    color: "bg-blue-blue/5",
  },
  {
    value: "appears_with_at_least_one",
    text: "Appears with at least one",
    icon: <AppearsWithAtLeastOneIcon />,
    color: "bg-yellow-yellow/5",
  },
  {
    value: "doesnt_mix_with",
    text: "Does not mix with",
    icon: <DoesntMixWithIcon />,
    color: "bg-red-red/5",
  },
  {
    value: "only_mixes_with",
    text: "Only mixes with",
    icon: <OnlyMixesWithIcon />,
    color: "bg-green-green/5",
  },
  {
    value: "only_mixes_with",
    text: "Only mixes with",
    icon: <OnlyMixesWithIcon />,
    color: "bg-green-green/5",
    disabled: true,
  },
];
