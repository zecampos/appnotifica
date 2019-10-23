import React, {Component} from 'react';

import {View, Text, Button, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import TheHeader from '../../components/TheHeader';
import TheListConcursos from '../../components/TheListConcursos';
import {Content} from 'native-base';
import {getNotificacoes} from '../../utils/api';
import styles from './styles';
class Concursos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concursos: [],
    };
  }
  async componentDidMount() {
    await this.getN();
  }

  async getN() {
    try {
      let notificacoes = await getNotificacoes();

      this.setState({concursos: notificacoes});
    } catch (e) {
      console.log('erro ao obter notificacoes', e);
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <TheHeader />
        <View style={styles.content}>
          <View styles={styles.contentTitle}>
            <Text style={styles.mainTitle}>Concursos</Text>
          </View>
          <Content>
            <TheListConcursos concursos={this.state.concursos} />
          </Content>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Concursos);
