export interface ModelInfo {
  name: string;
  label: string;
  url: string;
  default_view: string;
}

export interface RecordData {
  id: string | number;

  [key: string]: any;
}
