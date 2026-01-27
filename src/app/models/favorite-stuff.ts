import { FavoriteGame } from "./favorite-game";
import { FavoriteMovie } from "./favorite-movie";
import { FavoriteShow } from "./favorite-show";
import { FavoriteSong } from "./favorite-song";

export type FavoriteStuff = FavoriteMovie | FavoriteSong | FavoriteGame | FavoriteShow | null ;