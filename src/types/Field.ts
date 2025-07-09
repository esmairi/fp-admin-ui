export interface Field {
  name: string;
  title: string;
  value?: any;
  field_type:
    | 'text'
    | 'number'
    | 'date'
    | 'boolean'
    | 'textarea';
  widget:
      | 'checkbox'
      | 'radio'
      | 'select';
  mode?: 'view' | 'edit';
  help?: string;
  error?: { code: string; message: string };
  options?: { label: string; value: any }[];
}
