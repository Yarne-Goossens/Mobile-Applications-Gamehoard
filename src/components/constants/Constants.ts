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

export const sortList = [
  {label: 'Name Asc', value: 'name_asc'},
  {label: 'Name Desc', value: 'name_desc'},
  {label: 'Id Asc', value: 'id_asc'},
  {label: 'Id Desc', value: 'id_desc'},
  {label: 'Genre Asc', value: 'genre_asc'},
  {label: 'Genre Desc', value: 'genre_desc'},
  {label: 'Price Asc', value: 'price_asc'},
  {label: 'Price Desc', value: 'price_desc'},
  {label: 'MSRP Asc', value: 'msrp_asc'},
  {label: 'MSRP Desc', value: 'msrp_desc'},
  {label: 'Added On (Newest->Oldest)', value: 'added_on_asc'},
  {label: 'Added On (Oldest->Newest)', value: 'added_on_desc'},
  {label: 'Completiontime Asc', value: 'completiontime_asc'},
  {label: 'Completiontime Desc', value: 'completiontime_desc'},
  {label: 'Own Rating Asc', value: 'rating_asc'},
  {label: 'Own Rating Desc', value: 'rating_desc'},
  {label: 'User Rating Asc', value: 'user_rating_asc'},
  {label: 'User Rating Desc', value: 'user_rating_desc'},
  {label: 'Critic Rating Asc', value: 'critic_rating_asc'},
  {label: 'Critic Rating Desc', value: 'critic_rating_desc'},
  {label: 'Platforms Asc', value: 'platforms_asc'},
  {label: 'Platforms Desc', value: 'platforms_desc'},
  {label: 'Multiplayer Asc', value: 'multiplayer_asc'},
  {label: 'Multiplayer Desc', value: 'multiplayer_desc'},
  {label: 'Coop Asc', value: 'coop_asc'},
  {label: 'Coop Desc', value: 'coop_desc'},
  {label: 'Physical Asc', value: 'physical_asc'},
  {label: 'Physical Desc', value: 'physical_desc'},
];

export const sortByField = (fieldName: string, sortOrder = 'asc') => {
  return (a: any, b: any) => {
    const aValue = a[fieldName];
    const bValue = b[fieldName];

    const comparison = aValue < bValue ? 1 : -1;

    if (aValue === bValue) {
      // If ratings are equal, sort by name
      return a.name > b.name ? 1 : -1;
    } else {
      return sortOrder === 'asc' ? comparison : -comparison;
    }
  };
};

export const sortByFieldUndefined = (fieldName: string, sortOrder = 'asc') => {
  return (a: any, b: any) => {
    const aValue = a[fieldName];
    const bValue = b[fieldName];

    const comparison = aValue < bValue ? 1 : -1;

    if (aValue === undefined && bValue === undefined) {
      return 0;
    } else if (aValue === undefined) {
      return 1;
    } else if (bValue === undefined) {
      return -1;
    } else if (aValue === bValue) {
      // If ratings are equal, sort by name
      return a.name > b.name ? 1 : -1;
    } else {
      return sortOrder === 'asc' ? comparison : -comparison;
    }
  };
};

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
