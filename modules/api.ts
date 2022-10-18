import axios from 'axios';

import { validateOptions } from './utils';

const api = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});

export const get = async (
  endpoint: string,
  options: Record<string, any>,
  availableOrderFields: string[] = [],
  availableOptions: string[] = []
) => {
  if (validateOptions(availableOrderFields, options, availableOptions)) {
    const { format } = options;
    delete options.format; // eslint-disable-line no-param-reassign

    const res = await api.get(
      `/${endpoint}?${new URLSearchParams(options).toString()}`,
      {
        headers: {
          Accept: `application/${format}`,
        },
      }
    );

    return res;
  }
  throw new Error('Invalid options passed!');
};

export default api;
