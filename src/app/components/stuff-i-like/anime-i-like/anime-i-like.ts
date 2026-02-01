import { Component, signal, WritableSignal, OnInit, OnDestroy  } from '@angular/core';

import { FavoriteAnime } from '../../../models/favorite-anime';

import { Marquee } from '../../marquee/marquee';



@Component({
    selector: 'app-anime-i-like',
    imports: [Marquee],
    templateUrl: './anime-i-like.html',
    styleUrl: './anime-i-like.css'
})

export class AnimeILike implements OnInit, OnDestroy {

    // ======ANIME ARRAY======
    // ======           ======
            animeArray: FavoriteAnime[] = [
                {
                    animeTitle: ``,
                    animePoster: ``,
                    animeLink: ``,
                    animeReview: ``,
                },                               
            ].map((an) => ({ ...an, type: 'anime' as const }));
    // ======           ======



    // ======SIGNALS AND PROPERTIES======
    // ======                      ======
            myAnimeListProfile: string = `https://myanimelist.net/animelist/noahblueily`;
            myAnimeListProfilePic: string = `https://cdn.myanimelist.net/s/common/userimages/80ebbbdb-87fc-4e5e-bff8-db05dc7fe92a_225w?s=670bec3c4640735847f9c482e93cb6a4`;
            myAnimeListProfileStyle: string = `myAnimeList-profile`;
    
            animePosterStyle: string = `current-anime-poster`;
            animeString: string = `anime`;
    // ======                      ======



    // ======ON INIT/DESTROY======
    // ======               ======
            ngOnInit(): void {
                console.log(`ANIMEIILIKECOMPONENT: ` + this.animeArray.length + ` anime displayed`);
                // console.log(`ANIMEIILIKECOMPONENT: ` + JSON.stringify(this.animeArray))
            }
    
            ngOnDestroy(): void {
                console.log(`leaving anime-i-like page`);
            }
    // ======               ======


    // ======DEPRECATED STUFF IM SCARED TO DELETE FOR NOW======
    // ======                                            ======
    // ======* UTILITY SIGNALS ======*
        currentAnimeTitle: WritableSignal<string> = signal(``);
        currentAnimePoster: WritableSignal<string> = signal(``);
        currentAnimeLink: WritableSignal<string> = signal(``);
        currentAnimeReview: WritableSignal<string> = signal(``);
    // ======                                            ======
}