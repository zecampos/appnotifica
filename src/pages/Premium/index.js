import React, {Component} from 'react';

import {View, Text, TouchableOpacity, Linking, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import TheHeader from '../../components/TheHeader';

import styles from './styles';
class Premium extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <TheHeader />
        <View style={styles.content}>
          <View styles={styles.contentTitle}>
            <Text style={styles.mainTitle}>Seja Premium</Text>
          </View>
          <View styles={styles.contentTitle}>
            <Text style={[styles.mainTitle, {fontSize: 12, fontWeight: '300'}]}>
              Tenha acesso a videos aulas onde você vai poder estudar os tópicos
              que caem nos concursos e assim aumentar suas chances de passar no
              concurso.
            </Text>
          </View>
          <View style={styles.viewBtn}>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://www.google.com.br')}
              style={styles.btnPremium}>
              <Text style={styles.btnText}>Quero Ser Premium</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Premium);
