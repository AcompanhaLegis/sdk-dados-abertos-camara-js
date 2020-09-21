import CamaraAPI from './index';

const main = async () => {
  console.log(CamaraAPI);
  const blocos = await CamaraAPI.getBlocos();

  console.log(blocos);

  const bloco = await CamaraAPI.getBloco(blocos.dados[0].id);

  console.log(bloco);
};

main();
