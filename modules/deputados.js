import { get } from './api';
import { validateFormat } from './utils';

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

  const res = await get(
    'deputados',
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
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

  const res = await get(`deputados/${id}`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps deputado/{id}/despesas endpoint.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getDeputadoDespesas = async (
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

  const res = await get(
    `deputados/${id}/despesas`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
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
export const getDeputadoDiscursos = async (
  id,
  options = {
    ...defaultOptions,
    ordenarPor: 'dataHoraInicio',
  },
  fullResponse = false
) => {
  const availableOrderFields = ['dataHoraInicio'];
  const availableOptions = [...availableOrderFields];
  const res = await get(
    `deputados/${id}/discursos`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps deputado/{id}/eventos endpoint.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getDeputadoEventos = async (
  id,
  options = {
    ...defaultOptions,
    ordenarPor: 'dataHoraInicio',
  },
  fullResponse = false
) => {
  const availableOrderFields = ['id', 'siglaOrgao', 'dataHoraInicio'];
  const availableOptions = ['dataInicio', 'dataFim'];
  const res = await get(
    `deputados/${id}/eventos`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps deputado/{id}/frentes endpoint.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getDeputadoFrentes = async (
  id,
  format = 'json',
  fullResponse = false
) => {
  const res = await get(`deputados/${id}/frentes`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps deputado/{id}/orgaos endpoint.
 *
 * @param {Integer} id - ID of the deputado that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getDeputadoOrgaos = async (
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
  const res = await get(
    `deputados/${id}/orgaos`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

export default {
  getDeputados,
  getDeputado,
  getDeputadoDespesas,
  getDeputadoDiscursos,
  getDeputadoEventos,
  getDeputadoFrentes,
  getDeputadoOrgaos,
};
