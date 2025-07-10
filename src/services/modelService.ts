import {AppConfig} from "@fastadm/services/ConfigLoader.ts";
import type { RecordData } from '@fastadm/types/ModelInfo.ts';

export const fetchRecords = async (url: string): Promise<RecordData> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch model list: ${response.statusText}`);
  }

  return await response.json();
};
function getBaseUrl(inputUrl: string): string {
  const url = new URL(inputUrl);
  return `${url.protocol}//${url.host}`;
}
export const fetchById = async (
  url: string,
  id: string | number
): Promise<RecordData> => {
  const apiUrl = `${getBaseUrl(AppConfig.API_BASE_URL)}${url}/${id}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch model list: ${response.statusText}`);
  }
  return await response.json();
};
