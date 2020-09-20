/**
 * Validates the passed format, small but useful.
 *
 * @param {String} format - String cointaing the format to be validated.
 *
 */
export const validateFormat = (format) =>
  format ? ['json', 'xml'].includes(format) : true;

/**
 * Validates different options on API requests.
 *
 * This method may be incremented with any generic validation required for the options sent to the API.
 *
 * @param {Array} availableOrderFields - Array containing the available fields names that you can send to order the data from the request.
 * @param {Object} options - Options object that will be validated.
 *
 */
export const validateOptions = (
  availableOrderFields,
  options,
  moreAttributes = []
) => {
  const defaultAttributes = [
    'pagina',
    'itens',
    'ordem',
    'ordenarPor',
    'format',
    ...moreAttributes,
  ];

  // Validates if all the keys are accepted by the API
  let isValid = Object.keys(options).every((key) =>
    defaultAttributes.includes(key)
  );

  isValid &= validateFormat(options?.format);

  // Validates if the ordernarPor is a valid field
  isValid &= options?.ordenarPor
    ? availableOrderFields.includes(options.ordenarPor)
    : true;

  return !!isValid;
};
