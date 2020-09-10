import qs from 'qs';

import api from './api';
import { validateOptions } from './utils';

const availableOrderFields = ['idLegislatura', 'id', 'nome'];
const availableOptions = ['id', 'idLegislatura'];

const defaultOptions = {
  pagina: 1,
  order: 'ASC',
  ordenarPor: 'nome',
  format: 'json',
};

/**
 * Wraps the /blocos endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getBlocos = async (
  options = defaultOptions,
  fullResponse = false
) => {
  if (validateOptions(availableOrderFields, options)) {
    try {
      const { format } = options;
      delete options.format;

      const res = await api.get('/blocos?${qs.stringify(options)}', {
        headers: { Accept: `applicaiton/${format}` },
      });

      return fullResponse ? res : res.data;
    } catch (err) {
      throw err;
    }
  }
};
