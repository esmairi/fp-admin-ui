import { useBreadcrumbs } from '@fastadm/components/breascrumb/useBreadcrumb.ts';
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

const AppBreadCrumb: React.FC = () => {
  const home = { icon: 'pi pi-home', url: '/admin' };
  const { items } = useBreadcrumbs();
  return <BreadCrumb model={items} className={'text-xs py-2'} home={home} />;
};

export default AppBreadCrumb;

export const ZZ = () => {
  return (
    <p>
      <h1>Hello</h1>
    </p>
  );
};
