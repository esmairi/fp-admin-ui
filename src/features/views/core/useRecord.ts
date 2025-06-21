import { fetchById } from '@fastadm/services/modelService.ts';
import { queryClient } from '@fastadm/shared/queryClient.ts';
import type { ModelInfo, RecordData } from '@fastadm/types/ModelInfo.ts';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../constants/queryKeys.ts';

export const useRecordLoader = (
  model: ModelInfo,
  recordId: string | number | null
) => {
  const {
    data: record,
    isFetching,
    error,
  } = useQuery<RecordData | undefined>({
    queryKey: queryKeys.currentRecord.detail(),
    queryFn: () => {
      if (!recordId) throw new Error('recordId is required');
      return fetchById(model.url, recordId);
    },
    staleTime: Infinity,
    enabled: !queryClient.getQueryData(queryKeys.currentRecord.detail()),
  });
  return { record, isFetching, error: error?.message };
};
