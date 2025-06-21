import AppsPage from '@fastadm/pages/apps/AppsPage.tsx';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/Apps',
  component: AppsPage,
} satisfies Meta<typeof AppsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
