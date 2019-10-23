import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
  Content,
} from 'native-base';
import {withNavigation} from 'react-navigation';

import styles from './styles';
import logo from '../../assets/logo.png';
import TheLoader from '../../components/TheLoader';
import {cadastrar, api} from '../../utils/api';
import messages from '../../utils/Messages';
class Cadastrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      funcao: '',
      nome: '',
      email: '',
      password: '',
      loading: false,
      message: '',
    };
  }
  onValueChange(value: string) {
    this.setState({
      funcao: value,
    });
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }
  validarInput() {
    const {nome, email, password, funcao} = this.state;
    if (
      nome.length > 5 &&
      email.length > 0 &&
      password.length > 5 &&
      funcao.length > 0
    ) {
      return false;
    }
    return true;
  }
  async handleLogin() {
    const {nome, email, password, funcao} = this.state;
    this.setState({loading: true});
    let data = {
      nome,
      email,
      password,
      funcao,
    };
    try {
      let cadastro = await api.post('users', data);
      console.log('s', cadastro);
      this.setState({loading: false});
      messages('Cadastro efetuado com sucesso');
      this.props.navigation.navigate('Login', {user: {email, password}});
    } catch (e) {
      messages(e.response.data.message, 'warning');
      this.setState({loading: false});
    }
  }
  render() {
    const {nome, email, password, funcao, loading} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#7147A9" barStyle="light-content" />
        <Header transparent>
          <Left>
            <Button
              onPress={() => this.props.navigation.navigate('Login')}
              color="white"
              transparent>
              <Icon color="white" name="arrow-back" />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <Content>
          <View style={[styles.logoContainer, {marginTop: 10}]}>
            <Image source={logo} />
          </View>
          {loading ? (
            <TheLoader titulo="Cadastrandro ..." />
          ) : (
            <View style={styles.form}>
              <Item style={{marginTop: 5}} floatingLabel>
                <Label style={styles.label}>Nome</Label>
                <Input
                  value={nome}
                  onChangeText={value => this.onChangeText('nome', value)}
                  style={styles.input}
                />
              </Item>
              <Item style={{marginTop: 5}} floatingLabel>
                <Label style={styles.label}>E-mail</Label>
                <Input
                  keyboardType="email-address"
                  value={email}
                  onChangeText={value => this.onChangeText('email', value)}
                  style={styles.input}
                />
              </Item>
              <Item style={{marginTop: 5}} floatingLabel>
                <Label style={styles.label}>Senha</Label>
                <Input
                  value={password}
                  onChangeText={value => this.onChangeText('password', value)}
                  secureTextEntry
                  style={styles.input}
                />
              </Item>
              <Item style={{marginTop: 5}}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  iosHeader="Selecionar"
                  placeholder="Selecione Funçao"
                  placeholderStyle={{
                    color: '#FFF',
                    marginLeft: -15,
                    padding: 0,
                  }}
                  placeholderIconColor="#fff"
                  itemStyle={{color: '#fff'}}
                  headerBackButtonText="voltar"
                  style={styles.picker}
                  selectedValue={funcao}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item
                    label="Auxiliar de Enfermagem"
                    value="auxiliar de enfermagem"
                    color="#000"
                  />
                  <Picker.Item
                    label="Técnico de Enfermagem"
                    value="tecnico de enfermagem"
                    color="#000"
                  />
                  <Picker.Item
                    color="#000"
                    label="Enfermagem"
                    value="enfermagem"
                  />
                </Picker>
              </Item>
              <View style={[styles.viewBtn, {marginTop: 25}]}>
                <TouchableOpacity
                  onPress={() => this.handleLogin()}
                  disabled={this.validarInput()}
                  style={styles.btnEntrar}>
                  <Text style={styles.btnText}>CADASTRAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Content>
      </View>
    );
  }
}
export default withNavigation(Cadastrar);
