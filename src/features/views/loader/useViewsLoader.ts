import { useViews } from '@fastadm/hooks/useView.ts';
import type { AppModel } from '@fastadm/types/AppModel.ts';
import { queryKeys } from '../../../constants/queryKeys.ts';
import { queryClient } from '../../../shared/queryClient.ts';

export const useViewsLoader = (props: { app: string; model: string }) => {
  const { views, isFetching, error } = useViews(props.model);
  const appInfo = queryClient.getQueryData<AppModel>(
    queryKeys.apps.detail(props.app)
  );
  const modelInfo = appInfo?.models.find((m) => m.name === props.model);

  return { views, isFetching, error, modelInfo };
};
