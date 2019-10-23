import {StyleSheet} from 'react-native';
import colors from '../../config/styles/colors';
import {setWidth, setheight} from '../../config/styles/metrics';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: setheight(0.1),
  },
  form: {
    marginHorizontal: setWidth(0.08),
  },
  label: {
    color: '#fff',
  },
  input: {
    color: '#fff',
  },
  viewEsqueci: {
    alignSelf: 'flex-end',
    marginVertical: 15,
  },
  btnEsqueci: {
    width: setWidth(0.3),
  },
  textEsqueci: {
    color: '#fff',
  },
  viewBtn: {
    marginTop: 10,
  },
  btnEntrar: {
    backgroundColor: '#fff',
    color: colors.primary,
    height: setheight(0.06),
    justifyContent: 'center',
    marginTop: 0,
  },
  btnText: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  btnCadastrar: {
    backgroundColor: 'transparent',
    color: colors.primary,
    height: setheight(0.06),
    justifyContent: 'center',
    marginTop: 15,
    borderColor: '#fff',
    borderWidth: 1,
  },
  btnTextCadastrar: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default styles;
