import type { ModelInfo } from '@fastadm/types/ModelInfo.ts';
import type { AdminView } from '@fastadm/types/View.ts';
import { ProgressSpinner } from 'primereact/progressspinner';
import React from 'react';
import { useNavigate } from 'react-router';
import { useRecordsLoader } from './useRecords.ts';
import {
  BaseListViewContext,
  type ListLoaderOptions,
} from './context/BaseListViewContext.tsx';

export interface ViewRecordProps {
  view: AdminView;
  modelInfo: ModelInfo;
  loaderOptions?: ListLoaderOptions;
  children: React.ReactNode;
}

export const BaseListView: React.FC<ViewRecordProps> = ({
  view,
  modelInfo,
  loaderOptions,
  children,
}) => {

    const { records, isFetching, error } = useRecordsLoader(modelInfo);

    const navigate = useNavigate();
  if (!records) return [];
  if (!loaderOptions) {
    loaderOptions = { pageSize: 25 };
  }

  const onRowClick = (id: string) => {
    const params = new URLSearchParams();
    params.set('view_id', view.form_view);
    params.set('record_id', id);
    navigate({ search: params.toString() }, { replace: true });
  };
  if (isFetching) return <ProgressSpinner />;
  return (
    <BaseListViewContext.Provider
      value={{
        records,
        modelInfo,
        isFetching,
        error,
        view,
        onRowClick,
        loaderOptions,
      }}
    >
      {children}
    </BaseListViewContext.Provider>
  );
};
