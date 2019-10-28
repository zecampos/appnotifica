import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Form, Item, Input, Label, Content} from 'native-base';
import {withNavigation} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './styles';
import logo from '../../assets/logo.png';
import TheLoader from '../../components/TheLoader';
import {
  getPushToken,
  storageUser,
  storageToken,
} from '../../utils/AsyncStorage';
import {api} from '../../utils/api';
import messages from '../../utils/Messages';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
      pushuserId: '',
    };
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }
  async componentDidMount() {
    const tokeId = await getPushToken();
    this.setState({pushuserId: tokeId});
    this.getUserCreate();
  }
  handleLogin = async () => {
    const {pushuserId, email, password} = this.state;
    // console.log(pushuserId);
    // messages(pushuserId);
    this.setState({loading: true});
    let data = {
      pushId: pushuserId,
      password,
      email,
    };
    try {
      let logar = await api.post('sessions', data);
      console.log('logar', logar);
      this.setState({loading: false});
      await storageUser(logar.data.user);
      await storageToken(logar.data.token.token);
      this.props.navigation.navigate('Drawer');
    } catch (e) {
      console.log('erro logar', e.response.data.message);
      messages(e.response.data.message, 'warning');
      this.setState({loading: false});
    }
  };
  getUserCreate() {
    let user = this.props.navigation.getParam('user');
    if (user) {
      this.setState({email: user.email, password: user.password});
    }
  }

  render() {
    const {loading, email, password} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="#7147A9"
          barStyle="light-content"
        />
        <Content>
          <View style={styles.logoContainer}>
            <Image source={logo} />
          </View>
          {loading ? (
            <TheLoader titulo="logando..." />
          ) : (
            <View style={styles.form}>
              <Item style={{marginTop: 10}} floatingLabel>
                <Label style={styles.label}>E-mail</Label>
                <Input
                  value={email}
                  onChangeText={value => this.onChangeText('email', value)}
                  style={styles.input}
                />
              </Item>
              <Item style={{marginTop: 10}} floatingLabel>
                <Label style={styles.label}>Senha</Label>
                <Input
                  value={password}
                  onChangeText={value => this.onChangeText('password', value)}
                  secureTextEntry
                  style={styles.input}
                />
              </Item>
              <View style={styles.viewEsqueci}>
                <TouchableOpacity style={styles.btnEsqueci}>
                  <Text style={styles.textEsqueci}>esqueceu a senha?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewBtn}>
                <TouchableOpacity
                  onPress={() => this.handleLogin()}
                  style={styles.btnEntrar}>
                  <Text style={styles.btnText}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Cadastrar')}
                  style={styles.btnCadastrar}>
                  <Text style={styles.btnTextCadastrar}>ME CADASTRAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Content>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Login);
