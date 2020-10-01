import { get } from './api';

const availableOrderFields = ['idLegislatura'];
const availableOptions = ['idLegislatura'];

const defaultOptions = {
    pagina: 1,
};

/**
 * Wraps frentes endpoint.
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getFrentes= async (
    options = defaultOptions,
    format = 'json',
    fullResponse = false
    ) => {
    try {
        const res = await get(
            'frentes',
            {...options, format },
            availableOrderFields,
            availableOptions
        );

        return fullResponse ? res : res.data;
    } catch (err) {
        throw err;
    }
}

export default {
    getFrentes
}