import { AppConfig } from '@fastadm/services/ConfigLoader.ts';
import type { AppModel } from '@fastadm/types/AppModel.ts';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys.ts';
import { queryClient } from '../shared/queryClient.ts';

const fetchApps = async (): Promise<AppModel[]> => {
  const apiUrl = AppConfig.API_BASE_URL;
  const res = await fetch(`${apiUrl}/apps`);
  if (!res.ok) throw new Error('Failed to fetch models');
  return res.json();
};

export const useApps = () => {
  const {
    data: apps,
    isFetching,
    error,
  } = useQuery<AppModel[]>({
    queryKey: queryKeys.apps.all(),
    queryFn: async () => {
      const apps = await fetchApps();
      apps.forEach((app) => {
        queryClient.setQueryData(['apps', 'detail', app.name], app);
      });
      return apps;
    },
    enabled: !queryClient.getQueryData(queryKeys.apps.all()),
    initialData: [],
  });

  return { apps, isFetching, error };
};
