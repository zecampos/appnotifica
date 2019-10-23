import React from 'react';

import {View, Text} from 'react-native';
import {Spinner} from 'native-base';
// import { Container } from './styles';

const components = ({titulo}) => (
  <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
    <Spinner color="white" />
    <Text style={{color: '#fff', textAlign: 'center'}}>{titulo}</Text>
  </View>
);

export default components;
