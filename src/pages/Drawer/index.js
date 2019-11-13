import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-view';
import Home from '../Home';
import Concursos from '../Concursos';

import Aulas from '../Aulas';
import AulasDetalhe from '../Aulas/AulasDetalhe';
import VideoAula from '../Aulas/VideoAula';
import Premium from '../Premium';
import Perfil from '../Perfil';
let userPremium = 1;

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerNavigatorItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MyStackNavigator = createStackNavigator(
  {
    Aulas: {
      screen: Aulas,
    },
    AulasDetalhe: {
      screen: AulasDetalhe,
    },
    VideoAula: {
      screen: VideoAula,
    },
  },
  {
    initialRouteName: 'Aulas',
    headerMode: 'none',
  },
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      drawLabel: 'Home',
    },
    Concursos: {
      screen: Concursos,
      drawLabel: 'Concursos',
    },
    Aulas: {
      screen: MyStackNavigator,
      drawLabel: 'Aulas',
    },
    Perfil: {
      screen: Perfil,
      drawLabel: 'Perfil',
    },
    // Premiun: {
    //   screen: Premium,
    //   drawLabel: 'Premium',
    //   navigationOptions: {
    //     drawerLabel: () => (userPremium === 0 ? 'Premiun' : null),
    //   },
    // },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    hideStatusBar: true,
    contentComponent: CustomDrawerContentComponent,
  },
);
export default MyDrawerNavigator;
