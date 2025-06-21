import type { RecordData } from '@fastadm/types/ModelInfo.ts';
import { useBaseListView } from '../core/context/BaseListViewContext.tsx';
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import '../../../assets/list/model_list.css';

export const ListView: React.FC = () => {
  const { records, view, onRowClick } = useBaseListView();

  const footer = `${records ? records.length : 0} products.`;
  const [rowClick, _] = useState(true);
  const [selectedRecord, setSelecteRecord] = useState<RecordData[]>([]);
  return (
    <>
      <DataTable
        value={records}
        size={'small'}
        footer={footer}
        stripedRows={true}
        selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedRecord}
        onSelectionChange={(e: { value: RecordData[] }) =>
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
          return <Column field={field.name} header={field.label}></Column>;
        })}
      </DataTable>
      <Paginator
        first={1}
        rows={10}
        totalRecords={123}
        // onPageChange={(e) => {
        //     setFirst(e.first);
        //     setRows(e.rows);
        // }}
        rowsPerPageOptions={[5, 10, 20]}
        className="mt-2"
      />
    </>
  );
};
