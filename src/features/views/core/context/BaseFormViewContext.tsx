import type {ModelData} from '@fastadm/types/ModelInfo.ts';
import type { BaseViewContextType } from './BaseViewContextType.tsx';
import React from 'react';

export interface FormLoaderOptions {
  recordId?: string | number | null;
}

export type BaseViewFormContextType = BaseViewContextType & {
  record: ModelData | undefined;
  loaderOptions: FormLoaderOptions | undefined;
  onRowClick?: (id: string) => void;
};

export const BaseFormViewContext =
  React.createContext<BaseViewFormContextType | null>(null);

export const useBaseFormView = () => {
  const ctx = React.useContext(BaseFormViewContext);
  if (!ctx) throw new Error('useBaseFormView must be used inside BaseFormView');
  return ctx;
};
