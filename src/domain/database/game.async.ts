import {Game} from '../../types/types';
import async from './async';

const getAllGames = () => {
  console.log('async-getAll');
  return async.getAll();
};

const getGameById = (id: number) => {
  console.log('async-getId');
  return async.getItem(id.toString());
};

const addGame = (game: Game) => {
  console.log('async-add');
  async.addItem(game.game_id.toString(), game);
};

const updateGame = (id: number, game: Game) => {
  console.log('async-update');
  async.updateItem(id.toString(), game);
};

const removeGameById = (id: number) => {
  console.log('async-remove');
  async.removeItem(id.toString());
};

export default {
  getAllGames,
  getGameById,
  addGame,
  updateGame,
  removeGameById,
};
