import blocos from './modules/blocos';
import deputados from './modules/deputados';
import frentes from './modules/frentes';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...frentes,
};

export default CamaraAPI;
