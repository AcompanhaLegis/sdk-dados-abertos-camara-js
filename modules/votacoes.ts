import { get } from './api';
import { validateFormat } from './utils';

const defaultOptions = {
  pagina: 1,
  ordem: 'ASC',
  format: 'json',
};

/**
 * Wraps the /votacoes endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getVotacoes = async (
  options = {
    ...defaultOptions,
    ordenarPor: 'data',
  },
  fullResponse = false
) => {
  const availableOrderFields = ['id', 'data'];
  const availableOptions = ['id', 'ordenarPor'];

  const res = await get(
    'votacoes',
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps votacao/{id} endpoint.
 *
 * @param {Integer} id - ID of the votação that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getVotacao = async (
  id: string,
  format = 'json',
  fullResponse = false
) => {
  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  const res = await get(`votacoes/${id}`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps votacoes/{id}/orientacoes endpoint.
 *
 * @param {Integer} id - ID of the votacao that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getVotacaoOrientacoes = async (
  id: string,
  format = 'json',
  fullResponse = false
) => {
  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  const res = await get(`votacoes/${id}/orientacoes`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps votacao/{id}/votos endpoint.
 *
 * @param {Integer} id - ID of the votacao that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getVotacaoVotos = async (
  id: string,
  format = 'json',
  fullResponse = false
) => {
  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  const res = await get(`votacoes/${id}/votos`, { format });

  return fullResponse ? res : res.data;
};

export default {
  getVotacoes,
  getVotacao,
  getVotacaoOrientacoes,
  getVotacaoVotos,
};
