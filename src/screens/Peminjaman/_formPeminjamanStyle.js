import {StyleSheet} from 'react-native';
import colors from '../../utils/constant/color';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginBottom: 40,
    backgroundColor: colors.P1,
  },
  wrapper: {
    flexDirection: 'column',
    backgroundColor: colors.white,
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
  inputContainer: {
    paddingTop: 40,
    paddingHorizontal: 32,
  },
  wrapTextInput: {
    paddingBottom: 24,
  },
  inputWrapper: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.P4,
    paddingHorizontal: 8,
  },
  textWrapper: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.P4,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  labelInput: {
    color: colors.P3,
    paddingBottom: 8,
  },
  buttonContainer: {
    paddingHorizontal: 32,
  },
  buttonWrapper: {
    height: 40,
    backgroundColor: colors.P1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
    marginTop: '5%',
  },
});
