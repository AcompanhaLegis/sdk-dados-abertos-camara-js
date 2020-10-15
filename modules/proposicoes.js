import { get } from './api';

const defaultOptions = {
  pagina: 1,
  ordem: 'ASC',
  format: 'json',
};

/**
 * Wraps the /proposicoes endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getProposicoes = async (
  options = {
    ...defaultOptions,
    ordenarPor: 'id',
  },
  fullResponse = false
) => {
  const availableOrderFields = ['id', 'codTipo', 'siglaTipo', 'numero', 'ano'];
  const availableOptions = [
    'id',
    'ano',
    'dataApresentacaoInicio',
    'dataApresentacaoFim',
    'idAutor',
    'autor',
    'dataInicio ',
    'dataFim',
  ];

  const res = await get(
    'proposicoes',
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps the /proposicoes/{id} endpoint
 *
 * @param {Integer} id - ID of the proposição that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getProposicao = async (
  id,
  options = {
    format: 'json',
  },
  fullResponse = false
) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  const res = await get(`proposicoes/${id}`, options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps the /proposicoes/{id}/autores endpoint
 *
 * @param {Integer} id - ID of the proposição that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getProposicaoAutores = async (
  id,
  options = {
    format: 'json',
  },
  fullResponse = false
) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  const res = await get(`proposicoes/${id}/autores`, options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps the /proposicoes/{id}/relacionadas endpoint
 *
 * @param {Integer} id - ID of the proposição that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getProposicaoRelacionadas = async (
  id,
  options = {
    format: 'json',
  },
  fullResponse = false
) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  const res = await get(`proposicoes/${id}/relacionadas`, options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps the /proposicoes/{id}/temas endpoint
 *
 * @param {Integer} id - ID of the proposição that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getProposicaoTemas = async (
  id,
  options = {
    format: 'json',
  },
  fullResponse = false
) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  const res = await get(`proposicoes/${id}/temas`, options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps the /proposicoes/{id}/tramitacoes endpoint
 *
 * @param {Integer} id - ID of the proposição that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getProposicaoTramitacoes = async (
  id,
  options = {
    format: 'json',
  },
  fullResponse = false
) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  const availableOrderFields = [];
  const availableOptions = ['dataInicio', 'dataFim'];

  const res = await get(
    `proposicoes/${id}/tramitacoes`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps the /proposicoes/{id}/votacoes endpoint
 *
 * @param {Integer} id - ID of the proposição that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getProposicaoVotacoes = async (
  id,
  options = {
    format: 'json',
    ordenarPor: 'dataHoraRegistro',
  },
  fullResponse = false
) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  const availableOrderFields = ['id', 'dataHoraRegistro'];
  const availableOptions = ['ordem', 'ordenarPor'];

  const res = await get(
    `proposicoes/${id}/votacoes`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};
export default {
  getProposicoes,
  getProposicao,
  getProposicaoAutores,
  getProposicaoRelacionadas,
  getProposicaoTemas,
  getProposicaoTramitacoes,
  getProposicaoVotacoes,
};
