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
            showTitle: `SpongeBob SquarePants`,
            showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/5h0EU2lqBb03dp5vtRuUHJwqzem.jpg`,
            showLink: `https://www.serializd.com/show/SpongeBob-SquarePants-387`,
            showReview: `sponch boy :)`,
        },
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
                },                {
                    showTitle: `Gilmore Girls`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/gwtzCwU2wdLLf8oejQu2TINiWfQ.jpg`,
                    showLink: `https://www.serializd.com/show/Gilmore-Girls-4586`,
                    showReview: ``,
                },
                {
                    showTitle: `Malcolm in the Middle`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/ckLLIsNy3Z0Go1PYHA2PHzVymUA.jpg`,
                    showLink: `https://www.serializd.com/show/Malcolm-in-the-Middle-2004`,
                    showReview: `fire`,
                },
                {
                    showTitle: `Chernobyl`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg`,
                    showLink: `https://www.serializd.com/show/Chernobyl-87108`,
                    showReview: ``,
                },
                {
                    showTitle: `Monk`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/3axGMbUecXXOPSeG47v2i9wK5y5.jpg`,
                    showLink: `https://www.serializd.com/show/Monk-1695`,
                    showReview: `this show gave me ocd and im only half joking.`,
                },
                {
                    showTitle: `Firefly`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/vZcKsy4sGAvWMVqLluwYuoi11Kj.jpg`,
                    showLink: `https://www.serializd.com/show/Firefly-1437`,
                    showReview: `proabably the most tragic cancelation of a show ever. apparently it wasnt even because it didnt get good numbers, but because of fox network drama. so wack!!! 10/10 scifi series i wish i lived in the universe where we got 8 seasons...`,
                },
                {
                    showTitle: `Better Call Saul`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg`,
                    showLink: `https://www.serializd.com/show/Better-Call-Saul-60059`,
                    showReview: `better than breaking bad and im screaming from the rooftops`,
                },
                {
                    showTitle: `Mad Men`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/7v8iCNzKFpdlrCMcqCoJyn74Nsa.jpg`,
                    showLink: `https://www.serializd.com/show/Mad-Men-1104`,
                    showReview: ``,
                },
                {
                    showTitle: `The Sopranos`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/rTc7ZXdroqjkKivFPvCPX0Ru7uw.jpg`,
                    showLink: `https://www.serializd.com/show/The-Sopranos-1398`,
                    showReview: ``,
                },
                {
                    showTitle: `Flight of the Conchords`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/ynboK8qiOTz0X44r59LpfF8jBP5.jpg`,
                    showLink: `https://www.serializd.com/show/Flight-of-the-Conchords-2742`,
                    showReview: ``,
                },
                {
                    showTitle: `The Mighty Boosh`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/dKlYEo7mc1XLN2PutYlRuTLUXlC.jpg`,
                    showLink: `https://www.serializd.com/show/The-Mighty-Boosh-7166`,
                    showReview: ``,
                },
                {
                    showTitle: `MINDHUNTER`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/fbKE87mojpIETWepSbD5Qt741fp.jpg`,
                    showLink: `https://www.serializd.com/show/MINDHUNTER-67744`,
                    showReview: `cant believe they cancelled this shit man what were they thinking?`,
                },
                {
                    showTitle: `The Haunting of Hill House`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/38PkhBGRQtmVx2drvPik3F42qHO.jpg`,
                    showLink: `https://www.serializd.com/show/The-Haunting-of-Hill-House-72844`,
                    showReview: `very cool and scary :) hill house has ^^the best^/^ horror scene in any movie/show ever. its been 8 years and i still think about it like every week [up]LMAO[/up] its such a mindfuck`,
                },
                {
                    showTitle: `The Expanse`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/8djpxDeWpINnGhjpFXQjnBe6zbx.jpg`,
                    showLink: `https://www.serializd.com/show/The-Expanse-63639`,
                    showReview: ``,
                },
                {
                    showTitle: `Severance`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg`,
                    showLink: `https://www.serializd.com/show/Severance-95396`,
                    showReview: ``,
                },
                {
                    showTitle: `Hannibal`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/pbV2eLnKSIm1epSZt473UYfqaeZ.jpg`,
                    showLink: `https://www.serializd.com/show/Hannibal-40008`,
                    showReview: ``,
                },
                {
                    showTitle: `The Sound of Your Heart`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/l2EzNJQNh2onlefGuucboFy8WV8.jpg`,
                    showLink: `https://www.serializd.com/show/The-Sound-of-Your-Heart-68945`,
                    showReview: ``,
                },
                {
                    showTitle: `The IT Crowd`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/qZXkBoOUYzvKI4UCMzDQ5kqWHjh.jpg`,
                    showLink: `https://www.serializd.com/show/The-IT-Crowd-2490`,
                    showReview: ``,
                },
                {
                    showTitle: `Hello, My Twenties!`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/4MdSbKFGAzgFhF407e9fcZreqvm.jpg`,
                    showLink: `https://www.serializd.com/show/Hello%2C-My-Twenties!-67014`,
                    showReview: `season 2 never happened`,
                },
                {
                    showTitle: `SpongeBob SquarePants`,
                    showPoster: `https://serializd-tmdb-images.b-cdn.net/t/p/w500/5h0EU2lqBb03dp5vtRuUHJwqzem.jpg`,
                    showLink: `https://www.serializd.com/show/SpongeBob-SquarePants-387`,
                    showReview: `sponch boy :)`,
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
