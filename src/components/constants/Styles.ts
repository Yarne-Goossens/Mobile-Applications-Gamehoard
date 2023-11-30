import {StyleSheet} from 'react-native';
import constants from './constants';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 'auto',
    paddingLeft: 15,
    color: constants.textColor,
  },
  header: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: constants.bannerColor,
    paddingVertical: 15,
  },
  footer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: constants.bannerColor,
    padding: 15,
  },
  text: {
    color: constants.textColor,
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
  },
  gamecard: {},
  gamecardContainer: {marginBottom: 10},
  gamecardInternal: {
    flexDirection: 'row',
  },
  gameTitle: {fontSize: 30},
  textGame: {
    color: constants.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  textGenre: {
    color: constants.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    // flexWrap: 'wrap',
  },
});

export default styles;
