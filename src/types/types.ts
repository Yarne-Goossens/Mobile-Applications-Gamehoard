export type Game = {
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
};
