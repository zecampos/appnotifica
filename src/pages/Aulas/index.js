import React, {Component} from 'react';
import {View, Text, Button, StatusBar, ActivityIndicator} from 'react-native';

import {withNavigation} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import {api} from '../../utils/api';

import TheHeader from '../../components/TheHeader';
import TheButtonItem from '../../components/TheButtonItem';

import styles from './styles';
import colors from '../../config/styles/colors';
class Aulas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aulas: [],
      loading: true,
    };
  }
  async componentDidMount() {
    await this.getAulas();
  }
  async getAulas() {
    try {
      let a = await api.get('/aulas');
      this.setState({aulas: a.data.modulos, loading: false});
    } catch (e) {
      console.log('Erro', e);
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <TheHeader />
        {this.state.loading ? (
          <View style={[styles.content, {justifyContent: 'center'}]}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        ) : (
          <View style={styles.content}>
            <View styles={styles.contentTitle}>
              <Text style={styles.mainTitle}>Aulas</Text>
            </View>

            <View style={styles.viewButtonMain}>
              {this.state.aulas.map((item, i) => (
                <View key={i} style={styles.viewButtonItem}>
                  <TheButtonItem
                    navigation={this.props.navigation}
                    icon={item.nome}
                    title={item.nome}
                    rota={0}
                    aulas={item}
                  />
                </View>
              ))}
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default withNavigation(Aulas);
