import RecentActions from '../RecentActions.tsx';
import React, { type ReactNode } from 'react';
import Header from './Header.tsx';
import AppBreadCrumb from '../breascrumb/AppBreadcrumb.tsx';

interface LayoutProps {
  children: ReactNode;
  pageHeader?: ReactNode;
  title?: string;
  breadcrumb?: boolean;
  recentActions?: boolean;
}

const PageLayout: React.FC<LayoutProps> = (props) => {
  return (
    <div className="min-h-screen font-sans text-sm">
      {/* Top Header */}
      <Header></Header>

      {props.breadcrumb ? <AppBreadCrumb></AppBreadCrumb> : null}

      {props.title ? (
        <h1 className="px-4 text-2xl mb-4 text-900">{props.title}</h1>
      ) : null}

      {props.pageHeader}
      <div className="p-4 grid">
        {/* Left column */}
        {props.children}

        {/*  Recent Actions */}

        {props.recentActions && (
          <div className="col-4">
            <RecentActions></RecentActions>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageLayout;
