import blocos from './modules/blocos';
import deputados from './modules/deputados';
import frentes from './modules/frentes';
import legislaturas from './modules/legislaturas';
import orgaos from './modules/orgaos';
import votacoes from './modules/votacoes';
import proposicoes from './modules/proposicoes';
import referencias from './modules/referencias';
import eventos from './modules/eventos';
import partidos from './modules/partidos';

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
  ...referencias,
  ...partidos,
};

export default CamaraAPI;
