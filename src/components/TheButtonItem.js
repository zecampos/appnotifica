import React from 'react';

import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

// import { Container } from './styles';
import bell from '../assets/icons/bell.png';
import premiumbadge from '../assets/icons/premium-badge.png';
import videoplayer from '../assets/icons/videoplayer.png';
import matematica from '../assets/icons/aulas/matematica.png';
import fisica from '../assets/icons/aulas/fisica.png';
import portugues from '../assets/icons/aulas/portugues.png';
import quimica from '../assets/icons/aulas/quimica.png';
import biologia from '../assets/icons/aulas/biologia.png';
import redacao from '../assets/icons/aulas/redacao.png';
import colors from '../config/styles/colors';
import {setWidth, setheight} from '../config/styles/metrics';
const styles = StyleSheet.create({
  btnMain: {
    backgroundColor: colors.primary,
    height: setheight(0.15),
    width: setWidth(0.4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textTitle: {
    color: '#fff',
    marginTop: 13,
  },
});
const setIcon = icon => {
  switch (icon) {
    case 'concursos':
      return bell;
      break;
    case 'aulas':
      return videoplayer;
      break;
    case 'premiun':
      return premiumbadge;
      break;
    case 'Matemática':
      return matematica;
      break;
    case 'Fisíca':
      return fisica;
      break;
    case 'Português':
      return portugues;
      break;
    case 'Quimíca':
      return quimica;
      break;
    case 'Biologia':
      return biologia;
      break;

    case 'Redação':
      return redacao;
      break;
  }
};
const route = (navigation, id, t) => {
  console.log('id ?', t);
  if (!id) {
    navigation.navigate(t);
  }
  if (id) {
    navigation.navigate('AulasDetalhe', {id, aula: t});
  }
};
const TheButtonItem = ({title, rota, icon, navigation}) => (
  <TouchableOpacity
    onPress={() => route(navigation, rota, title)}
    style={styles.btnMain}>
    <Image source={setIcon(icon)} />
    <Text style={styles.textTitle}>{title}</Text>
  </TouchableOpacity>
);

export default TheButtonItem;
