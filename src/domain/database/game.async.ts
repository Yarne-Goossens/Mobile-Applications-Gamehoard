import {Game as GameInput} from '../../types/types';
import {Game} from '../model/game';
import async from './async';

const getAllGames = (): Promise<Game[]> => {
  console.log('async-getAll');
  return async.getAll();
};

const getGameById = (id: string): Promise<Game> => {
  console.log('async-getId');
  return async.getItem(id);
};

const addGame = (game: GameInput) => {
  console.log('async-add');
  async.addItem(game.game_id, game);
};

const updateGame = (id: string, game: GameInput) => {
  console.log('async-update');
  async.updateItem(id, game);
};

const removeGameById = (id: string) => {
  console.log('async-remove');
  async.removeItem(id);
};

export default {
  getAllGames,
  getGameById,
  addGame,
  updateGame,
  removeGameById,
};
