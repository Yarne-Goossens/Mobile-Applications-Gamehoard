// import gameDb from '../domain/database/game.db';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import gameAsync from '../domain/database/game.async';
import {Game} from '../types/types';
import {getDate} from './util.service';

const getAllGames = async (): Promise<Game[]> => {
  console.log('service-GetAll');
  return await gameAsync.getAllGames();
};

const getGameById = async (id: string): Promise<Game> => {
  console.log('service-GetId');
  return await gameAsync.getGameById(id);
};

const addGame = async (game: Game) => {
  console.log('service-Add');
  return await gameAsync.addGame(game);
};

const updateGame = async (id: string, game: Game) => {
  console.log('service-Update');
  return await gameAsync.updateGame(id, game);
};

const removeGameById = async (id: string) => {
  console.log('service-RemoveId');
  return await gameAsync.removeGameById(id);
};

const favoriteGame = async (id: string) => {
  console.log('service-Favorite');
  let game = await getGameById(id);
  game.favorite ? (game.favorite = false) : (game.favorite = true);
  // console.log(game);
  return await gameAsync.updateGame(id, game);
};

const searchGame = async (searchterm: string) => {
  console.log('service-Search');
  let games = await getAllGames();
  // console.log(
  //   await games.filter(game =>
  //     game.name.toLowerCase().includes(searchterm.toLowerCase()),
  //   ),
  // );
  return await games.filter(game =>
    game.name.toLowerCase().includes(searchterm.toLowerCase()),
  );
};

const searchGenre = async (searchGenre: string) => {
  console.log('service-SearchGenre');
  let games = await getAllGames();
  console.log(await games.filter(game => game.genre.includes(searchGenre)));
  return await games.filter(game => game.genre.includes(searchGenre));
};

const getAllOfPlatform = async (platform: string): Promise<Game[]> => {
  console.log('service-GetAllOfPlatform');
  let games = await getAllGames();
  // console.log(
  //   await games.filter(game => game.platforms?.some(p => p.includes(platform))),
  // );
  return await games.filter(game =>
    game.platforms?.some(p => p.includes(platform)),
  );
};

const getAllFavorites = async (): Promise<Game[]> => {
  console.log('service-GetAllFavorites');
  let games = await getAllGames();
  // console.log(await games.filter(game => game.favorite));
  return await games.filter(game => game.favorite);
};

const sampleData = async () => {
  await addGame({
    game_id: '1',
    name: 'God of War',
    genre: ['Action'],
    price: 10,
    added_on: getDate(),
    platforms: ['Steam', 'XBox'],
    playtime: 120,
    rating: 9,
    user_rating: 9.3,
    critic_rating: 96,
    multiplayer: false,
    picture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png',
  });
  await addGame({
    game_id: '2',
    name: 'Among Us',
    genre: ['Indie', 'Strategy'],
    price: 5,
    added_on: getDate(),
    platforms: ['Steam', 'Mac', 'Nintendo Switch'],
    playtime: 30,
    rating: 5,
    user_rating: 7.3,
    critic_rating: 82,
    multiplayer: true,
    coop: '4-15',
    picture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6kqt.png',
  });
  await addGame({
    game_id: '3',
    name: 'Risk of Rain',
    genre: ['Rogue-Like', 'Action'],
    price: 20,
    added_on: getDate(),
    platforms: ['Steam', 'PlayStation'],
    playtime: 70,
    rating: 8,
    user_rating: 7.7,
    critic_rating: 85,
    multiplayer: true,
    coop: '1-4',
    picture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2k2z.png',
  });
  await addGame({
    game_id: '4',
    name: "Baldur's Gate 3",
    added_on: getDate(),
    price: 60,
    user_rating: 9.6,
    critic_rating: 94.5,
    favorite: false,
    multiplayer: true,
    genre: [
      'Role-playing (RPG)',
      'Strategy',
      'Turn-based strategy (TBS)',
      'Tactical',
      'Adventure',
    ],
    platforms: [
      'PC (Microsoft Windows)',
      'Mac',
      'PlayStation 5',
      'Google Stadia',
      'Xbox Series X|S',
    ],
    picture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.jpg',
  });
  await addGame({
    game_id: '5',
    name: 'Super Mario Bros. Wonder',
    added_on: getDate(),
    price: 60,
    user_rating: 8.9,
    critic_rating: 95.0,
    favorite: true,
    multiplayer: true,
    coop: '1-4',
    genre: ['Platform'],
    platforms: ['Nintendo Switch'],
    picture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6nnl.jpg',
  });
};

export default {
  getAllGames,
  getGameById,
  addGame,
  updateGame,
  removeGameById,
  favoriteGame,
  getAllFavorites,
  getAllOfPlatform,
  searchGame,
  searchGenre,
  sampleData,
};
