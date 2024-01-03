import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
  bannerColor: '#FF2800',
  textColor: 'darkslateblue',
  iconColor: 'darkslateblue',
  lightGray: '#b2b2b2',
  light: '#fbfbfb',
  white: '#fff',
  black: '#000',
};

export const sizes = {
  width,
  height,
  radius: 18,
  textSize: 18,
};

export const padding = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};
