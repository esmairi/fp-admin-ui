import { ModelView } from '@fastadm/pages/model/ModelView.tsx';
import type { Meta, StoryObj } from '@storybook/react';

import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Page/Record List',
  component: ModelView,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { app: 'catalog', model: 'book' },
      },
      routing: { path: '/admin/:app/:model' },
    }),
  },
} satisfies Meta<typeof ModelView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // play: async ({ canvas, userEvent }) => {
  //   await expect(canvas.getByRole('dialog')).toBeInTheDocument();
  //   await expect(canvas.)
  // },
};
