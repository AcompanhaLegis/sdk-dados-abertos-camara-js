import CamaraAPI from './index';

const main = async () => {
  const blocos = await CamaraAPI.getBlocos();
  const bloco = await CamaraAPI.getBloco(blocos.dados[0].id);
  const deputados = await CamaraAPI.getDeputados();
  const deputadoId = deputados.dados[0].id;
  const deputado = await CamaraAPI.getDeputado(deputadoId);
  const despesas = await CamaraAPI.getDeputadoDespesas(deputadoId);
  const discursos = await CamaraAPI.getDeputadoDiscursos(deputadoId);
  const eventosDeputado = await CamaraAPI.getDeputadoEventos(deputadoId);
  const frentes = await CamaraAPI.getDeputadoFrentes(deputadoId);
  const orgaosDeputado = await CamaraAPI.getDeputadoOrgaos(deputadoId);
  const frentesParlamentar = await CamaraAPI.getFrentes();
  const frentesByParlamentar = await CamaraAPI.getFrentesByParlamentar(54255);
  const frenteMembros = await CamaraAPI.getFrenteMembros(54255);
  const orgaos = await CamaraAPI.getOrgaos();
  const orgaoId = await CamaraAPI.getOrgao(180);
  const orgaoEventos = await CamaraAPI.getOrgaoEventos(180, {
    dataInicio: '2020-10-01',
    dataFim: '2020-10-06',
    pagina: 1,
    ordem: 'ASC',
    format: 'json',
  });
  const orgaoMembros = await CamaraAPI.getOrgaoMembros(180);
  const orgaoVotacoes = await CamaraAPI.getOrgaoVotacoes(180);
  const votacoes = await CamaraAPI.getVotacoes();
  const votacaoId = await CamaraAPI.getVotacao('2256542-68');
  const votacaoOrientacoes = await CamaraAPI.getVotacaoOrientacoes(
    '2256542-68'
  );
  const votacaoVotos = await CamaraAPI.getVotacaoVotos('2256542-68');
  const proposicoes = await CamaraAPI.getProposicoes();
  const proposicao = await CamaraAPI.getProposicao(proposicoes.dados[0].id);
  const proposicaoAutores = await CamaraAPI.getProposicaoAutores(
    proposicoes.dados[0].id
  );
  const proposicaoRelacionadas = await CamaraAPI.getProposicaoRelacionadas(
    proposicoes.dados[0].id
  );
  const proposicaoTemas = await CamaraAPI.getProposicaoTemas(
    proposicoes.dados[0].id
  );
  const proposicaoTramitacoes = await CamaraAPI.getProposicaoTramitacoes(
    proposicoes.dados[0].id
  );
  const proposicaoVotacoes = await CamaraAPI.getProposicaoVotacoes(
    proposicoes.dados[0].id,
    {
      ordem: 'DESC',
      ordenarPor: 'id',
      format: 'json',
    }
  );

  console.log('blocos', blocos);
  console.log('bloco', bloco);
  console.log('deputados', deputados);
  console.log('deputado', deputado);
  console.log('despesas', despesas);
  console.log('discursos', discursos);
  console.log('eventos deputado', eventosDeputado);
  console.log('orgaos deputado', orgaosDeputado);
  console.log('frentes', frentes);
  console.log('frentesParlamentar', frentesParlamentar);
  console.log('frentesByParlamentar', frentesByParlamentar);
  console.log('frenteMembros', frenteMembros);
  console.log('orgaos', orgaos);
  console.log('orgaoId', orgaoId);
  console.log('orgaoEventos ', orgaoEventos);
  console.log('orgaoMembros ', orgaoMembros);
  console.log('orgaoVotacoes ', orgaoVotacoes);
  console.log('votacoes', votacoes);
  console.log('votacaoId', votacaoId);
  console.log('votacaoOrientacoes ', votacaoOrientacoes);
  console.log('votacaoVotos ', votacaoVotos);
  console.log('proposicoes', proposicoes);
  console.log('proposicao', proposicao);
  console.log('proposicaoAutores', proposicaoAutores);
  console.log('proposicaoRelacionadas', proposicaoRelacionadas);
  console.log('proposicaoTemas', proposicaoTemas);
  console.log('proposicaoTramitacoes', proposicaoTramitacoes);
  console.log('proposicaoVotacoes', proposicaoVotacoes);
};

main();
