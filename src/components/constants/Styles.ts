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
    color: colors.textColor,
  },
  header: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: colors.bannerColor,
    paddingVertical: 15,
  },
  footer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: colors.bannerColor,
    padding: 15,
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
    color: colors.textColor,
  },
  gamecard: {},
  gamecardContainer: {marginBottom: 10, borderRadius: 10},
  gamecardInternal: {
    flexDirection: 'row',
    height: sizes.cardHeight,
  },
  gameTitle: {fontSize: 30, fontWeight: 'bold'},
  textLabel: {
    color: colors.textColor,
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
