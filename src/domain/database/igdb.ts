import igdb from 'igdb-api-node';

const getGamesIgdb =async () => {
    try{
        const response = await igdb('6jxtr870r4ia49qbd8b7bmj7z3nm53', '3z0amkcuwxn8tttopdm6zc8fqnuc95').request('/games')
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export default {
    getGamesIgdb
};