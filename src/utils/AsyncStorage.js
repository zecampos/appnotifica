import AsyncStorage from '@react-native-community/async-storage';

const pushToken = async id => {
  try {
    await AsyncStorage.setItem('@notifica_pushId', id);
  } catch (e) {
    console.log('erro  ao guardar tokenID');
  }
};

const getPushToken = async () => {
  try {
    const tokenId = await AsyncStorage.getItem('@notifica_pushId');
    if (tokenId !== null) {
      return tokenId;
      console.log('eis o token', tokenId);
    }
  } catch (e) {
    console.log('erro ao tentar acessr token', e);
  }
};

const storageUser = async user => {
  try {
    await AsyncStorage.setItem('@notifica_User', JSON.stringify(user));
    console.log('sucesso ao guardar User');
  } catch (e) {
    return {msg: 'erro ao salvar usuario no storage'};
  }
};
const getStorageUser = async () => {
  try {
    const user = await AsyncStorage.getItem('@notifica_User');

    if (user !== null) {
      return JSON.parse(user);
    }
  } catch (e) {
    return {msg: 'erro ao obter usuario'};
  }
};
const storageToken = async token => {
  try {
    await AsyncStorage.setItem('@notifica_Token', token);
    console.log('sucesso ao guardar Token');
  } catch (e) {
    return {msg: 'erro ao salvar token no storage'};
  }
};

const getToken = async () => {
  try {
    const tokenId = await AsyncStorage.getItem('@notifica_Token');
    if (tokenId !== null) {
      console.log('eis o token', tokenId);
      return tokenId;
    }
  } catch (e) {
    console.log('erro ao tentar acessr token', e);
  }
};

export {
  pushToken,
  getPushToken,
  storageUser,
  getStorageUser,
  storageToken,
  getToken,
};
