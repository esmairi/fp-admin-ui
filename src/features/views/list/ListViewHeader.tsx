import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import '../../../assets/list/list_view_header.css';
import { Button } from 'primereact/button';

const ListViewHeader: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState(null);
  const actions = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  return (
    <>
      <div className="flex mx-3">
        <div className="font-light text-2xl col-4 py-2">
          <span>Select Question to change</span>
        </div>
        <div className="flex col-8 flex-row-reverse ">
          <Button
            icon="pi pi-plus"
            size="small"
            className="py-2"
            style={{ backgroundColor: '#6b7280' }}
          >
            Add question
          </Button>
        </div>
      </div>
      <div className="flex align-items-center m-3">
        <label className="mx-2">Action:</label>
        <Dropdown
          value={selectedAction}
          onChange={(e) => setSelectedAction(e.value)}
          options={actions}
          optionLabel="name"
          placeholder="-----------"
          className="w-full md:w-14rem"
        />
        <Button
          size="small"
          className={'mx-2'}
          style={{ padding: '0.3rem', backgroundColor: '#6b7280' }}
        >
          Go
        </Button>
      </div>
    </>
  );
};

export default ListViewHeader;
