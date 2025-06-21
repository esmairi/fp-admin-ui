import BaseField from '@fastadm/features/views/form/fields/spec/BaseField.tsx';
import type { Field } from '@fastadm/types/Field.ts';
import { Dropdown } from 'primereact/dropdown';

interface SelectFieldProps {
  field: Field;
  mode: string;
  onChange: (e: any) => void;
}

export const SelectField = (props: SelectFieldProps) => {
  const value = props.field.value;
  const component =
    props.field.mode === 'view' ? (
      <span>
        {props.field.options?.find((opt: any) => opt.value === value)?.label ||
          value}
      </span>
    ) : (
      <Dropdown
        value={value}
        invalid={!!props.field.error}
        options={props.field.options}
        onChange={(e) => props.onChange(e)}
        className="w-full p-inputtext-sm "
      />
    );
  return <BaseField field={props.field}>{component}</BaseField>;
};
