import PageLayout from '@fastadm/components/layout/PageLayout.tsx';
import { useApps } from '@fastadm/hooks/useApps.ts';
import type { AppModel } from '@fastadm/types/AppModel.ts';
import type { ModelInfo } from '@fastadm/types/ModelInfo.ts';

function AppHeader(props: { label: string }) {
  return (
    <div
      className="p-2 text-white font-semibold text-sm uppercase"
      style={{ backgroundColor: 'var(--cyan-700)' }}
    >
      {props.label}
    </div>
  );
}

function AppRow(props: { model: ModelInfo; AppName: string }) {
  const getModelUrl = (
    app: string,
    model: string,
    defaultView: string
  ): string => {
    return `/admin/${app}/${model}?view_id=${defaultView}`;
  };

  return (
    <tr className="border-bottom-1 border-gray-300">
      <td
        className="py-2 pl-2  hover:underline cursor-pointer font-bold"
        style={{ color: 'var(--cyan-800)' }}
      >
        <a
          href={getModelUrl(
            props.AppName,
            props.model.name,
            props.model.default_view
          )}
        >
          {props.model.label}
        </a>
      </td>
      <td className="py-2 pr-2 text-right whitespace-nowrap">
        <a href="#" className="text-green-600 mr-3 hover:underline">
          <span className="mr-1">+</span>Add
        </a>
        <a href="#" className="text-yellow-700 hover:underline">
          <i className="pi pi-pencil mr-1"></i>Change
        </a>
      </td>
    </tr>
  );
}
function App(props: { app: AppModel }) {
  return (
    <div className="mb-4">
      <AppHeader label={props.app.label} />
      <table className="w-full border-collapse text-sm">
        <tbody>
          {props.app.models.map((model, j) => (
            <AppRow model={model} key={j} AppName={props.app.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AppsPage() {
  const { apps, isFetching, error } = useApps();
  if (isFetching) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error.message}</p>;
  return (
    <PageLayout title="Site administration" recentActions={true}>
      <div className="col-4">
        {apps.map((app, i) => (
          <App key={i} app={app} />
        ))}
      </div>
    </PageLayout>
  );
}
