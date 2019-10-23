import React, {Component} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import OneSignal from 'react-native-onesignal';
import {Root} from 'native-base';

import {pushToken, getToken} from './utils/AsyncStorage';
import LoginSwitch from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userChecked: false, userLogged: false};
    OneSignal.init('bd5410eb-f017-467d-ac5c-05e86b5de098');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds.bind(this));
  }
  async componentDidMount() {
    const username = await getToken();
    const result = username;
    this.setState({
      userChecked: true,
      userLogged: !!result,
    });
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds.bind(this));
  }
  onReceived = data => {};
  onOpened = notification => {};
  onIds = async id => {
    await pushToken(id.userId);
  };
  render() {
    const {userChecked, userLogged} = this.state;
    if (!userChecked) {
      return null;
    }
    const MainNavigator = LoginSwitch(userLogged);
    return (
      <SafeAreaProvider>
        <Root>
          <MainNavigator />
        </Root>
      </SafeAreaProvider>
    );
  }
}

export default App;
