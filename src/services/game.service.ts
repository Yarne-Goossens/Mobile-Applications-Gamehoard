import gameDb from '../domain/database/game.db';

const getAllGames = () => {
  console.log(gameDb.getAllGames());
  return gameDb.getAllGames();
};

export default {
  getAllGames,
};
