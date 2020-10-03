import axios from 'axios';
import qs from 'qs';

import { validateOptions, validateFormat } from './utils';

const api = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});

export const get = async (
  endpoint,
  options,
  availableOrderFields = [],
  availableOptions = [],
) => {
  if (validateOptions(availableOrderFields, options, availableOptions)) {
    try {
      const { format } = options;
      delete options.format;

      const res = await api.get(`/${endpoint}?${qs.stringify(options)}`, {
        headers: {
          Accept: `application/${format}`,
        },
      });

      return res;
    } catch (err) {
      throw err;
    }
  } else {
    throw new Error('Invalid options passed!');
  }
};

export default api;
