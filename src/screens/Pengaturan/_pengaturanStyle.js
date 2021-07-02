import {StyleSheet} from 'react-native';
import colors from '../../utils/constant/color';

export default StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: colors.P1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
  },
  arrow: {width: 24, height: 24},
  headerWrapper: {
    height: 120,
    backgroundColor: colors.P2,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSection: {
    color: colors.P3,
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 32,
  },
  buttonWrapper: {
    height: 40,
    backgroundColor: colors.P1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
