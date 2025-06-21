import BaseField from '@fastadm/features/views/form/fields/spec/BaseField.tsx';
import type { Field } from '@fastadm/types/Field.ts';
import {
  InputNumber,
  type InputNumberValueChangeEvent,
} from 'primereact/inputnumber';

interface NumberFieldProps {
  field: Field;
  mode: string;
  onChange: (e: InputNumberValueChangeEvent) => void;
}

export const NumberField = (props: NumberFieldProps) => {
  const component =
    props.field.mode === 'view' ? (
      <span>{props.field.value}</span>
    ) : (
      <InputNumber
        invalid={!!props.field.error}
        value={props.field.value}
        onValueChange={(e) => props.onChange(e)}
        className="w-full"
      />
    );
  return <BaseField field={props.field}>{component}</BaseField>;
};
