import blocos from './modules/blocos';
import deputados from './modules/deputados';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
};

export default CamaraAPI;
