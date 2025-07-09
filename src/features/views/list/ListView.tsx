import {ListField} from "@fastadm/features/views/list/ListField.tsx";
import type {ModelData} from '@fastadm/types/ModelInfo.ts';
import { useBaseListView } from '../core/context/BaseListViewContext.tsx';
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import {Column, type ColumnBodyOptions} from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import '../../../assets/list/model_list.css';

export const ListView: React.FC = () => {
  const { records, view, onRowClick } = useBaseListView();

  const footer = `${records ? records.data.length : 0} items.`;
  const [rowClick, _] = useState(true);
  const [selectedRecord, setSelecteRecord] = useState<ModelData[]>([]);
  const fieldTemplate = (modelData: ModelData, options: ColumnBodyOptions) => {
      const field = view.fields.find(f => f.name === options.field);
      if(!field) return null;
      return (
          <ListField data={modelData} field={field}></ListField>
      )
  }
  return (
    <>
      <DataTable
        value={records.data}
        size={'small'}
        footer={footer}
        stripedRows={true}
        selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedRecord}
        onSelectionChange={(e: { value: ModelData[] }) =>
          setSelecteRecord(e.value)
        }
        dataKey="id"
        onRowClick={(e) => {
          if (e.data.id && onRowClick) {
            onRowClick(e.data.id);
          }
        }}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: '3rem' }}
        ></Column>
        {view.fields.map((field) => {
          return <Column field={field.name} header={field.title} body={fieldTemplate}></Column>;
        })}
      </DataTable>
      <Paginator
        first={records.page}
        rows={records.page_size}
        totalRecords={records.total}
        // onPageChange={(e) => {
        //     setFirst(e.first);
        //     setRows(e.rows);
        // }}
        className="mt-2"
      />
    </>
  );
};
