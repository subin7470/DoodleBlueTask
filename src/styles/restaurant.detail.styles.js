import {StyleSheet} from 'react-native';
import {colours} from '../theme/colors';
import {fonts} from '../theme/fonts';

export const resDetailStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
    padding: 20,
  },
  shareIconRow: {
    flexDirection: 'row',
  },
  resDetailCard: {
    backgroundColor: colours.white,
    elevation: 3,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 3,
    marginTop: -50,
    zIndex: 1,
    marginBottom: 0,
  },
  flatListHeaderTitle: {
    fontFamily: fonts.MEDIUM,
    color: colours.APP_THEME_COLOR,
    fontSize: 18,
    marginTop: 30,
    marginBottom: 20,
  },
  flatlistStyle: {
    padding: 20,
    paddingTop: 0,
  },
  flatlistContainer: {
    paddingBottom: 120,
  },
  cardTitle: {
    fontFamily: fonts.MEDIUM,
    color: colours.APP_THEME_COLOR,
    fontSize: 20,
    marginBottom: 20,
  },
  resDetailCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  resDetailCardText: {
    fontFamily: fonts.NORMAL,
    color: colours.dark_gray,
    fontSize: 16,
    textAlign: 'center',
  },
  bookButton: {
    backgroundColor: colours.APP_THEME_COLOR,
    height: 42,
    width: 145,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bookButtonText: {
    fontFamily: fonts.NORMAL,
    color: colours.white,
    fontSize: 16,
  },
  foodNcolumn: {
    marginTop: 3.5,
    marginRight: 7,
  },
  fromCartFoodContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomColor: colours.dark_gray,
    borderBottomWidth: 0.5,
    marginLeft: 20,
    paddingRight: 12,
    paddingBottom: 5,
  },
  foodContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  foodN: {
    borderColor: colours.dark_gray,
    height: 25,
    width: 18,
    borderWidth: 1,
    textAlign: 'center',
    fontFamily: fonts.NORMAL,
    fontSize: 12,
    color: colours.dark_gray,
    borderRadius: 2.5,
    textAlignVertical: 'center',
    marginBottom: 5,
  },
  foodTitle: {
    fontFamily: fonts.NORMAL,
    color: colours.dark_gray,
    fontSize: 17,
    marginBottom: 10,
  },
  foodDescription: {
    fontFamily: fonts.NORMAL,
    color: colours.dark_gray,
    fontSize: 13,
    marginBottom: 10,
  },
  foodAmountText: {
    fontFamily: fonts.NORMAL,
    color: colours.APP_PINK,
    fontSize: 20,
  },
  addToCartButton: {
    width: 95,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colours.APP_PINK,
    borderWidth: 1,
  },
  cartButtonRow: {
    flexDirection: 'row',
    width: 90,
    height: 30,
    alignItems: 'center',
    borderColor: colours.APP_PINK,
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 3.5,
  },
  viewCartButton: {
    position: 'absolute',
    backgroundColor: colours.APP_THEME_COLOR,
    height: 60,
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewCartButtonText: {
    fontFamily: fonts.NORMAL,
    color: colours.white,
    fontSize: 18,
    marginLeft: 10,
  },
  menuButton: {
    position: 'absolute',
    backgroundColor: colours.APP_PINK,
    height: 35,
    bottom: 80,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  menuImage: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  menuButtonText: {
    fontFamily: fonts.NORMAL,
    color: colours.APP_THEME_COLOR,
    fontSize: 17,
  },
  addToCartButtonText: {
    fontFamily: fonts.NORMAL,
    color: colours.APP_THEME_COLOR,
    fontSize: 12,
  },
  commentIcon: {
    alignSelf: 'flex-end',
  },
});
