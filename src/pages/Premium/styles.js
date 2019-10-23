import {StyleSheet} from 'react-native';
import colors from '../../config/styles/colors';
import {setWidth, setheight} from '../../config/styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.branco,
    flex: 1,
  },
  contentTitle: {
    marginTop: 50,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: '600',
    marginHorizontal: 25,
    marginTop: 25,
  },
  viewButtonMain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 25,
    justifyContent: 'space-between',
    marginTop: 45,
  },
  viewButtonItem: {
    marginVertical: 10,
  },
  viewBtn: {
    marginTop: 40,
    marginHorizontal: 25,
  },
  btnPremium: {
    backgroundColor: colors.primary,

    height: setheight(0.05),
    justifyContent: 'center',
    marginTop: 0,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});
export default styles;
