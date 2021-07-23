import {StyleSheet} from 'react-native';
import colors from '../../utils/constant/color';

export default StyleSheet.create({
  safeAreaContainer: {flex: 1, backgroundColor: colors.P1},
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
    justifyContent: 'center',
  },
  textSection: {
    color: colors.P3,
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationWrapper: {
    paddingVertical: 40,
    paddingHorizontal: 32,
  },
  notification: {
    backgroundColor: '#EAF7EE',
    borderWidth: 1,
    borderColor: '#629161',
    padding: 16,
    marginBottom: 32,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  scrollView: {flex: 1, marginBottom: 20},
});
