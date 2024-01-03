import {StyleSheet} from 'react-native';
import {colors, sizes} from './constants';

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
  },
  gameTitle: {fontSize: 30},
  textGame: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  textGenre: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    // flexWrap: 'wrap',
  },
});

export default styles;
