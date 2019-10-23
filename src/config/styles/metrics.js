import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const setWidth = p => {
  return width * p;
};
const setheight = p => {
  return height * p;
};

export {setWidth, setheight};

