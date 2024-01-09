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
  console.log(game);
  return await gameAsync.updateGame(id, game);
};

const searchGame = async (searchterm: string) => {
  console.log('service-Search');
  let games = await getAllGames();
  console.log(
    await games.filter(game =>
      game.name.toLowerCase().includes(searchterm.toLowerCase()),
    ),
  );
  return await games.filter(game =>
    game.name.toLowerCase().includes(searchterm.toLowerCase()),
  );
};

const sampleData = async () => {
  await addGame({
    game_id: '1',
    name: 'God of War',
    genre: ['Action'],
    price: 10,
    added_on: getDate(),
    platforms: ['Steam'],
    rating: 9,
    playtime: 120,
    picture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png',
  });
  await addGame({
    game_id: '2',
    name: 'Among Us',
    genre: ['Comedy'],
    price: 5,
    added_on: getDate(),
    platforms: ['Steam'],
    rating: 5,
    playtime: 30,
    picture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6kqt.png',
  });
  await addGame({
    game_id: '3',
    name: 'Risk of Rain',
    genre: ['Rogue-Like', 'Action'],
    price: 20,
    added_on: getDate(),
    platforms: ['Steam'],
    rating: 8,
    playtime: 70,
    picture: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2k2z.png',
  });
};

export default {
  getAllGames,
  getGameById,
  addGame,
  updateGame,
  removeGameById,
  favoriteGame,
  searchGame,
  sampleData,
};
