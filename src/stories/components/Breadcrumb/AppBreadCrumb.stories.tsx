import AppBreadCrumb from '@fastadm/components/breascrumb/AppBreadcrumb.tsx';
import { queryKeys } from '@fastadm/constants/queryKeys.ts';
import type { Meta, StoryObj } from '@storybook/react';
import { storyBookQueryClient } from '../../../../.storybook/appConfig.ts';

const meta = {
  title: 'Example/Breadcrumb',
  component: AppBreadCrumb,
} satisfies Meta<typeof AppBreadCrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PatchedItems = {
  loaders: [
    () => {
      storyBookQueryClient.setQueryData(queryKeys.breadcrumb.all(), [
        { label: 'Components' },
        { label: 'Form' },
      ]);
    },
  ],
};
