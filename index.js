import blocos from './modules/blocos';
import deputados from './modules/deputados';
import frentes from './modules/frentes';
import legislaturas from './modules/legislaturas';
import orgaos from './modules/orgaos';
import votacoes from './modules/votacoes';
import proposicoes from './modules/proposicoes';
import referencias from './modules/referencias';
import eventos from './modules/eventos';

export {
  blocos,
  deputados,
  eventos,
  frentes,
  legislaturas,
  orgaos,
  votacoes,
  proposicoes,
  referencias,
};

const CamaraAPI = {
  ...blocos,
  ...deputados,
  ...eventos,
  ...frentes,
  ...legislaturas,
  ...orgaos,
  ...votacoes,
  ...proposicoes,
  ...referencias,
};

export default CamaraAPI;
