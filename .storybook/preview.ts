import type { Preview } from "@storybook/react";

import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
