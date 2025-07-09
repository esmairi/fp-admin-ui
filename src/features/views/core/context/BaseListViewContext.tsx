import type { RecordData } from '@fastadm/types/ModelInfo.ts';
import type { BaseViewContextType } from './BaseViewContextType.tsx';
import React from 'react';

export interface ListLoaderOptions {
  filters?: any;
  pageSize?: number;
  pageOffset?: number;
  totalPages?: number;
}

export type BaseViewListContextType = BaseViewContextType & {
  records: RecordData;
  loaderOptions: ListLoaderOptions;
  onRowClick?: (id: string) => void;
};

export const BaseListViewContext =
  React.createContext<BaseViewListContextType | null>(null);

export const useBaseListView = () => {
  const ctx = React.useContext(BaseListViewContext);
  if (!ctx) throw new Error('useBaseListView must be used inside BaseListView');
  return ctx;
};
