import type { Field } from './Field.ts';

// export type ViewType = 'list' | 'form' | 'kanban';

export interface AdminView {
  name: string;
  label: string;
  model: string;
  type: string;
  is_main: boolean;
  fields: Field[];
  form_view: string;
}
