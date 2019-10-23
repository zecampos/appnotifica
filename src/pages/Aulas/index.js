import React, {Component} from 'react';

import {View, Text, Button, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import TheHeader from '../../components/TheHeader';
import TheButtonItem from '../../components/TheButtonItem';
import styles from './styles';
class Aulas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aulas: [
        {id: 1, aula: 'Matemática'},
        {id: 2, aula: 'Fisíca'},
        {id: 3, aula: 'Português'},
        {id: 4, aula: 'Quimíca'},
        {id: 5, aula: 'Biologia'},
        {id: 6, aula: 'Redação'},
      ],
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <TheHeader />
        <View style={styles.content}>
          <View styles={styles.contentTitle}>
            <Text style={styles.mainTitle}>Aulas</Text>
          </View>

          <View style={styles.viewButtonMain}>
            {this.state.aulas.map((item, i) => (
              <View key={i} style={styles.viewButtonItem}>
                <TheButtonItem
                  navigation={this.props.navigation}
                  icon={item.aula}
                  title={item.aula}
                  rota={item.id}
                />
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Aulas);
