import axios from 'axios';

export default axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});
