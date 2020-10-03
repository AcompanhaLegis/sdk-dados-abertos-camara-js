import { get } from './api';
import { validateOptions, validateFormat } from './utils';

const availableOrderFields = ['idLegislatura', 'id', 'nome'];
const availableOptions = ['id', 'idLegislatura'];

const defaultOptions = {
  pagina: 1,
  ordem: 'ASC',
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

  fullResponse = false,
) => {
  try {
    const res = await get(
      'blocos',
      options,
      availableOrderFields,
      availableOptions,
    );

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

/**
 * Wraps bloco/{id} endpoint.
 *
 * @param {Integer} id - ID of the bloco that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getBloco = async (id, format = 'json', fullResponse = false) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  try {
    const res = await get(`blocos/${id}`, { format });

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

export default {
  getBlocos,
  getBloco,
};
