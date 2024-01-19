import {Dimensions, useColorScheme} from 'react-native';
const {width, height} = Dimensions.get('window');
console.log(width, height);

// const isDarkMode = useColorScheme() === 'dark';

export const genreList = [
  'Point-and-Click',
  'Fighting',
  'Shooter',
  'Music',
  'Platform',
  'Puzzle',
  'Racing',
  'Real Time Strategy (RTS)',
  'Turn-based Strategy (TBS)',
  'Strategy',
  'Rogue-Like',
  'Action',
  'Comedy',
  'Simulator',
  'Sport',
  'Tactical',
  'Quiz/Trivia',
  "Beat 'em Up",
  'Pinball',
  'Adventure',
  'Arcade',
  'Visual Novel',
  'Indie',
  'MOBA',
  'Card & Board Game',
];

export const platformList = [
  'Steam',
  'Epic',
  'GOG',
  'PlayStation 4',
  'Xbox One',
  'Nintendo Switch',
  'PC (Microsoft Windows)',
  'Mac',
  'Linux',
  'Xbox 360',
  'PlayStation 3',
  'PlayStation 2',
  'PlayStation',
  'PlayStation Vita',
  'PSP',
  'Nintendo 3DS',
  'Nintendo DS',
  'Nintendo DSi',
  'Wii U',
  'Wii',
  'GameCube',
  'iOS',
  'Android',
];

const colorPalette = {
  primary: '#042940',
  secondary: '#395670', //'#005C53',
  text: '#D4F4FF', //'#9FC131',
  highlight: '#00C6B5', //'#E49D22', //'#DBF227',
  background: '#D6D58E',
};

// export const colors = {
//   bannerColor: '#FF2800',
//   textColor: 'darkslateblue',
//   iconColor: 'darkslateblue',
//   iconFavorite: 'red',
//   lightGray: '#b2b2b2',
//   light: '#fbfbfb',
//   white: '#fff',
//   black: '#000',
// };

export const colors = {
  bannerColor: colorPalette.primary,
  titleColor: colorPalette.text,
  textColor: colorPalette.secondary,
  labelColor: colorPalette.secondary,
  iconColor: colorPalette.text,
  highlightColor: colorPalette.highlight,
  iconFavorite: '#e62400',
  iconCards: '#e62400',
  lightGray: '#b2b2b2',
  light: '#fbfbfb',
  white: '#fff',
  black: '#1A1A1A',
  pureblack: '#000',
};

export const sizes = {
  width,
  height,
  cardHeight: 250,
  radius: 18,
  textSize: 18,
  icon: 30,
  tabIcon: 35,
};

export const padding = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};
