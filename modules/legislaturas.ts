import { get } from './api';

const defaultOptions = {
  pagina: 1,
  ordem: 'ASC',
  format: 'json',
};

/**
 * Wraps the /legislaturas endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getLegislaturas = async (
  options = {
    ...defaultOptions,
    ordenarPor: 'id',
  },
  fullResponse = false
) => {
  const availableOrderFields = ['id'];
  const availableOptions = ['id', 'data'];

  const res = await get(
    'legislaturas',
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps legislaturas/{id} endpoint.
 *
 * @param {Integer} id - ID of the legislatura that will be requested.
 * @param {String} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getLegislatura = async (
  id: string,
  options = {
    format: 'json',
  },
  fullResponse = false
) => {
  const res = await get(`legislaturas/${id}`, options);

  return fullResponse ? res : res.data;
};
/**
 * Wraps legislaturas/{id}/mesa endpoint.
 *
 * @param {Integer} id - ID of the legislatura that will be requested.
 * @param {String} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getLegislaturaMesa = async (
  id: string,
  options = {
    format: 'json',
  },
  fullResponse = false
) => {
  const availableOptions = ['dataInicio', 'dataFim'];

  const res = await get(`legislaturas/${id}/mesa`, options, availableOptions);

  return fullResponse ? res : res.data;
};

export default {
  getLegislaturas,
  getLegislatura,
  getLegislaturaMesa,
};
