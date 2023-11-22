import {Game as GameInput} from '../../types/types';
import {Game} from '../model/game';
import async from './async';

const getAllGames = (): Promise<Game[]> => {
  console.log('async-getAll');
  return async.getAll();
};

const getGameById = (id: number): Promise<Game> => {
  console.log('async-getId');
  return async.getItem(id.toString());
};

const addGame = (game: GameInput) => {
  console.log('async-add');
  async.addItem(game.game_id.toString(), game);
};

const updateGame = (id: number, game: GameInput) => {
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
