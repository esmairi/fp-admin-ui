import PageLayout from '@fastadm/components/layout/PageLayout.tsx';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/PageLayout',
  component: PageLayout,
} satisfies Meta<typeof PageLayout>;

const component = <h1> Hello! This a basic page Layout</h1>;
const pageHeader = <h6> custom Header</h6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'basic Page',
    children: component,
    breadcrumb: true,
    recentActions: true,
    pageHeader,
  },
};
