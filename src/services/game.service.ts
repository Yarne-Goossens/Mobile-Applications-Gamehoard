// import gameDb from '../domain/database/game.db';
import gameAsync from '../domain/database/game.async';
import {Game} from '../types/types';

const getAllGames = async (): Promise<Game[]> => {
  console.log('service-GetAll');
  return await gameAsync.getAllGames();
};

const getGameById = async (id: number): Promise<Game> => {
  console.log('service-GetId');
  return await gameAsync.getGameById(id);
};

const addGame = async (game: Game) => {
  return await gameAsync.addGame(game);
};

const updateGame = async (id: number, game: Game) => {
  return await gameAsync.updateGame(id, game);
};

const removeGameById = async (id: number) => {
  console.log('service-RemoveId');
  return await gameAsync.removeGameById(id);
};

const sampleData = async () => {
  await addGame({game_id: 1, name: 'God of War', genre: ['Action'], price: 10});
  await addGame({game_id: 2, name: 'Among Us', genre: ['Comedy'], price: 5});
  await addGame({
    game_id: 3,
    name: 'Risk of Rain',
    genre: ['Rogue-Like'],
    price: 20,
  });
};

export default {
  getAllGames,
  getGameById,
  addGame,
  updateGame,
  removeGameById,
  sampleData,
};
