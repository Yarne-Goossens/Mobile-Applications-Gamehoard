export class Game {
  game_id: string;
  name: string;
  genre: string[];
  added_on: string;
  price: number;
  msrp?: number;
  rating?: number;
  platforms?: string[];
  singleplayer?: boolean;
  multiplayer?: boolean;
  coop?: string;
  playtime?: number;
  completiontime?: number;
  favorite?: boolean;
  picture?: string;

  constructor(game: {
    game_id: string;
    name: string;
    genre: string[];
    added_on: string;
    price: number;
    msrp?: number;
    rating?: number;
    platforms?: string[];
    singleplayer?: boolean;
    multiplayer?: boolean;
    coop?: string;
    playtime?: number;
    completiontime?: number;
    favorite?: boolean;
    picture?: string;
  }) {
    this.game_id = game.game_id;
    this.name = game.name;
    this.genre = game.genre;
    this.added_on = game.added_on;
    this.price = game.price;
    this.msrp = game.msrp;
    this.rating = game.rating;
    this.platforms = game.platforms;
    this.singleplayer = game.singleplayer;
    this.multiplayer = game.multiplayer;
    this.coop = game.coop;
    this.playtime = game.playtime;
    this.completiontime = game.completiontime;
    this.favorite = game.favorite;
    this.picture = game.picture;
  }
}
