import BaseField from '@fastadm/features/views/form/fields/spec/BaseField.tsx';
import type { Field } from '@fastadm/types/Field.ts';
import { Checkbox } from 'primereact/checkbox';

interface CheckboxFieldProps {
  field: Field;
  mode: string;
  onChange: (e: any) => void;
}

export const CheckboxField = (props: CheckboxFieldProps) => {
  const component = (
    <Checkbox
      inputId={props.field.name}
      invalid={!!props.field.error}
      checked={!!props.field.value}
      onChange={(e) => props.onChange(e)}
      className="w-full vertical-align-middle"
      disabled={props.field.mode === 'view'}
    />
  );
  return <BaseField field={props.field}>{component}</BaseField>;
};
