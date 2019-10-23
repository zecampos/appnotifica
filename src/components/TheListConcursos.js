import React from 'react';

import {View, Linking} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Accordion,
} from 'native-base';
// import { Container } from './styles';
import notificacaoIcon from '../assets/icons/notificacao.png';
const goLink = link => {
  Linking.openURL(link);
};

const TheListConcursos = ({concursos}) => (
  <List>
    {concursos.map((item, i) => (
      <ListItem key={i} thumbnail>
        <Left>
          <Thumbnail square source={notificacaoIcon} />
        </Left>
        <Body>
          <Text style={{fontSize: 12}}>{item.titulo}</Text>

          <Text note numberOfLines={8}>
            {item.info}
          </Text>
        </Body>
        <Right>
          <Button onPress={() => goLink(item.link)} transparent>
            <Text>Ir ao site</Text>
          </Button>
        </Right>
      </ListItem>
    ))}
  </List>
);

export default TheListConcursos;
