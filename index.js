import blocos from './modules/blocos';
import deputados from './modules/deputados';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...partidos
};

export default CamaraAPI;
