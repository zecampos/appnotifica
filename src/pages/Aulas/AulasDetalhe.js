import React, {Component} from 'react';

import {View, Text, Button} from 'react-native';
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
      aulas: [
        {
          id: 1,
          titulo: 'Geometria 1',
          link: 'http://esmirna.com.br/sample/SampleVideo.mp4',
        },
        {
          id: 2,
          titulo: 'Equação de primeiro Grau',
          link: 'http://esmirna.com.br/sample/SampleVideo.mp4',
        },
        {
          id: 3,
          titulo: 'Equação de segundo Grau',
          link: 'http://esmirna.com.br/sample/SampleVideo.mp4',
        },
        {
          id: 4,
          titulo: 'Operações Basicas',
          link: 'http://esmirna.com.br/sample/SampleVideo.mp4',
        },
        {
          id: 5,
          titulo: 'Funções de primeiro grau',
          link: 'http://esmirna.com.br/sample/SampleVideo.mp4',
        },
        {
          id: 6,
          titulo: 'Funções de segundo grau',
          link: 'http://esmirna.com.br/sample/SampleVideo.mp4',
        },
      ],
    };
  }
  componentDidMount() {
    let titulo = this.props.navigation.getParam('aula');
    this.setState({titulo});
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
