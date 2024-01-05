import igdb from '../domain/database/igdb'

const getGamesIgdb = async () => {
    console.log('service-GetIgdbGames');
    return await igdb.getGamesIgdb();
};

export default {
    getGamesIgdb
};