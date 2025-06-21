import BaseField from '@fastadm/features/views/form/fields/spec/BaseField.tsx';
import type { Field } from '@fastadm/types/Field.ts';
import { InputText } from 'primereact/inputtext';
import type { ChangeEvent } from 'react';

interface TextFieldProps {
  field: Field;
  mode: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = (props: TextFieldProps) => {
  const component =
    props.field.mode === 'view' ? (
      <span>{props.field.value}</span>
    ) : (
      <InputText
        value={props.field.value}
        invalid={!!props.field.error}
        onChange={(e) => props.onChange(e)}
        className="w-full p-inputtext-sm "
      />
    );
  return <BaseField field={props.field}>{component}</BaseField>;
};
