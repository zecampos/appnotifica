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
    marginBottom: 50,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: '600',
    marginHorizontal: 25,
    marginTop: 25,
    marginBottom: 25,
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
});
export default styles;
