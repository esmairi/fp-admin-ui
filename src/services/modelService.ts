import type { RecordData } from '@fastadm/types/ModelInfo.ts';

export const fetchRecords = async (url: string): Promise<RecordData[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch model list: ${response.statusText}`);
  }

  return await response.json();
};

export const fetchById = async (
  url: string,
  id: string | number
): Promise<RecordData> => {
  const response = await fetch(`${url}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch model list: ${response.statusText}`);
  }
  return await response.json();
};
