import { get } from './api';

const defaultOptions = {
  format: 'json',
};

/**
 * Wraps the /referencias/deputados endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getRefDeputados = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/deputados', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/deputados/codSituacao endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefSituacaoDeputado = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/deputados/codSituacao', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/deputados/siglaUF endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefUfDeputados = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/deputados/siglaUF', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/eventos endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefEventos = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/eventos', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/eventos/codSituacaoEvento endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefSituacaoEvento = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/eventos/codSituacaoEvento', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/eventos/codTipoEvento endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefTipoEvento = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/eventos/codTipoEvento', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/orgaos endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefOrgaos = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/orgaos', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/orgaos/codSituacao endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefSituacaoOrgao = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/orgaos/codSituacao', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/orgaos/codTipoOrgao endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefTipoOrgao = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/orgaos/codTipoOrgao', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/proposicoes endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefProposicoes = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/proposicoes', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/proposicoes/codSituacao endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefSituacaoProposicao = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/proposicoes/codSituacao', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/proposicoes/codTema endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefTemaProposicao = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/proposicoes/codTema', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/proposicoes/codTipoAutor endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefTipoAutorProposicao = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/proposicoes/codTipoAutor', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/proposicoes/codTipoTramitacao endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefTipoTramitacao = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/proposicoes/codTipoTramitacao', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/tiposProposicao endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefTipoProposicao = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/tiposProposicao', options);

  return fullResponse ? res : res.data;
};

/**
 * Wraps /referencias/uf endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getRefUfs = async (
  options = {
    ...defaultOptions,
  },
  fullResponse = false
) => {
  const res = await get('referencias/uf', options);

  return fullResponse ? res : res.data;
};

export default {
  getRefDeputados,
  getRefSituacaoDeputado,
  getRefUfDeputados,
  getRefEventos,
  getRefSituacaoEvento,
  getRefTipoEvento,
  getRefOrgaos,
  getRefSituacaoOrgao,
  getRefTipoOrgao,
  getRefProposicoes,
  getRefSituacaoProposicao,
  getRefTemaProposicao,
  getRefTipoAutorProposicao,
  getRefTipoTramitacao,
  getRefTipoProposicao,
  getRefUfs,
};
