import {Game} from '../model/game';
import db from './db';

const getAllGames = () => {
  return db.getCollection();
};

const getGameById = (id: number) => {
  return db.getCollection().find(elem => elem.game_id == id);
};

const removeGameById = (id: number) => {
  db.setCollection(db.getCollection().filter(elem => elem.game_id != id));
};

export default {
  getAllGames,
  getGameById,
  removeGameById,
};
