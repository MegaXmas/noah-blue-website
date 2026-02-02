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
                    animeTitle: `One Piece`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1244/138851.jpg`,
                    animeLink: `https://myanimelist.net/anime/21/One_Piece`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Steins;Gate`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1935/127974.jpg`,
                    animeLink: `https://myanimelist.net/anime/9253/Steins_Gate`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Anohana: The Flower We Saw That Day`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/5/79697.jpg`,
                    animeLink: `https://myanimelist.net/anime/9989/Ano_Hi_Mita_Hana_no_Namae_wo_Bokutachi_wa_Mada_Shiranai`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Toradora!`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/13/22128.jpg`,
                    animeLink: `https://myanimelist.net/anime/4224/Toradora`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Monogatari Series`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/11/75274.jpg`,
                    animeLink: `https://myanimelist.net/anime/5081/Bakemonogatari`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Your Name.`,
                    animePoster: `https://myanimelist.net/anime/32281/Kimi_no_Na_wa`,
                    animeLink: `https://myanimelist.net/anime/32281/Kimi_no_Na_wa`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Monster`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/10/18793.jpg`,
                    animeLink: `https://myanimelist.net/anime/19/Monster`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Beck: Mongolian Chop Squad`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/11/11636.jpg`,
                    animeLink: `https://myanimelist.net/anime/57/Beck`,
                    animeReview: ``,
                },
                {
                    animeTitle: `5 Centimeters per Second`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1410/112994.jpg`,
                    animeLink: `https://myanimelist.net/anime/1689/Byousoku_5_Centimeter`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Nana`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/2/11232.jpg`,
                    animeLink: `https://myanimelist.net/anime/877/Nana`,
                    animeReview: ``,
                },
                {
                    animeTitle: `KADO: The Right Answer`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/3/85255.jpg`,
                    animeLink: `https://myanimelist.net/anime/32032/Seikaisuru_Kado`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Naruto + Naruto: Shippuuden`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1141/142503.jpg`,
                    animeLink: `https://myanimelist.net/anime/20/Naruto`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Katanagatari`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1112/119225.jpg`,
                    animeLink: `https://myanimelist.net/anime/6594/Katanagatari`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Welcome to the N.H.K.`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/3/52675.jpg`,
                    animeLink: `https://myanimelist.net/anime/1210/NHK_ni_Youkoso`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Paranoia Agent`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/7/10240.jpg`,
                    animeLink: `https://myanimelist.net/anime/323/Mousou_Dairinin`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Dennou Coil`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/5/12844.jpg`,
                    animeLink: `https://myanimelist.net/anime/2164/Dennou_Coil`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Kids on the Slope`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1604/98654.jpg`,
                    animeLink: `https://myanimelist.net/anime/12531/Sakamichi_no_Apollon`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Planetes`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1209/142900.jpg`,
                    animeLink: `https://myanimelist.net/anime/329/Planetes`,
                    animeReview: ``,
                },
                {
                    animeTitle: `The Pet Girl of Sakurasou`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/4/43643.jpg`,
                    animeLink: `https://myanimelist.net/anime/13759/Sakura-sou_no_Pet_na_Kanojo`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Trigun`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1130/120002.jpg`,
                    animeLink: `https://myanimelist.net/anime/6/Trigun`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Parasyte: The Maxim`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/3/73178.jpg`,
                    animeLink: `https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Nagi no Asu kara`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/7/53549.jpg`,
                    animeLink: `https://myanimelist.net/anime/16067/Nagi_no_Asu_kara`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Ghost in the Shell: Stand Alone Complex`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/11/50857.jpg`,
                    animeLink: `https://myanimelist.net/anime/467/Koukaku_Kidoutai__Stand_Alone_Complex`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Durarara!!`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/10/71772.jpg`,
                    animeLink: `https://myanimelist.net/anime/6746/Durarara`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Mushishi Series`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/2/73862.jpg`,
                    animeLink: `https://myanimelist.net/anime/457/Mushishi`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Made in Abyss`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/6/86733.jpg`,
                    animeLink: `https://myanimelist.net/anime/34599/Made_in_Abyss`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Bakuman.`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/6/26138.jpg`,
                    animeLink: `https://myanimelist.net/anime/7674/Bakuman`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Chihayafuru`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/3/35749.jpg`,
                    animeLink: `https://myanimelist.net/anime/10800/Chihayafuru`,
                    animeReview: ``,
                },
                {
                    animeTitle: `My Teen Romantic Comedy SNAFU`,
                    animePoster: `https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru/pics`,
                    animeLink: `https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Kaguya-sama: Love is War`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1295/106551.jpg`,
                    animeLink: `https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Fullmetal Alchemist + Fullmetal Alchemist: Brotherhood`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1208/94745.jpg`,
                    animeLink: `https://myanimelist.net/anime/121/Fullmetal_Alchemist`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Arakawa Under the Bridge`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1019/98620.jpg`,
                    animeLink: `https://myanimelist.net/anime/7647/Arakawa_Under_the_Bridge`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Higurashi: When They Cry`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/12/19634.jpg`,
                    animeLink: `https://myanimelist.net/anime/934/Higurashi_no_Naku_Koro_ni`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Daily Lives of High School Boys`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/3/33257.jpg`,
                    animeLink: `https://myanimelist.net/anime/11843/Danshi_Koukousei_no_Nichijou`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Nichijou`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/3/75617.jpg`,
                    animeLink: `https://myanimelist.net/anime/10165/Nichijou`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Detroit Metal City`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/3/9853.jpg`,
                    animeLink: `https://myanimelist.net/anime/3702/Detroit_Metal_City`,
                    animeReview: ``,
                },
                {
                    animeTitle: `The Disastrous Life of Saiki K Ψ`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1973/142750.jpg`,
                    animeLink: `https://myanimelist.net/anime/33255/Saiki_Kusuo_no_%CE%A8-nan`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Beelzebub`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/3/28013.jpg`,
                    animeLink: `https://myanimelist.net/anime/9513/Beelzebub`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Gintama`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/10/73274.jpg`,
                    animeLink: `https://myanimelist.net/anime/918/Gintama`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Haikyuu!!`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/7/76014.jpg`,
                    animeLink: `https://myanimelist.net/anime/20583/Haikyuu`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Hajime no Ippo`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/4/86334.jpg`,
                    animeLink: `https://myanimelist.net/anime/263/Hajime_no_Ippo`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Kuroko's Basketball`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/11/50453.jpg`,
                    animeLink: `https://myanimelist.net/anime/11771/Kuroko_no_Basket`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Boku no Hero Academia (SPECIFICALLY the 3rd Season)`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/1319/92084.jpg`,
                    animeLink: `https://myanimelist.net/anime/36456/Boku_no_Hero_Academia_3rd_Season`,
                    animeReview: ``,
                },
                {
                    animeTitle: `Kaiji Series`,
                    animePoster: `https://cdn.myanimelist.net/images/anime/12/80032.jpg`,
                    animeLink: `https://myanimelist.net/anime/3002/Gyakkyou_Burai_Kaiji__Ultimate_Survivor`,
                    animeReview: ``,
                },
                {
                    animeTitle: ``,
                    animePoster: ``,
                    animeLink: ``,
                    animeReview: ``,
                },
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