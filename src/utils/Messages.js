import {Toast} from 'native-base';

export default function message(msg, type) {
  if (type === '' && !type) {
    type = 'success';
  }
  Toast.show({
    text: msg,
    buttonText: 'Ok',

    position: 'top',
    type: type,
  });
}
