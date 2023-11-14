export type Game = {
  game_id?: number;
  name: string;
  genre: string[];
  price: number;
  msrp?: number;
  rating?: number;
  platforms?: string[];
  singleplayer?: boolean;
  multiplayer?: boolean;
  coop?: string;
  playtime?: number;
  completiontime?: number;
  picture?: string;
};
