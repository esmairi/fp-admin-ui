import BaseField from '@fastadm/features/views/form/fields/spec/BaseField.tsx';
import type { Field } from '@fastadm/types/Field.ts';
import {
  RadioButton,
  type RadioButtonChangeEvent,
} from 'primereact/radiobutton';
import './css/radio_field.css';

interface RadioFieldProps {
  field: Field;
  mode: string;
  onChange: (e: RadioButtonChangeEvent) => void;
}

export const RadioField = (props: RadioFieldProps) => {
  const value = props.field.value;
  const options = props.field.options || [];
  const component =
    props.field.mode === 'view' ? (
      <span>
        {options.find((opt: any) => opt.value === value)?.label || value}
      </span>
    ) : (
      <div>
        {options.map((opt: any) => (
          <div key={opt.value}>
            <div key={opt.value} className="field-radiobutton">
              <RadioButton
                inputId={opt.value}
                invalid={!!props.field.error}
                value={opt.value}
                checked={value === opt.value}
                size={1}
                onChange={(e) => props.onChange(e)}
              />
              <label htmlFor={opt.value} className="mx-2 p-inputtext-sm">
                {opt.label}
              </label>
            </div>
          </div>
        ))}
      </div>
    );
  return <BaseField field={props.field}>{component}</BaseField>;
};
