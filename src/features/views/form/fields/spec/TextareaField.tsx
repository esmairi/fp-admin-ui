import BaseField from '@fastadm/features/views/form/fields/spec/BaseField.tsx';
import type { Field } from '@fastadm/types/Field.ts';
import { InputTextarea } from 'primereact/inputtextarea';
import type { ChangeEvent } from 'react';

interface TextareaFieldProps {
  field: Field;
  mode: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextareaField = (props: TextareaFieldProps) => {
  const component =
    props.field.mode === 'view' ? (
      <div style={{ whiteSpace: 'pre-wrap' }}>{props.field.value}</div>
    ) : (
      <InputTextarea
        value={props.field.value}
        invalid={!!props.field.error}
        onChange={(e) => props.onChange(e)}
        rows={1}
        className="w-full p-inputtext-sm vertical-align-middle"
      />
    );
  return <BaseField field={props.field}>{component}</BaseField>;
};
