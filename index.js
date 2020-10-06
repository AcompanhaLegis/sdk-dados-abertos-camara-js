import blocos from './modules/blocos';
import deputados from './modules/deputados';
import frentes from './modules/frentes';
import orgaos from './modules/orgaos';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...frentes,
  ...orgaos,
};

export default CamaraAPI;
