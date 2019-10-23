import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Drawer from './pages/Drawer';
const LoginSwitch = (userLogged = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Login: {
          screen: Login,
        },

        Cadastrar: {
          screen: Cadastrar,
        },
        Drawer: {
          screen: Drawer,
        },
      },
      {
        initialRouteName: userLogged ? 'Drawer' : 'Login',
        headerMode: 'none',
        navigationOptions: {
          header: null,
        },
      },
    ),
  );

export default LoginSwitch;
