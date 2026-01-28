import { Component, signal, WritableSignal, OnInit, OnDestroy  } from '@angular/core';

import { FavoriteShow } from '../../../models/favorite-show';

import { Marquee } from '../../marquee/marquee';



@Component({
    selector: 'app-shows-i-like',
    imports: [],
    templateUrl: './shows-i-like.html',
    styleUrl: './shows-i-like.css'
})

export class ShowsILike implements OnInit, OnDestroy {

    // ======SHOWS ARRAY======
    // ======           ======
            showArray: FavoriteShow[] = [
                {
                    showTitle: `Twin Peaks`,
                    showPoster: ``,
                    showLink: ``,
                    showReview: ``,
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
            serializdProfile: string = ``;
            serializdProfilePic: string = ``;
            serializdProfileStyle: string = `serializd-profile`;

            showPosterStyle: string = `current-show-poster`;
            showString: string = `show`;
            
            currentShowTitle: WritableSignal<string> = signal(``);
            currentShowPoster: WritableSignal<string> = signal(``);
            currentShowLink: WritableSignal<string> = signal(``);
            currentShowReview: WritableSignal<string> = signal(``);
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

}
