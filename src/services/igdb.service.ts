import igdb from '../domain/database/igdb'

const getGamesIgdb = async (searchValue: string) => {
    console.log('service-GetIgdbGames');
    return await igdb.getGamesIgdb(searchValue);
};

export default {
    getGamesIgdb
};