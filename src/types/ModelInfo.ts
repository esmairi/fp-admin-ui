export interface ModelInfo {
  name: string;
  label: string;
  url: string;
  default_view: string;
}
export interface ModelData{
  id: any;
  [key: string]: any;
}
export interface RecordData {
  data: ModelData[];
  total: number;
  page: number;
  page_size: number;
  has_next: boolean;
  has_prev: boolean;
}