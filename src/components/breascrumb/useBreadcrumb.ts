import { useQueryClient } from '@tanstack/react-query';
import type { MenuItem } from 'primereact/menuitem';
import { queryKeys } from '../../constants/queryKeys.ts';

export function useBreadcrumbs() {
  const queryClient = useQueryClient();
  const brKey = queryKeys.breadcrumb.all();

  const items = queryClient.getQueryData<MenuItem[]>(brKey) || [];

  const setBreadcrumbs = (newItems: MenuItem[]) => {
    queryClient.setQueryData(brKey, newItems);
  };
  return { items, setBreadcrumbs };
}
