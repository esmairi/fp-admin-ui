import type { ModelInfo } from '@fastadm/types/ModelInfo.ts';
import type { AdminView } from '@fastadm/types/View.ts';
import { ProgressSpinner } from 'primereact/progressspinner';
import {
  BaseFormViewContext,
  type FormLoaderOptions,
} from './context/BaseFormViewContext.tsx';
import React from 'react';
import { useRecordLoader } from './useRecord.ts';

export interface ViewRecordProps {
  view: AdminView;
  modelInfo: ModelInfo;
  loaderOptions?: FormLoaderOptions;
  children: React.ReactNode;
}

export const BaseFormView: React.FC<ViewRecordProps> = ({
  view,
  modelInfo,
  loaderOptions,
  children,
}) => {
  const { record, isFetching, error } = useRecordLoader(
    modelInfo,
    loaderOptions?.recordId || null
  );
  if (!view || !modelInfo) return null;
  if (isFetching) return <ProgressSpinner />;
  if (loaderOptions?.recordId && !record) return null;

  return (
    <BaseFormViewContext.Provider
      value={{
        record,
        isFetching,
        error,
        modelInfo,
        view,
        loaderOptions,
      }}
    >
      {children}
    </BaseFormViewContext.Provider>
  );
};
