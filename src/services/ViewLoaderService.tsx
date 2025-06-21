import React from 'react';
import { FormView } from '../features/views/form';

import KanbanView from '../features/views/kanban/KanbanView.tsx';
import { ListView } from '../features/views/list';

type ViewKind = 'single' | 'multi';

interface ViewEntry {
  kind: ViewKind;
  FC: React.FC<any>;
}

export class ViewLoaderService {
  private views: Record<string, ViewEntry> = {
    form: { kind: 'single', FC: FormView },
    list: { kind: 'multi', FC: ListView },
    kanban: { kind: 'multi', FC: KanbanView },
  };

  registerView(viewType: string, view: React.FC<any>, kind: ViewKind): void {
    if (!this.views.hasOwnProperty(viewType)) {
      this.views[viewType] = { kind, FC: view };
    }
  }

  isSingleViewer(viewType: string): boolean {
    if (!this.views.hasOwnProperty(viewType)) {
      throw new Error(`${viewType} is not registered as a view`);
    }
    return this.views[viewType].kind === 'single';
  }

  getViewComponent(viewType: string): React.FC<any> {
    if (!this.views.hasOwnProperty(viewType)) {
      throw new Error(`${viewType} is not registered as a view`);
    }
    return this.views[viewType].FC;
  }
}
export const ViewLoader = new ViewLoaderService();
