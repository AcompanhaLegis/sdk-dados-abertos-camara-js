import blocos from './modules/blocos';
import deputados from './modules/deputados';
import frentes from './modules/frentes';
import orgaos from './modules/orgaos';
import votacoes from './modules/votacoes';
import referencias from './modules/referencias';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...frentes,
  ...orgaos,
  ...votacoes,
  ...referencias,
};

export default CamaraAPI;
