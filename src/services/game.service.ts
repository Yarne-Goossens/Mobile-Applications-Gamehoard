// import gameDb from '../domain/database/game.db';
import gameAsync from '../domain/database/game.async';
import {Game} from '../types/types';

const getAllGames = () => {
  console.log('service-GetAll');
  return gameAsync.getAllGames();
};

const getGameById = (id: number) => {
  console.log('service-GetId');
  return gameAsync.getGameById(id);
};

const addGame = (game: Game) => {
  return gameAsync.addGame(game);
};

const updateGame = (id: number, game: Game) => {
  return gameAsync.updateGame(id, game);
};

const removeGameById = (id: number) => {
  console.log('service-RemoveId');
  return gameAsync.removeGameById(id);
};

const sampleData = () => {
  addGame({game_id: 1, name: 'God of War', genre: ['Action'], price: 10});
  addGame({game_id: 2, name: 'Among Us', genre: ['Comedy'], price: 5});
  addGame({game_id: 3, name: 'Risk of Rain', genre: ['Rogue-Like'], price: 20});
};

export default {
  getAllGames,
  getGameById,
  addGame,
  updateGame,
  removeGameById,
  sampleData,
};
