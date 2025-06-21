import type { Field } from '@fastadm/types/Field.ts';
import React from 'react';

interface BaseFieldProps {
  field: Field;
  children: React.ReactNode;
}

export default function BaseField(props: BaseFieldProps) {
  if (!props.field) return null;
  return (
    <>
      {props.children}
      {props.field.help && (
        <small id="username-help">{props.field.help}.</small>
      )}
      {props.field.error && (
        <small id="username-help">{props.field.error.message}.</small>
      )}
    </>
  );
}
