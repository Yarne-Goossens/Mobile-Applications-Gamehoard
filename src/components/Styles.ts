import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 'auto',
    paddingLeft: 15,
    color: 'darkslateblue',
  },
  header: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#FF2800',
    paddingVertical: 15,
  },
  footer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#FF2800',
    padding: 15,
  },
  text: {
    color: 'darkslateblue',
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
    color: 'darkslateblue',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  textGenre: {
    color: 'darkslateblue',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    // flexWrap: 'wrap',
  },
});

export default styles;
