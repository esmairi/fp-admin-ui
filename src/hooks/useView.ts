import { AppConfig } from '@fastadm/services/ConfigLoader.ts';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys.ts';
import { queryClient } from '../shared/queryClient.ts';
import type { AdminView } from '../types/View.ts';

const fetchViews = async (modelName: string): Promise<AdminView[]> => {
  const apiUrl = AppConfig.API_BASE_URL;
  const url = `${apiUrl}/views/${modelName}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch model list: ${response.statusText}`);
  }
  return response.json();
};

export const useViews = (modelName: string) => {
  const {
    data: views,
    isFetching,
    error,
  } = useQuery<AdminView[]>({
    queryKey: queryKeys.views.all(),
    queryFn: async () => {
      const views = await fetchViews(modelName);
      views.forEach((view) => {
        queryClient.setQueryData(['views', 'detail', view.name], view);
      });
      return views;
    },
    enabled: !queryClient.getQueryData(queryKeys.views.all()),
    initialData: [],
  });

  return { views, isFetching, error };
};
