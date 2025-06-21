import { Button } from 'primereact/button';

export default function FormViewHeader() {
  return (
    <div className="flex p-2" style={{ background: 'var(--bg-header-form)' }}>
      <div className="flex gap-2">
        <Button
          label="Save"
          icon="pi pi-check"
          iconPos="right"
          className="p-button-xs"
          style={{ backgroundColor: 'var(--bg-btn-save)' }}
        />
        <Button
          label="Cancel"
          icon="pi pi-times"
          iconPos="right"
          className="mx-4 p-button-xs"
          style={{ backgroundColor: 'var(--bg-btn-cancel)' }}
        />
      </div>
      <Button
        label="Delete"
        icon="pi pi-trash"
        iconPos="right"
        className="ml-auto p-button-xs"
        style={{ backgroundColor: 'var(--bg-btn-delete)' }}
      />
    </div>
  );
}
