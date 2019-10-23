import React, {Component} from 'react';

import {withNavigation} from 'react-navigation';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
} from 'native-base';

class TheHeader extends Component {
  render() {
    return (
      <Header
        style={{marginHorizontal: 20, paddingVertical: 30, height: 80}}
        transparent>
        <Left style={{marginTop: 40}}>
          <Button
            onPress={() => this.props.navigation.openDrawer()}
            color="white"
            transparent>
            <Icon style={{color: '#000'}} name="menu" />
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
    );
  }
}
export default withNavigation(TheHeader);
