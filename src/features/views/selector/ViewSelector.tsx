// components/ViewSelector.tsx
import { ViewLoader } from '@fastadm/services/ViewLoaderService.tsx';
import type { ModelInfo } from '@fastadm/types/ModelInfo.ts';
import type { AdminView } from '@fastadm/types/View.ts';
import { BaseFormView } from '../core/BaseFormView.tsx';
import { BaseListView } from '../core/BaseListView.tsx';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

interface Props {
  views: AdminView[];
  model: ModelInfo;
}

const ViewSelector: React.FC<Props> = ({ views, model }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const viewId = searchParams.get('view_id');
  const recordId = searchParams.get('record_id');

  const [view, setView] = useState<AdminView>();

  useEffect(() => {
    if (viewId) {
      const view = views.find((v) => v.name === viewId);
      if (view) {
        setView(view);
      } else {
        throw new Error(`Unknown view: ${viewId}`);
      }
    } else {
      // Load first list view
      const view = views?.find((v) => v.type === 'list');
      if (view) {
        setView(view);
      }
    }
  }, [model, viewId, views]);
  if (!view) return null;
  const updateView = (view: AdminView) => {
    setView(view);
    setSearchParams({ view_id: view.name });
  };

  const ViewComponent = ViewLoader.getViewComponent(view.type);
  if (ViewLoader.isSingleViewer(view.type)) {
    return (
      <BaseFormView modelInfo={model} view={view} loaderOptions={{ recordId }}>
        <ViewComponent />
      </BaseFormView>
    );
  }
  return (
    <BaseListView modelInfo={model} view={view}>
      <div style={{ marginBottom: '1rem' }}>
        {views.map((v) => (
          <button onClick={() => updateView(v)} key={v.name}>
            {v.type}
          </button>
        ))}
      </div>
      <ViewComponent />
    </BaseListView>
  );
};

export default ViewSelector;
