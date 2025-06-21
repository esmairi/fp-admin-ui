import { FieldRenderer } from '@fastadm/features/views/form/fields/FieldRenderer.tsx';
import type { Field } from '@fastadm/types/Field.ts';

interface FormBuilderProps {
  fields: Field[];
  onChange: (updated: Field[]) => void;
}

function batchReduce<T>(arr: T[], batchSize: number): T[][] {
  return arr.reduce((batches, _, i) => {
    if (i % batchSize === 0) batches.push([]);
    batches[batches.length - 1].push(arr[i]);
    return batches;
  }, [] as T[][]);
}

export const FormBuilder = ({ fields, onChange }: FormBuilderProps) => {
  const handleFieldChange = (name: string, value: any) => {
    const updated = fields.map((f) => (f.name === name ? { ...f, value } : f));
    onChange(updated);
  };
  const verticalGroups = 2;
  const fieldGroups = batchReduce(fields, verticalGroups);
  return (
    <table className="w-full">
      <tbody>
        {fieldGroups.map((group, groupIndex) => (
          <tr key={groupIndex} style={{ verticalAlign: 'baseline' }}>
            {group.map((field, fieldIndex) => (
              <FieldRenderer
                field={field}
                onChange={handleFieldChange}
                key={`${groupIndex}-${fieldIndex}`}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
