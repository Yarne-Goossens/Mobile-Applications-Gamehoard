export class Game {
  game_id: string;
  name: string;
  genre: string[];
  added_on: string;
  price: number;
  msrp?: number;
  rating?: number;
  user_rating?: number;
  critic_rating?: number;
  platforms?: string[];
  multiplayer?: boolean;
  coop?: string;
  playtime?: number;
  completiontime?: number;
  favorite?: boolean;
  physical?: boolean;
  picture?: string;

  constructor(game: {
    game_id: string;
    name: string;
    genre: string[];
    added_on: string;
    price: number;
    msrp?: number;
    rating?: number;
    user_rating?: number;
    critic_rating?: number;
    platforms?: string[];
    multiplayer?: boolean;
    coop?: string;
    playtime?: number;
    completiontime?: number;
    favorite?: boolean;
    physical?: boolean;
    picture?: string;
  }) {
    this.game_id = game.game_id;
    this.name = game.name;
    this.genre = game.genre;
    this.added_on = game.added_on;
    this.price = game.price;
    this.msrp = game.msrp;
    this.rating = game.rating;
    this.user_rating = game.user_rating;
    this.critic_rating = game.critic_rating;
    this.platforms = game.platforms;
    this.multiplayer = game.multiplayer;
    this.coop = game.coop;
    this.playtime = game.playtime;
    this.completiontime = game.completiontime;
    this.favorite = game.favorite;
    this.physical = game.physical;
    this.picture = game.picture;
  }
}
