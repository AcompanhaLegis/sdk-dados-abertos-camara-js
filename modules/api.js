import axios from 'axios';
import qs from 'qs';

import { validateOptions } from './utils';

const api = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});

export const get = async (
  endpoint,
  options,
  availableOrderFields = [],
  availableOptions = []
) => {
  if (validateOptions(availableOrderFields, options, availableOptions)) {
    const { format } = options;
    delete options.format; // eslint-disable-line no-param-reassign

    const res = await api.get(`/${endpoint}?${qs.stringify(options)}`, {
      headers: {
        Accept: `application/${format || 'json'}`,
      },
    });

    return res;
  }
  throw new Error('Invalid options passed!');
};

export default api;
