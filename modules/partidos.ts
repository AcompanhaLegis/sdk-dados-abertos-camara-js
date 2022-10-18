import { get } from './api';
import { validateFormat } from './utils';

const defaultOptions = {
  pagina: 1,
  ordem: 'ASC',
  format: 'json',
};

/**
 * Wraps the /partidos endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getPartidos = async (
  options = {
    ...defaultOptions,
    ordenarPor: 'sigla',
  },
  fullResponse = false
) => {
  const availableOrderFields = ['id', 'sigla', 'nome', 'dataInicio', 'dataFim'];

  const availableOptions = ['sigla', 'dataInicio', 'dataFim', 'idLegislatura'];

  const res = await get(
    'partidos',
    options,
    availableOrderFields,
    availableOptions
  );
  return fullResponse ? res : res.data;
};

/**
 * Wraps partidos/{id} endpoint.
 *
 * @param {Integer} id - ID of the partido that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getPartido = async (
  id: string,
  format = 'json',
  fullResponse = false
) => {
  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  const res = await get(`partidos/${id}`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps partidos/{id}/membros endpoint.
 *
 * @param {Integer} id - ID of the partido that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getMembrosbyPartido = async (
  id: string,
  options = {
    ...defaultOptions,
    ordenarPor: 'nome',
  },
  fullResponse = false
) => {
  const availableOrderFields = [
    'idLegislatura',
    'id',
    'nome',
    'siglaUf',
    'siglaPartido',
    'email',
  ];

  const availableOptions = ['sigla', 'dataInicio', 'dataFim', 'idLegislatura'];

  const res = await get(
    `partidos/${id}/membros`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

export default {
  getPartidos,
  getPartido,
  getMembrosbyPartido,
};
