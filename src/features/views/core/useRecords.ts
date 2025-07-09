import {AppConfig} from "@fastadm/services/ConfigLoader.ts";
import { fetchRecords } from '@fastadm/services/modelService.ts';
import type { ModelInfo, RecordData } from '@fastadm/types/ModelInfo.ts';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../constants/queryKeys.ts';
import { queryClient } from '../../../shared/queryClient.ts';

export const useRecordsLoader = (modelInfo: ModelInfo) => {
  const {
    data: records,
    isFetching,
    error,
  } = useQuery<RecordData>({
    queryKey: queryKeys.records.all(),
    queryFn: () => {
      const url = new URL(AppConfig.API_BASE_URL);
      return fetchRecords(`${url.origin}${modelInfo.url}`);
    },
    enabled: !queryClient.getQueryData(queryKeys.records.all()),
  });
  return { records, isFetching, error: error?.message };
};
