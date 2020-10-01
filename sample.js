import CamaraAPI from './index';

const main = async () => {
  const blocos = await CamaraAPI.getBlocos();

  const bloco = await CamaraAPI.getBloco(blocos.dados[0].id);
  console.log('blocos', blocos);
  console.log('bloco', bloco);

  const deputados = await CamaraAPI.getDeputados();
  const deputadoId = deputados.dados[0].id;
  const deputado = await CamaraAPI.getDeputado(deputadoId);
  const despesas = await CamaraAPI.getDeputadoDespesas(deputadoId);
  const discursos = await CamaraAPI.getDeputadoDiscursos(deputadoId);
  const eventosDeputado = await CamaraAPI.getDeputadoEventos(deputadoId);
  const frentes = await CamaraAPI.getDeputadoFrentes(deputadoId);
  const orgaosDeputado = await CamaraAPI.getDeputadoOrgaos(deputadoId);
  const partidos = await CamaraAPI.getPartidos();
  const partidoId = partidos.dados[0].id;
  const partido = await CamaraAPI.getPartido(partidoId);
  const membrosPartido = await CamaraAPI.getMembrosbyPartido(partidoId);

  console.log('deputados', deputados);
  console.log('deputado', deputado);
  console.log('despesas', despesas);
  console.log('discursos', discursos);
  console.log('eventos deputado', eventosDeputado);
  console.log('frentes', frentes);
  console.log('partidos', partidos);
  console.log('partido', partido);
  console.log('membros partido', membrosPartido);

};

main();
