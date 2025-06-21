import { QueryClient } from '@tanstack/react-query';

export const storyBookQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // avoid retry loop in Storybook
      refetchOnWindowFocus: false, // avoid automatic refetches
    },
  },
});
