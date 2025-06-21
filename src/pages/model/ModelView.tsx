import { useBreadcrumbs } from '@fastadm/components/breascrumb/useBreadcrumb.ts';
import PageLayout from '@fastadm/components/layout/PageLayout.tsx';
import { useApps } from '@fastadm/hooks/useApps.ts';
import ViewsLoader from '../../features/views/loader/ViewsLoader.tsx';
import { useParams } from 'react-router';

export const ModelView = () => {
  const items = [{ label: 'Components' }, { label: 'Form' }];
  const { setBreadcrumbs } = useBreadcrumbs();
  setBreadcrumbs(items);
  const { app, model } = useParams<{ app: string; model: string }>();
  const { apps } = useApps();

  if (!model || !apps || !app) return null;

  return (
    <PageLayout recentActions={false} breadcrumb={true}>
      <div className="col-12 md:col-12">
        <ViewsLoader model={model} app={app}></ViewsLoader>
      </div>
    </PageLayout>
  );
};
