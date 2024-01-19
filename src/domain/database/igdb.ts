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

      const genreIds = response.data[i].genres.join(',');
      const genresFromIgdb = await igdb(
        '6jxtr870r4ia49qbd8b7bmj7z3nm53',
        '3z0amkcuwxn8tttopdm6zc8fqnuc95',
      )
        .fields('name')
        .where(`id = (${genreIds})`)
        .request('/genres');
      const genreList = genresFromIgdb.data.map((genre: any) => genre.name);

      const platformIds = response.data[i].platforms.join(',');
      const platformsFromIgdb = await igdb(
        '6jxtr870r4ia49qbd8b7bmj7z3nm53',
        '3z0amkcuwxn8tttopdm6zc8fqnuc95',
      )
        .fields('name')
        .where(`id = (${platformIds})`)
        .request('/platforms');
      const platformList = platformsFromIgdb.data.map(
        (platform: any) => platform.name,
      );

      igdbList.push({
        game_id: response.data[i].id.toString(),
        name: response.data[i].name,
        genre: genreList,
        user_rating: response.data[i].rating
          ? (response.data[i].rating / 10)?.toFixed(1)
          : '',
        critic_rating: response.data[i].aggregated_rating
          ? response.data[i].aggregated_rating?.toFixed(1)
          : '',
        platforms: platformList,
        multiplayer: response.data[i].multiplayer_modes ? true : false,
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
