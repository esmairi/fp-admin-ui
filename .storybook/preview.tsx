import type { Preview } from '@storybook/react-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'primeflex/themes/primeone-light.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { handlers } from '../src/mocks/handlers';
import { storyBookQueryClient } from './appConfig';

initialize({
  onUnhandledRequest: 'bypass',
});

export const decorators = [
  (Story) => {
    return (
      <QueryClientProvider client={storyBookQueryClient}>
        <Story />
      </QueryClientProvider>
    );
  },
];
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: {
        apps: handlers[0],
        views: handlers[1],
        records: handlers[2],
        recordId: handlers[3],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  loaders: [mswLoader],
};

export default preview;
