import { FavoriteGame } from "./favorite-game";
import { FavoriteMovie } from "./favorite-movie";
import { FavoriteShow } from "./favorite-show";
import { FavoriteSong } from "./favorite-song";
import { FavoriteAnime } from "./favorite-anime";

export type FavoriteStuff = FavoriteMovie | FavoriteSong | FavoriteGame | FavoriteShow | FavoriteAnime | null ;