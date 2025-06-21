import Header from '@fastadm/components/layout/Header.tsx';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
