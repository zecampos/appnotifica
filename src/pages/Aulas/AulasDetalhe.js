import React, {Component} from 'react';

import {View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import TheHeaderBack from '../../components/TheHeaderBack';
import TheListAula from '../../components/TheListAula';
import styles from './styles';
class AulasDetalhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      aulas: [],
    };
  }
  componentDidMount() {
    let aulas = this.props.navigation.getParam('aulas');
    this.setState({titulo: aulas.nome, aulas: aulas.aulas});
  }
  render() {
    console.log(this.props.navigation.getParam('aula'));
    const {titulo, aulas} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TheHeaderBack navigation={this.props.navigation} />
        <View style={styles.content}>
          <View styles={styles.contentTitle}>
            <Text style={styles.mainTitle}>{titulo}</Text>
          </View>

          <View>
            <TheListAula aulas={aulas} navigate={this.props.navigation} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(AulasDetalhe);
