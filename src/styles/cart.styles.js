import {StyleSheet} from 'react-native';
import {colours} from '../theme/colors';
import {fonts} from '../theme/fonts';

export const cartStyles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: colours.white,
  },
  headerBackground: {
    backgroundColor: colours.APP_THEME_COLOR,
    padding: 20,
    paddingBottom: 50,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: fonts.MEDIUM,
    fontSize: 22,
    color: colours.white,
    marginLeft: 25,
  },
  totalCostContainer: {
    backgroundColor: colours.white,
    width: 180,
    paddingVertical: 15,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 60,
  },
  totalCostText: {
    fontFamily: fonts.NORMAL,
    color: colours.APP_PINK,
    fontSize: 17,
    marginBottom: 7,
  },
  totalAmountText: {
    fontFamily: fonts.NORMAL,
    color: colours.APP_THEME_COLOR,
    fontSize: 22,
  },
  footerButton: {
    alignSelf: 'flex-end',
    marginTop: -10,
    borderBottomColor: colours.APP_THEME_COLOR,
    borderBottomWidth: 1.1,
  },
  footerButtonText: {
    fontFamily: fonts.NORMAL,
    color: colours.APP_THEME_COLOR,
    fontSize: 17,
    marginBottom: -3,
  },
  checkBoxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  deliveryOptionText: {
    fontFamily: fonts.NORMAL,
    color: colours.APP_THEME_COLOR,
    fontSize: 17,
    marginBottom: 25,
    marginTop: 20,
  },
  manageCardsText: {
    fontFamily: fonts.NORMAL,
    color: colours.APP_THEME_COLOR,
    fontSize: 17,
    marginVertical: 25,
  },
  FlatlistFooterContainer: {
    marginHorizontal: 12,
  },
  reviewOrderText: {
    fontFamily: fonts.NORMAL,
    color: colours.APP_THEME_COLOR,
    fontSize: 17,
  },
  flatlistHeaderContainer: {
    paddingTop: 13,
    paddingVertical: 25,
    marginHorizontal: 12,
  },
  emptyComponent: {alignSelf: 'center', marginTop: 50},
  emptyComponentText: {
    fontFamily: fonts.NORMAL,
    color: colours.dark_gray,
    fontSize: 16,
  },
  orderButton: {
    position: 'absolute',
    backgroundColor: colours.APP_THEME_COLOR,
    height: 60,
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderbuttonText: {
    fontFamily: fonts.NORMAL,
    color: colours.white,
    fontSize: 18,
    marginLeft: 10,
  },
  checkBoxButtonRow: {flexDirection: 'row', alignItems: 'center'},
  checkBoxDineImage: {
    height: 30,
    width: 30,
  },
});
