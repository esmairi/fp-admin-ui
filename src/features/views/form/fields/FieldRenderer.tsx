import { CheckboxField } from '@fastadm/features/views/form/fields/spec/CheckboxField.tsx';
import { RadioField } from '@fastadm/features/views/form/fields/spec/RadioField.tsx';
import { SelectField } from '@fastadm/features/views/form/fields/spec/SelectField.tsx';
import { TextareaField } from '@fastadm/features/views/form/fields/spec/TextareaField.tsx';
import { TextField } from './spec/TextField.tsx';
import { NumberField } from './spec/NumberField.tsx';
import { DateField } from './spec/DateField.tsx';

const fieldComponents: any = {
  string: TextField,
  number: NumberField,
  date: DateField,
  checkbox: CheckboxField,
  radio: RadioField,
  select: SelectField,
  textarea: TextareaField,
};

export const FieldRenderer = ({ field, onChange }: any) => {
  const FieldComponent = fieldComponents[field.field_type];
  if (!FieldComponent) return <span>Unsupported field type</span>;
  const getFieldValue = (e: any): any => {
    if (field.field_type === 'checkbox') {
      return e.checked;
    }
    return e.target.value;
  };
  return (
    <>
      <td
        style={{ width: '2%', whiteSpace: 'nowrap', verticalAlign: 'center' }}
        className="px-2 py-1"
      >
        <label className="font-bold text-sm">{field.label}</label>
      </td>
      <td className="py-1">
        <FieldComponent
          field={field}
          onChange={(e: any) => onChange(field.name, getFieldValue(e))}
        />
      </td>
    </>
  );
};
