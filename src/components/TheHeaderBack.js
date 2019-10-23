import React from 'react';

import {Header, Left, Icon, Button, Body, Right} from 'native-base';

// import { Container } from './styles';

const TheHeaderBack = ({navigation}) => (
  <Header
    style={{marginHorizontal: 20, paddingVertical: 30, height: 80}}
    transparent>
    <Left style={{marginTop: 40}}>
      <Button onPress={() => navigation.goBack()} color="white" transparent>
        <Icon style={{color: '#000'}} name="arrow-back" />
      </Button>
    </Left>
    <Body />
    <Right />
  </Header>
);

export default TheHeaderBack;
