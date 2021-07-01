import {StyleSheet} from 'react-native';
import colors from '../../utils/constant/color';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
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
  bottomScrollViewContent: {marginBottom: '100%'},
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
  bodyWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  scrollView: {
    width: '100%',
    marginTop: '5%',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  textBody: {
    paddingBottom: 16,
  },
  textLink: {
    color: '#15B4E7',
  },
});
