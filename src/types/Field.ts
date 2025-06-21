export interface Field {
  name: string;
  label: string;
  value?: any;
  type:
    | 'text'
    | 'number'
    | 'date'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'textarea';
  mode?: 'view' | 'edit';
  help?: string;
  error?: { code: string; message: string };
  options?: { label: string; value: any }[];
}
