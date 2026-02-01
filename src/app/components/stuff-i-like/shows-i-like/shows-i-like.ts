import { Component, signal, WritableSignal, OnInit, OnDestroy  } from '@angular/core';

import { FavoriteShow } from '../../../models/favorite-show';

import { Marquee } from '../../marquee/marquee';



@Component({
    selector: 'app-shows-i-like',
    imports: [Marquee],
    templateUrl: './shows-i-like.html',
    styleUrl: './shows-i-like.css'
})

export class ShowsILike implements OnInit, OnDestroy {

    // ======SHOWS ARRAY======
    // ======           ======
            showArray: FavoriteShow[] = [
                {
                    showTitle: `Twin Peaks`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/lA9CNSdo50iQPZ8A2fyVpMvJZAf.jpg`,
                    showLink: `https://www.serializd.com/show/Twin-Peaks-1920`,
                    showReview: `goat`,
                },
                {
                    showTitle: `Pysch`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/fDI15gTVbtW5Sbv5QenqecRxWKJ.jpg`,
                    showLink: `https://www.serializd.com/show/Psych-1447`,
                    showReview: `tha bruthas`,
                },
                {
                    showTitle: `Andor`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/khZqmwHQicTYoS7Flreb9EddFZC.jpg`,
                    showLink: `https://www.serializd.com/show/Andor-83867`,
                    showReview: `best thing star wars has put out since episode 5 and its not even close (excluding episode 3)`,
                },                
                {
                    showTitle: `Dark`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/7CFCzWIZZcnxHke3yAQiGPWXHwF.jpg`,
                    showLink: `https://www.serializd.com/show/Dark-70523`,
                    showReview: `best western time travel show its so msyterious and girtty, and well... dark`,
                },
                {
                    showTitle: `Midnight Mass`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/iYoMZYVD775MtBYJfv6OGY1FsnL.jpg`,
                    showLink: `https://www.serializd.com/show/Midnight-Mass-97400`,
                    showReview: `best horror show/mini series of the modern era`,
                },
                {
                    showTitle: `Malcolm in the Middle`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/ckLLIsNy3Z0Go1PYHA2PHzVymUA.jpg`,
                    showLink: `https://www.serializd.com/show/Malcolm-in-the-Middle-2004`,
                    showReview: `fire`,
                },
                {
                    showTitle: ``,
                    showPoster: ``,
                    showLink: ``,
                    showReview: ``,
                },                                
            ].map((sh) => ({ ...sh, type: 'show' as const }));
    // ======           ======


    // ======SIGNALS AND PROPERTIES======
    // ======                      ======
            serializdProfile: string = `https://www.serializd.com/user/MegaXmas/profile`;
            serializdProfilePic: string = `https://serializd-aws-s3.b-cdn.net/public/user_images/9d18782a-3f14-4e5d-b2e7-f3d00fccd951.jpg`;
            serializdProfileStyle: string = `serializd-profile`;
    
            showPosterStyle: string = `current-show-poster`;
            showString: string = `show`;
    // ======                      ======



    // ======ON INIT/DESTROY======
    // ======               ======
            ngOnInit(): void {
                console.log(`SHOWSILIKECOMPONENT: ` + this.showArray.length + ` shows displayed`);
                // console.log(`SHOWSILIKECOMPONENT: ` + JSON.stringify(this.showArray))
            }
            
            ngOnDestroy(): void {
                console.log(`leaving shows-i-like page`);
            }
    // ======               ======


    // ======DEPRECATED STUFF IM SCARED TO DELETE FOR NOW======
    // ======                                            ======
    // ======* UTILITY SIGNALS ======*
        currentShowTitle: WritableSignal<string> = signal(``);
        currentShowPoster: WritableSignal<string> = signal(``);
        currentShowLink: WritableSignal<string> = signal(``);
        currentShowReview: WritableSignal<string> = signal(``);
    // ======                                            ======
}
