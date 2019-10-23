import axios from 'axios';
import {getToken} from '../utils/AsyncStorage';
const devApi = 'http://10.0.3.2:3333/';;
const api = axios.create({
  baseURL: 'https://notifica-back.herokuapp.com',
});

const cadastrar = async data => {
  try {
    const cadastro = await api.post('users', data);
    return cadastro.response;
  } catch (e) {
    return new Error('erro');
  }
};
const login = async data => {
  try {
    const logar = await api.post('sessions', data);
    return logar.data;
  } catch (e) {
    return {msg: 'erro ao logar'};
  }
};
const logout = async email => {
  let data = {
    email,
  };
  try {
    console.log('body logout', data);
    let sair = await api.post('logout', data);
  } catch (e) {
    console.log('erro ao apagar pushId', e);
  }
};
const getNotificacoes = async () => {
  try {
    let t = await getToken();

    let config = {
      headers: {Authorization: 'bearer ' + t},
    };

    const nova = await api.get('notificacao', config);
    return nova.data;
  } catch (e) {
    console.log('erro ao obter notificacoes');
    return [];
  }
};
export {cadastrar, login, logout, getNotificacoes, api};
