import gameDb from '../domain/database/game.db';

const getAllGames = () => {
  console.log('service-GetAll');
  return gameDb.getAllGames();
};

const getGameById = (id: number) => {
  console.log('service-GetId');
  return gameDb.getGameById(id);
};

const removeGameById = (id: number) => {
  console.log('service-RemoveId');
  return gameDb.removeGameById(id);
};

export default {
  getAllGames,
  getGameById,
  removeGameById,
};
