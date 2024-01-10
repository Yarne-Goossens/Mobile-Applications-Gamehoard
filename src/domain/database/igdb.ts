import igdb from 'igdb-api-node';

const getGamesIgdb = async (searchValue: string) => {
  const timer = (ms: number | undefined) =>
    new Promise(res => setTimeout(res, ms));

  const igdbList = [];
  try {
    const response = await igdb(
      '6jxtr870r4ia49qbd8b7bmj7z3nm53',
      '3z0amkcuwxn8tttopdm6zc8fqnuc95',
    )
      .fields(
        'name,genres,aggregated_rating,rating,platforms,multiplayer_modes,cover ',
      )
      .limit(5)
      .search(searchValue)
      .request('/games');
    for (let i = 0; i < response.data.length; i++) {
      const cover = await igdb(
        '6jxtr870r4ia49qbd8b7bmj7z3nm53',
        '3z0amkcuwxn8tttopdm6zc8fqnuc95',
      )
        .fields('url')
        .where(`id = ${response.data[i].cover}`)
        .request('/covers');
      igdbList.push({
        game_id: response.data[i].id.toString(),
        name: response.data[i].name,
        genre: response.data[i].genres,
        rating: response.data[i].rating,
        platforms: response.data[i].platforms,
        multiplayer: response.data[i].multiplayer_modes,
        picture: 'https:' + cover.data[0].url.replace('t_thumb', 't_cover_big'),
      });
      await timer(250);
    }
    console.log(igdbList);
    return igdbList;
  } catch (error) {
    console.log(error);
    return igdbList;
  }
};

export default {
  getGamesIgdb,
};
