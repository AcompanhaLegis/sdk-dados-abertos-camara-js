import { get } from './api';
import { validateFormat } from './utils';

const defaultOptions = {
  pagina: 1,
  ordem: 'ASC',
  format: 'json',
};

/**
 * Wraps the /eventos endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getEventos = async (
  options = {
    ...defaultOptions,
    ordenarPor: 'nome',
  },
  fullResponse = false
) => {
  const availableOrderFields = [
    'id',
    'dataHoraInicio',
    'dataHoraFim',
    'descricaoSituacao',
    'descricaoTipo',
    'titulo',
  ];
  const availableOptions = [
    'id',
    'codTipoEvento',
    'codSituacao',
    'codTipoOrgao',
    'idOrgao',
    'dataInicio',
    'dataFim',
    'horaInicio',
    'horaFim',
  ];

  const res = await get(
    'eventos',
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps /evento/{id} endpoint.
 *
 * @param {Integer} id - ID of the evento that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getEvento = async (id, format = 'json', fullResponse = false) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  const res = await get(`eventos/${id}`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps /evento/{id}/deputados endpoint.
 *
 * @param {Integer} id - ID of the evento that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getEventoDeputados = async (
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

  const res = await get(`eventos/${id}/deputados`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps /evento/{id}/orgaos endpoint.
 *
 * @param {Integer} id - ID of the evento that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getEventoOrgaos = async (
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

  const res = await get(`eventos/${id}/orgaos`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps /evento/{id}/pauta endpoint.
 *
 * @param {Integer} id - ID of the evento that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getEventoPauta = async (
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

  const res = await get(`eventos/${id}/pauta`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps /evento/{id}/votacoes endpoint.
 *
 * @param {Integer} id - ID of the evento that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getEventoVotacoes = async (
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

  const res = await get(`eventos/${id}/votacoes`, { format });

  return fullResponse ? res : res.data;
};

export default {
  getEventos,
  getEvento,
  getEventoDeputados,
  getEventoOrgaos,
  getEventoPauta,
  getEventoVotacoes,
};
