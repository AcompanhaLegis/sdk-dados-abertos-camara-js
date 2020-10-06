import { get } from './api';
import { validateOptions, validateFormat } from './utils';

const defaultOptions = {
  pagina: 1,
  ordem: 'ASC',
  format: 'json',
};

/**
 * Wraps the /orgaos endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getOrgaos = async (
  options = {
    ...defaultOptions,
    ordenarPor: 'sigla',
  },
  fullResponse = false
) => {
  const availableOrderFields = [
    'id',
    'sigla',
    'codTipoOrgao',
    'dataInicio',
    'dataFim',
    'pagina',
    'itens',
    'ordem',
    'ordenarPor',
  ];
  const availableOptions = [
    'id',
    'sigla',
    'codTipoOrgao',
    'dataInicio',
    'dataFim',
    'pagina',
    'itens',
    'ordem',
    'ordenarPor',
  ];

  try {
    const res = await get(
      'orgaos',
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
 * Wraps orgao/{id} endpoint.
 *
 * @param {Integer} id - ID of the orgao that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getOrgao = async (
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
    const res = await get(`orgaos/${id}`, { format });

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};


/**
 * Wraps orgaos/{id}/eventos endpoint.
 *
 * @param {Integer} id - ID of the orgao that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getOrgaoEventos = async (
    id, format = 'json', fullResponse = false) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  try {
    const res = await get(`orgaos/${id}/eventos`, { format });

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};



/**
 * Wraps orgao/{id}/membros endpoint.
 *
 * @param {Integer} id - ID of the orgao that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getOrgaoMembros = async (
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
    const res = await get(`orgaos/${id}/membros`, { format });

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

/**
 * Wraps orgaos/{id}/votacoes endpoint.
 *
 * @param {Integer} id - ID of the orgao that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getOrgaoVotacoes = async (id, format = 'json', fullResponse = false) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  try {
    const res = await get(`orgaos/${id}/votacoes`, { format });

    return fullResponse ? res : res.data;
  } catch (err) {
    throw err;
  }
};

export default {
  getOrgaos,
  getOrgao,
  getOrgaoEventos,
  getOrgaoMembros,
  getOrgaoVotacoes,
};
