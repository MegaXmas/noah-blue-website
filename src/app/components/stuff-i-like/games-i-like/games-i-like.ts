import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { FavoriteGame } from '../../../models/favorite-game';
import { Marquee } from '../../marquee/marquee';

@Component({
  selector: 'app-games-i-like',
  imports: [Marquee],
  templateUrl: './games-i-like.html',
  styleUrl: './games-i-like.css'
})
export class GamesILike implements OnInit, OnDestroy {

  gameArray: FavoriteGame[] = []; 

  discordProfile: string = ``;
  discordProfilePic: string = ``;
  discordProfileStyle: string = `discord-profile`;

  gamePosterStyle: string = `current-game-art`;
  gameString: string = `game`;

  currentGameTitle: WritableSignal<string> = signal(``);
  currentGameArt: WritableSignal<string> = signal(``);
  currentGameLink: WritableSignal<string> = signal(``);
  currentGameReview: WritableSignal<string> = signal(``);

    ngOnInit(): void {

    console.log(`GAMESILIKECOMPONENT: ` + this.gameArray.length + ` games displayed`)
    // console.log(`GAMESILIKECOMPONENT: ` + JSON.stringify(this.gameArray))
  };

  ngOnDestroy(): void {

    console.log(`leaving games-i-like page`)
  };

}