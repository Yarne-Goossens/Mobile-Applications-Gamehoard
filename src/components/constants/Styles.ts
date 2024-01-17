import {Platform, StyleSheet} from 'react-native';
import {colors, sizes} from './Constants';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: Platform.OS === 'android' ? 30 : 30,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 'auto',
    paddingLeft: 15,
    paddingRight: 12,
    color: colors.titleColor,
  },
  logo: {
    height: Platform.OS === 'android' ? 50 : 38,
    width: Platform.OS === 'android' ? 50 : 38,
    borderRadius: Platform.OS === 'android' ? 15 : 8,
    resizeMode: 'contain',
  },
  header: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: colors.bannerColor,
    paddingVertical: Platform.OS === 'android' ? 5 : 0,
  },
  footer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: colors.bannerColor,
    padding: 15,
  },
  tabtext: {
    color: colors.titleColor,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 5,
  },
  iconTab: {
    verticalAlign: 'middle',
    fontSize: 35,
    paddingHorizontal: 10,
    // paddingVertical: 5,
    color: colors.titleColor,
  },
  text: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textHeader: {
    color: colors.textColor,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  view: {
    backgroundColor: 'black',
  },
  icon: {
    verticalAlign: 'middle',
    padding: 5,
    color: colors.titleColor,
  },
  iconHeader: {
    verticalAlign: 'middle',
    paddingVertical: Platform.OS === 'android' ? 5 : 0,
    paddingHorizontal: Platform.OS === 'android' ? 5 : 5,
    color: colors.titleColor,
  },
  iconSearch: {
    verticalAlign: 'middle',
    padding: 5,
    color: colors.labelColor,
  },
  gamecard: {},
  gamecardContainer: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: colors.iconColor,
  },
  gamecardInternal: {
    flexDirection: 'row',
    height: sizes.cardHeight,
    backgroundColor: colors.iconColor,
  },
  gameTitle: {fontSize: 30, fontWeight: 'bold'},
  textLabel: {
    color: colors.labelColor,
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 6,
  },
  textGame: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 6,
  },
  textGenre: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 6,
  },
  textInput: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 6,
    paddingVertical: 7,
    marginVertical: 5,
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default styles;
