import blocos from './modules/blocos';
import deputados from './modules/deputados';
import frentes from './modules/frentes';
import orgaos from './modules/orgaos';
import votacoes from './modules/votacoes';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...frentes,
  ...orgaos,
  ...votacoes,
};

export default CamaraAPI;
