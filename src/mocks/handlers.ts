import { http, HttpResponse } from 'msw';
import { fakedData, getById } from './data.ts';

export const handlers = [
  http.get('/api/apps', () => {
    return HttpResponse.json(fakedData['apps']);
  }),
  http.get('/api/views/:model', (req) => {
    const { model } = req.params;
    // @ts-ignore
    return HttpResponse.json(fakedData['views'][model]);
  }),
  http.get('/api/:model', (req) => {
    const { model } = req.params;
    // @ts-ignore
    return HttpResponse.json(fakedData[model]);
  }),
  http.get('/api/:model/:id', (req) => {
    const { model, id } = req.params;
    // @ts-ignore
    return HttpResponse.json(getById(model, id));
  }),
];
