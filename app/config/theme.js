import { StyleSheet } from 'react-native';
import { BaseColor } from './color';

/**
 * Common basic style defines
 */
export const BaseStyle = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
  },
  bodyPaddingDefault: {
    paddingHorizontal: 20,
  },
  bodyMarginDefault: {
    marginHorizontal: 20,
  },
  textInput: {
    height: 46,
    backgroundColor: BaseColor.fieldColor,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    color: BaseColor.textPrimaryColor,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  textShadow: {
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: BaseColor.textShadowColor,
    textShadowRadius: 10,
  },
});
