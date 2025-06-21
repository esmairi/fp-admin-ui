import BaseField from '@fastadm/features/views/form/fields/spec/BaseField.tsx';
import type { Field } from '@fastadm/types/Field.ts';
import { Calendar } from 'primereact/calendar';
interface DateFieldProps {
  field: Field;
  mode: string;
  onChange: (e: any) => void;
}

export const DateField = (props: DateFieldProps) => {
  const component =
    props.field.mode === 'view' ? (
      <span>{props.field.value?.toLocaleDateString?.() ?? ''}</span>
    ) : (
      <Calendar
        value={props.field.value}
        invalid={!!props.field.error}
        onChange={(e) => props.onChange(e)}
        showIcon
        className="w-full"
      />
    );
  return <BaseField field={props.field}>{component}</BaseField>;
};
