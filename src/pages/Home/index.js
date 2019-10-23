import React, {Component} from 'react';

import {View, Text, Button, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';

import TheHeader from '../../components/TheHeader';
import TheButtonItem from '../../components/TheButtonItem';

import styles from './styles';
import {getStorageUser} from '../../utils/AsyncStorage';
class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <TheHeader />
        <View style={styles.content}>
          <View styles={styles.contentTitle}>
            <Text style={styles.mainTitle}>Home</Text>
          </View>
          <View style={styles.viewButtonMain}>
            <View style={styles.viewButtonItem}>
              <TheButtonItem
                navigation={this.props.navigation}
                icon="concursos"
                title="Concursos"
              />
            </View>
            {/* <View style={styles.viewButtonItem}>
              <TheButtonItem
                navigation={this.props.navigation}
                icon="aulas"
                title="Aulas"
              />
            </View>
            <View style={styles.viewButtonItem}>
              <TheButtonItem
                navigation={this.props.navigation}
                icon="premiun"
                title="Premiun"
              />
            </View> */}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Home);
