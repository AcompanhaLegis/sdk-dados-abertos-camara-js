import { get } from './api';

const availableOrderFields = ['idLegislatura'];
const availableOptions = ['idLegislatura'];

const defaultPagination = {
  pagina: 1,
};

/**
 * Wraps frentes endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getFrentes = async (
  options = defaultPagination,
  format = 'json',
  fullResponse = false
) => {
  const res = await get(
    'frentes',
    { ...options, format },
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps frentes getFrentesByParlamentar.
 *
 * @param {Integer} id - ID of the parlamentar that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getFrentesByParlamentar = async (
  id: string,
  format = 'json',
  fullResponse = false
) => {
  const res = await get(
    `frentes/${id}`,
    { format },
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps frentes getFrentesByParlamentar.
 *
 * @param {Integer} id - ID of the parlamentar that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getFrenteMembros = async (
  id: string,
  format = 'json',
  fullResponse = false
) => {
  const res = await get(
    `frentes/${id}/membros`,
    { format },
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

export default {
  getFrentes,
  getFrentesByParlamentar,
  getFrenteMembros,
};
