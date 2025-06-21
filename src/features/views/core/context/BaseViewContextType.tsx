import type { ModelInfo } from '@fastadm/types/ModelInfo.ts';
import type { AdminView } from '@fastadm/types/View.ts';

export type BaseViewContextType = {
  modelInfo: ModelInfo;
  view: AdminView;
  isFetching: boolean;
  error?: string | null;
};
