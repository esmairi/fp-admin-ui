import { FormBuilder } from '@fastadm/features/views/form/FormBuilder.tsx';
import FormViewHeader from '@fastadm/features/views/form/FormViewHeader.tsx';
import { SidebarForm } from '@fastadm/features/views/form/SidebarForm.tsx';
import type { Field } from '@fastadm/types/Field.ts';
import { Card } from 'primereact/card';
import { useBaseFormView } from '../core/context/BaseFormViewContext.tsx';
import React, { useEffect, useState } from 'react';

export const FormView: React.FC = () => {
  const { record, view } = useBaseFormView();
  const [formData, setFormData] = useState<Field[]>([]);
  useEffect(() => {
    if (record && view) {
      const patchedFormData = view.fields.map((field) => ({
        ...field,
        value: record[field.name],
      }));

      setFormData(patchedFormData);
    }
  }, [record, view]);

  if (!formData.length || !view) return null;
  return (
    <>
      <FormViewHeader></FormViewHeader>
      <Card className="w-full h-full">
        <div className="grid">
          <div className="col-8">
            <FormBuilder fields={formData} onChange={setFormData} />
          </div>
          <div className="col-4">
            <SidebarForm></SidebarForm>
          </div>
        </div>
      </Card>
    </>
  );
};
