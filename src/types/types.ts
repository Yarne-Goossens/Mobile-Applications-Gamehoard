export type Game = {
  game_id: string;
  name: string;
  genre: string[];
  added_on: string;
  price: number;
  msrp?: number;
  rating?: number;
  critic_rating?: number;
  user_rating?: number;
  platforms?: string[];
  multiplayer?: boolean;
  coop?: string;
  playtime?: number;
  completiontime?: number;
  favorite?: boolean;
  physical?: boolean;
  picture?: string;
};
