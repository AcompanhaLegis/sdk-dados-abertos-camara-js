import blocos from './modules/blocos';
import deputados from './modules/deputados';
import frentes from './modules/frentes';
import orgaos from './modules/orgaos';
import votacoes from './modules/votacoes';
import proposicoes from './modules/proposicoes';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...frentes,
  ...orgaos,
  ...votacoes,
  ...proposicoes,
};

export default CamaraAPI;
