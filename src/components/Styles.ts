import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 'auto',
    color: 'darkslateblue',
  },
  header: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#FF2800',
    padding: 15,
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
  },
  gamecard: {
    flexDirection: 'row',
  },
  textGame: {
    color: 'darkslateblue',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
});

export default styles;
