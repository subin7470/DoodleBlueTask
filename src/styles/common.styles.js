import {StyleSheet} from 'react-native';
import {colours} from '../theme/colors';
import {fonts} from '../theme/fonts';

export const commonStyles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxTitle: {
    fontFamily: fonts.LIGHT,
    fontSize: 14,
    color: colours.APP_THEME_COLOR,
    marginHorizontal: 15,
  },
  checkIconContainer: {
    padding: 0,
    margin: 0,
    marginHorizontal: 0,
    marginLeft: 0,
    marginRight: 0,
  },
});
