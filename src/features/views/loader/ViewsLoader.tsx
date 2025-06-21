import { useViewsLoader } from './useViewsLoader.ts';
import React from 'react';
import ViewSelector from '../selector/ViewSelector.tsx';

// model
interface Props {
  app: string;
  model: string;
}

const ViewsLoader: React.FC<Props> = ({ app, model }) => {
  const { views, modelInfo } = useViewsLoader({ app, model });

  if (!views || !model || !modelInfo) return null;

  return <ViewSelector views={views} model={modelInfo}></ViewSelector>;
};

export default ViewsLoader;
