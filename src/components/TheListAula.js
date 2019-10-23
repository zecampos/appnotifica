import React from 'react';

import {View, Linking} from 'react-native';
import {withNavigation} from 'react-navigation';
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
} from 'native-base';
// import { Container } from './styles';
import playImage from '../assets/icons/aulas/playImage.png';

const TheListAulas = ({aulas, navigation}) => (
  <View>
    <List>
      {aulas.map((item, i) => (
        <ListItem
          onPress={() => navigation.navigate('VideoAula', {aula: item})}
          style={{marginVertical: 5}}
          key={i}
          thumbnail>
          <Left>
            <Thumbnail square source={playImage} />
          </Left>
          <Body>
            <Text>{item.titulo}</Text>
          </Body>
          <Right />
        </ListItem>
      ))}
    </List>
  </View>
);

export default withNavigation(TheListAulas);
