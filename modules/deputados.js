import { get } from './api';
import { validateOptions, validateFormat } from './utils';

const defaultOptions = {
  pagina: 1,
  ordem: 'ASC',
  format: 'json',
};

/**
 * Wraps the /deputados endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getDeputados = async (
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
  ];
  const availableOptions = [
    'id',
    'idLegislatura',
    'siglaUf',
    'siglaPartido',
    'siglaSexo',
    'dataInicio',
    'dataFim',
  ];

  try {
    const res = await get(
      'deputados',
      options,
      availableOrderFields,
      availableOptions
    );

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

/**
 * Wraps deputado/{id} endpoint.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getDeputado = async (
  id,
  format = 'json',
  fullResponse = false
) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  try {
    const res = await get(`deputados/${id}`, { format });

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

/**
 * Wraps deputado/{id}/despesas endpoint.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getDespesasByDeputado = async (
  id,
  options = {
    ...defaultOptions,
    ordenarPor: 'ano',
  },
  fullResponse = false
) => {
  const availableOrderFields = [
    'ano',
    'mes',
    'idLegislatura',
    'cnpjCpfFornecedor',
  ];

  const availableOptions = [...availableOrderFields];

  try {
    const res = await get(
      `deputados/${id}/despesas`,
      options,
      availableOrderFields,
      availableOptions
    );

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

/**
 * Wraps deputado/{id}/discursos endpoint.
 *
 * Note: This endpoint is quite not "orderable" other than by dataHoraInicio, maybe contact
 *       Camara dos Deputados to review it.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getDiscursosByDeputado = async (
  id,
  options = {
    ...defaultOptions,
    ordenarPor: 'dataHoraInicio',
  },
  fullResponse = false
) => {
  const availableOrderFields = ['dataHoraInicio'];
  const availableOptions = [...availableOrderFields];
  try {
    const res = await get(
      `deputados/${id}/discursos`,
      options,
      availableOrderFields,
      availableOptions
    );

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

/**
 * Wraps deputado/{id}/eventos endpoint.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getEventosByDeputado = async (
  id,
  options = {
    ...defaultOptions,
    ordenarPor: 'dataHoraInicio',
  },
  fullResponse = false
) => {
  const availableOrderFields = ['id', 'siglaOrgao', 'dataHoraInicio'];
  const availableOptions = ['dataInicio', 'dataFim'];
  try {
    const res = await get(
      `deputados/${id}/eventos`,
      options,
      availableOrderFields
    );

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

/**
 * Wraps deputado/{id}/frentes endpoint.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getFrentesByDeputado = async (
  id,
  format = 'json',
  fullResponse = false
) => {
  try {
    const res = await get(`deputados/${id}/frentes`, { format });

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

/**
 * Wraps deputado/{id}/orgaos endpoint.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getOrgaosByDeputado = async (
  id,
  options = {
    ...defaultOptions,
    ordenarPor: 'dataInicio',
  },
  fullResponse = false
) => {
  const availableOrderFields = [
    'idOrgao',
    'siglaOrgao',
    'nomeOrgao',
    'titulo',
    'dataInicio',
    'dataFim',
  ];
  const availableOptions = ['dataInicio', 'dataFim'];
  try {
    const res = await get(
      `deputados/${id}/orgaos`,
      options,
      availableOrderFields,
      availableOptions
    );

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

export default {
  getDeputados,
  getDeputado,
  getDespesasByDeputado,
  getDiscursosByDeputado,
  getEventosByDeputado,
  getFrentesByDeputado,
  getOrgaosByDeputado,
};
