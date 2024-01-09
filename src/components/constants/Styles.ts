import {StyleSheet} from 'react-native';
import {colors, sizes} from './Constants';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 'auto',
    paddingLeft: 15,
    color: colors.titleColor,
  },
  header: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: colors.bannerColor,
    paddingVertical: 10,
  },
  footer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: colors.bannerColor,
    padding: 15,
  },
  tabtext: {
    color: colors.titleColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  view: {
    backgroundColor: 'black',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  icon: {
    verticalAlign: 'middle',
    padding: 5,
    color: colors.titleColor,
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
});

export default styles;
