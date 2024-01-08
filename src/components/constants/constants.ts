import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
//borderColor: 'red', borderWidth: 2

export const colors = {
  bannerColor: '#FF2800',
  textColor: 'darkslateblue',
  iconColor: 'darkslateblue',
  iconFavorite: 'red',
  lightGray: '#b2b2b2',
  light: '#fbfbfb',
  white: '#fff',
  black: '#000',
};

export const sizes = {
  width,
  height,
  cardHeight: 250,
  radius: 18,
  textSize: 18,
};

export const padding = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};
