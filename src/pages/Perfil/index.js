import React, {Component} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {withNavigation, NavigationActions} from 'react-navigation';
// import { Container } from './styles';
import TheHeader from '../../components/TheHeader';
import AsyncStorage from '@react-native-community/async-storage';
import {logout} from '../../utils/api';
import {getStorageUser} from '../../utils/AsyncStorage';
import styles from './styles';
class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  async componentDidMount() {
    let user = await getStorageUser();
    console.log(' usuario', user.email);
    this.setState({email: user.email});
  }
  handleLogout = async () => {
    const {email} = this.state;
    console.log('olha o email ai', email);
    const setParamsAction = NavigationActions.navigate({
      routeName: 'Login',
      key: null,
    });
    try {
      await logout(email);
      await AsyncStorage.removeItem('@notifica_User');
      await AsyncStorage.removeItem('@notifica_Token');

      this.props.navigation.dispatch(setParamsAction) ;
    } catch (e) {
      console.log('erro ao apagar', e);
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <TheHeader />
        <View style={styles.content}>
          <View styles={styles.contentTitle}>
            <Text style={styles.mainTitle}>Perfil</Text>
          </View>
          <View styles={styles.contentTitle}>
            <Text style={[styles.mainTitle, {fontSize: 12, fontWeight: '300'}]}>
              Em breve mais detalhes
            </Text>
          </View>
          <View style={styles.viewBtn}>
            <TouchableOpacity
              onPress={() => this.handleLogout()}
              style={styles.btnPremium}>
              <Text style={styles.btnText}>Sair do Aplicativo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Perfil);
