import blocos from './modules/blocos';
import deputados from './modules/deputados';
import frentes from './modules/frentes';
import orgaos from './modules/orgaos';
import votacoes from './modules/votacoes';
import proposicoes from './modules/proposicoes';
import legislaturas from './modules/legislaturas';
import eventos from './modules/eventos';

export { blocos };

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...eventos,
  ...frentes,
  ...legislaturas,
  ...orgaos,
  ...votacoes,
  ...proposicoes,
};

export default CamaraAPI;
