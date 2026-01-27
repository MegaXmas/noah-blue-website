import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';

import { FavoriteGame } from '../../../models/favorite-game';

import { Marquee } from '../../marquee/marquee';



@Component({
    selector: 'app-games-i-like',
    imports: [Marquee],
    templateUrl: './games-i-like.html',
    styleUrl: './games-i-like.css',
})

export class GamesILike implements OnInit, OnDestroy {

    // ======GAMES ARRAY======
    // ======           ======
            gameArray: FavoriteGame[] = [
                {
                    gameTitle: `Super Smash Bros. Melee`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/7/75/Super_Smash_Bros_Melee_box_art.png`,
                    gameLink: `https://smashboards.com/categories/super-smash-bros-melee.4/`,
                    gameReview: `i hate this fkn game man!!!`,
                },
                {
                    gameTitle: `Disco Elysium`,
                    gamePoster: `https://static0.polygonimages.com/wordpress/wp-content/uploads/sharedimages/2024/12/mixcollage-04-dec-2024-08-03-pm-4498.jpg`,
                    gameLink: `https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/`,
                    gameReview: `Disco elysium is such a special game. Its hard to even describe what makes it so great. Its more than the sum of its parts. Its a narrative focused crpg (character role playing game) where u take control over harry dubois, detective assigned to a case in the rundown port town of revachol. Before the start of the game, harry depressedly drunk himself into amnesia, so u can choose to role play as whatever kind of man u want. Who is <i>your</i> harry? 
                    
        The city of revachol and the world of disco elysium have many mysteries for you to solve, people to meet, and hidden secrets to uncover. The writers of the game have built a world so familiar yet unlike ours that its surreal. The dialogue in this game is masterclass, some of the best writing ive ever read ^!^[up]period[/up]^/!^, not just in video games. As you investigate the lynching you meet some truely interesting characters with multiple branching paths of dialogue fo you to choose from. In my first playthrough I choose to be a person who has absolutely lost his mind and logical perspective of the world and himself. When there was an option to say or do something ridiculous I would always choose it. Over time i learned more and more about the “harry” i wanted to experience the game as. I invested all my points into skills that encourage outrageous dialogue choices. I maxed out this schizophrenic dissociative ability which essentially allows u to hallucinate clues and answers to mysteries. Its really cool when u have this skill at high levels. 
                    
        Disco elysium consistently had me laughing out loud at its brilliant comedic writing, but also heavily invested in its world and characters. I was always looking to understand more about this universe. every secret uncovered or mystery solved added more threads to follow to keep you engaged. There are so many perplexing stories and features of this world. The game doesnt shy away from the supernatural. But those enigmatic aspects of this world are used sparingly and respectfully. You always had to hunt these down and invest a lot of time to get anything more than rumors or gossip. 
                    
        Twin peaks is my favorite piece of art ive ever consumed, regardless of the medium (movie, book, game, etc). There is nothing quite like twin peaks in the way it weaves its narrative and mysteries. Many people try to emulate or borderline rip off what twin peaks has, but it never has the authenticity of the original. They always feel as if theyre emulating the “spark” lynch created, but it can never be emulated. Only borrowed. I had a twin peaks sized hole in my heart for years after watching it. I was always looking for more that could give me the feeling i felt when i first experienced that show. So far, disco elysium is the ^!^[up]only[/up]^/!^ thing has seemed to fit. It has the originality, the creativity, the world building, the writing, etc, all of the same level, it feels like the creator’s own “spark” created from their mind. Just like twin peaks, 
        disco elysium inspired countless writers and game developers; they both have essentially created their own genre because of how influential they are. 
                    
        I cant recommend this game enough. 10/10
        `,
                },
                {
                    gameTitle: `Paper Mario: The Thousand Year Door`,
                    gamePoster: `https://i.ebayimg.com/images/g/AwYAAOSwkKBkYEop/s-l1200.jpg`,
                    gameLink: `https://www.nintendo.com/us/store/products/paper-mario-the-thousand-year-door-switch/`,
                    gameReview: `Ttyd (paper mario: the thousand year door) is the most charming game of all time. The artstyle, the characters, the dialogue, ^^[up]the music(!!!!!)[/up]^/^… its all masterfully crafted and woven into a delightful adventure with very little fat around the edges. This game became a fundamental building block from which i formed my (impeccable) taste in media. It is ^^really^/^ funny too– in a particular way i dont really see replicated elsewhere aside from a few other nintendo games. The world of ttyd is really fun to explore. Are u tired of generic video game settings? Instead of a medieval castle town- lets make our hubworld a fucking ^^ghetto^/^ with a goddamn ^^noose^/^ smackdab in the middle of town square. also, were gonna have mario get robbed within the first 5 minutes of gameplay to just to show u were not fuckin around here. Desert world, ice world, lava world… wtf r u talking about man? We are going to become pro wrestlers and rise the ranks through a corrupt fight club while uncovering a disturbing conspiracy. We are gonna go full noir and become hardboiled detectives investigating a who-done-it mystery on a bourgeois train. Oh yea and maybe well stop by the moon too nbd. 
                    
        By the way, this game ^^[up]literally has the best soundtrack i have ever heard in video game.[/up]^/^ its composed by the legendary Yuka Tsujiyoko (composer of the fire emblem games and many more), who has a very recognizable musical style. The soundtrack is so unique, and has such creative use of its synth instruments and dissonant notes to create some seriously memorable pieces of music. The intro track honestly still brings a tear to my eye whenever i hear it. its such an melancholic but hopeful song and really sets the tone for the journey you and ur paper compatriots are about to embark on. Below im going to link my favorite song in ttyd. My favorite song in ^^[up]the entire medium of video games…[/up]^/^ but there are so many classic and unforgettable songs from this game that i cant even link them all.
                    
        In modern times ttyds combat system isnt anything special, but at the time it was kinda genre defining. And it still holds up to this day as one of my favorite rpg combat systems. We dont just click buttons and do damage, we have to actually execute some frame-tight inputs. The ability to interact with the enemies ^^*on their turn*^/^ in a turn-based combat system by foiling their attacks with perfectly timed button presses is so satisfying. It implements a level of skill in the game and makes it possible to optimize combat, create ur own playstyle, and challenge yourself. This is already on top of a novel resource management system that rewards you for being  on point with ur “action command” timings. There is a simple equipment system in the form of “badges” that you can equip to give mario and his friends new moves, special effects, and abilites which allows u to curate your own playstyle. Its really fun to manage this system, as the more powerful the badge, the more “badge points” (aka bp) it costs to equip. some enemies may be dealt with easily by equipping a certain badge, but then u are giving up bp that may make u unequip other badges which will make things more difficult in other aspects. You can increase that bp everytime u level up– instead of increasing ur hp or fp, but tbh leveling up bp is almost always the way to go and its more fun anyway. You have “partners”, which is this games companion system. this is another fun way this game sets itself apart in its combat. The partners can be extremely useful and sometimes downright required in certain situations, as they have key utility abilities that are very satisfying to use. Oh and on top of that, the partners are all quirky and standout characters that each have their own brand of dialogue. they are constantly chiming in and running bits over the course of ur adventure. They all have an ability u can use in the overworld to solve puzzles and traverse the environment, which makes for some seriously challenging puzzles. I underestimated how hard this game can be, because i played it when i was 8 lol. but watching friends who have never played this game try to conquer it for the first time has left me impressed by its “easy to play, hard to master difficulty”. 
                    
        i hope with the extremely successful remaster of ttyd on the switch nintendo will finally uncage the golden goose they have with this formula. I suggest the switch remaster of the game if u have never played it and want the best experience. Theres a lot of qol updates and very minor changes to the experience that make it a paper-mario-die hard-approved remake. By far the most confusing and unfortunate change is the switch from 60fps down to 30fps. Like why????? But unless ur autistic gamer frame rate standards cause u to foam from the mouth and type shit like ^^[up]THIS GAME IS UNPLAYABLE!!!!![/up]^/^ this will probably not affect ur gameplay experience whatsoever.
                    
        The verdict: 11/10 masterpiece, seminal work, and a required play for any gamer.
        `,
                },
                {
                    gameTitle: `Slay The Spire`,
                    gamePoster: `https://www.humblegames.com/wp-content/uploads/2020/03/Slay-the-Spire-Poster-720x1080-1.jpg`,
                    gameLink: `https://store.steampowered.com/app/646570/Slay_the_Spire/`,
                    gameReview: `A wise man (northernlion) once said “if things were accurately priced on the amount of value they give you, slay the spire would cost at least 28 hundred dollars. It should cost the same price as a toyota camry”. Its so true. I love games that have high skill caps and reward you for interacting with its systems and acquiring knowledge. Sts (slay the spire) is a deck-builder roguelike, which probably sounds like gibberish to the uninitiated. Essentially, you start the game with very little options, but as you progress you become more and more powerful by adding better cards to your deck and acquiring “relics” which give u passive abilities. If you die, you start all over from the beginning. Sounds like a bummer, but thats kind of the point. Every “run” of the game is different, and u are put in challenging decision making scenarios every time you play. Even as an experienced player who plays on the highest difficulty, im consistently sitting there agonizing over a decision for minutes when im inevitably faced with something ive never encountered before. Going over the options, their pros and cons, and the risk reward of my choices is essential to getting good at the game. And its so satisfying when that decision u make ends up being beneficial and helping u win. When it fucks u over it feels like shit lmao. But thats the game, u gotta learn from every mistake u make to improve.
                    
        [alert]<u>^!^[up]TANGENTIAL RANT ALERT!!!</u>[/up]^/!^[/alert]
                    
                    
                    
        [tangent]
        I also love the fact that sts does not require any “execution” (Execution, in this context, just means the ability to perform the required inputs at the correct times to get a desired result). As someone who has devoted ^^years^/^ of his life to become a high level player of super smash bros. Melee (ssbm, melee) [see the section about that game for more on my story and opinions of melee]– its so nice to finally be able to sit back, relax, and just use my brain. Ssbm is ^^debatably^/^ the hardest game ever made. Melee demands ^^arthritis causing requirements^/^ of speed and frame-tight button presses from its players. it literally takes years just to be able play at a tournament level and actually win matches. I dont have to do practice drills for hours a day like im in the nba to play sts, i can just play and have fun. My strength was never having good execution in that game, anyway. It was always my problem solving. The barrier of execution to be able to do what you want in melee created a lot of frustration for me when i played, because i know what i am supposed to do, but my fingers are not dexterous enough to keep up with my genius brain. Having a game like sts where there is literally no physical barrier to entry really vibes with me. If i lose, its because i made a mistake or a bad decision– not because i pressed the button a millisecond too late or held my control stick at an angle a few degrees off.
        [/tangent]
                    
        Final review: 10/10 game is addictive and very dangerous for people with self control issues (i am going to play it right now even though i should be doing something more productive haha 🙃)
        `,
                },
                {
                    gameTitle: `Demon's Souls`,
                    gamePoster: `https://m.media-amazon.com/images/M/MV5BYmI1ZTNiMTUtZTllZi00ZGE5LTg1NzgtMWU2OTcyZDBiYjg0XkEyXkFqcGc@._V1_.jpg`,
                    gameLink: `https://www.playstation.com/en-us/games/demons-souls/`,
                    gameReview: `Contrary to most, demons souls was actually my first exposure to the soulsborne universe before it was even an established thing. I had a friends older brother who would put me on to shit i would never have known about otherwise. I learned about n64 games that were before my time and about other games that werent mainstream at the time. I played demons souls for the first time at their house when i was like 14 and i really liked it, but since i didnt have it i only got to about the first boss: ^^the tower knight^/^. This is when i knew this game was gonna be for me. The tower knight is still one of my most memorable boss fights in the series. The boss theme music from this fight is one of the best in the entire series. The scale of it was so mindblowing, defeating something this massive seemed like an insurmountable challenge at the time.I think this is something the souls series excels at even to this day– putting u up against a boss so powerful it feels hopeless. Im just a dude with a sword and shield and im choppin on some grass… how am i supposed to defeat this giant moving fortress on my own? Well u have infinite tries, git gud. The satisfaction of winning those unbeatable fights is what keeps me coming back to the series.
                    
        When i went back and played demons souls years later and as a more experienced gamer i still really liked the gameplay, but the aspect of demons souls that sets it apart from its “sequels” is its atmosphere. Its funny that the game called “dark souls” feels ^^much less^/^ dark than its predecessor. Demons souls has this gothic, brooding, and hopeless atmosphere. Its as if their is a fog of nihilism hanging over the entire game. When u start the game, u step foot into the doomed kingdom of boletaria. You are not here to save it from evil, this land is forever lost to the cursed fog. U are here only to claim the power the demons hold for urself. The hub world used to travel to the other levels exists in almost another dimension, completely cut off from the outside world. Some of the things and enemies u encounter in its levels are manifestations of pure evil. For example one of my favorite set pieces is a level called “the prison of hope”. This map is a skyscraper-like prison with architecture as unsettling as the fate of its inmates. It is so high in the air it feels like it is floating above an endless void. Escape is impossible.
                    
        When u play demons souls u should not be comparing it to “dark souls” or “elden ring”. It is a separate experience with a particular tone. Appreciate it for what it is and u are sure to have a hell of a time.
        `,
                },
                {
                    gameTitle: `Dark Souls`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg`,
                    gameLink: `https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Dark Souls II: Scholar of the First Sin`,
                    gamePoster: `https://m.media-amazon.com/images/M/MV5BMTM4N2JjZTEtNzE2YS00MTdmLTg1NTctZjVkNGFlOWU5OWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`,
                    gameLink: `https://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Dark Souls III`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg`,
                    gameLink: `https://store.steampowered.com/app/374320/DARK_SOULS_III/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Sekiro: Shadows Die Twice`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg`,
                    gameLink: `https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Elden Ring`,
                    gamePoster: `https://m.media-amazon.com/images/I/6110RSDn3PL._AC_SL1050_.jpg`,
                    gameLink: `https://store.steampowered.com/app/1245620/ELDEN_RING/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Batman: Arkham Asylum`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/4/42/Batman_Arkham_Asylum_Videogame_Cover.jpg`,
                    gameLink: `https://store.steampowered.com/app/35140/Batman_Arkham_Asylum_Game_of_the_Year_Edition/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Phantasy Star Online Blue Burst`,
                    gamePoster: `https://www.pioneer2.net/community/data/attachments/16/16353-903401da9490e5b892bcdc57dc24f378.jpg?hash=kDQB2pSQ5b`,
                    gameLink: `https://ephinea.pioneer2.net/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Alan Wake`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/1/1f/Alan_Wake_Game_Cover.jpg`,
                    gameLink: `https://store.steampowered.com/app/108710/Alan_Wake/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Life is Strange`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/0/0d/Life_Is_Strange_cover_art.png`,
                    gameLink: `https://store.steampowered.com/app/319630/Life_is_Strange__Episode_1/`,
                    gameReview: `Life is strange is strikingly beautiful and captivating. It tugs on your heartstrings and makes you really emotionally invested in its characters. This game also taught me an important life lesson: never mess with a man eating his beans`,
                },
                {
                    gameTitle: `Detroit: Become Human`,
                    gamePoster: `https://cdn.cdkeys.com/496x700/media/catalog/product/c/o/co2228_7_.jpg`,
                    gameLink: `https://store.steampowered.com/app/1222140/Detroit_Become_Human/`,
                    gameReview: `we smokin red ice in a glass pipe now we bleedin blue. them david cage, motown, ai enhanced robot rocks got me speaking french. we smokin that shit that made elliot page transition. we smokin filtered crack u stupid piece of shit, ill fuckin kill u.`,
                },
                {
                    gameTitle: `Monster Hunter: World`,
                    gamePoster: `https://cdn.displate.com/artwork/857x1200/2025-02-27/8e0d43ca994716344334eeecb7495e7f_c0308bba71147adcfe63f6f776e8e7f5.jpg`,
                    gameLink: `https://store.steampowered.com/app/582010/Monster_Hunter_World/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Pokémon Emerald Version`,
                    gamePoster: `https://m.media-amazon.com/images/M/MV5BMmU5YmM4MGQtODE5MS00NmYwLWEwNDItY2Q2ZmJjYzFhOTFhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`,
                    gameLink: `https://www.serebii.net/pokemon/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Halo 3`,
                    gamePoster: `https://m.media-amazon.com/images/I/71qRbrdG3VL._AC_UF894,1000_QL80_.jpg`,
                    gameLink: `https://store.steampowered.com/app/976730/Halo_The_Master_Chief_Collection/`,
                    gameReview: `Coming home after school, hopping on xbox live, skipping your homework, and playing a bunch of awesome custom games with friends and friends of friends is an experience that will never be recreated. This was a special time in online gaming.`,
                },
                {
                    gameTitle: `Call of Duty: Modern Warfare 2`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png`,
                    gameLink: `https://store.steampowered.com/app/10180/Call_of_Duty_Modern_Warfare_2_2009/`,
                    gameReview: `I played so much of this game it was unhealthy. Even after all the sequels i always kept coming back to this one. As i got better it was so fun to challenge myself using a new weapon or build and learning to master it. The replayability was endless. `,
                },
                {
                    gameTitle: `Rivals of Aether II`,
                    gamePoster: `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co8v8r.jpg`,
                    gameLink: `https://store.steampowered.com/app/2217000/Rivals_of_Aether_II/#app_reviews_hash`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Darkest Dungeon: Black Reliquary`,
                    gamePoster: `https://howlongtobeat.com/games/129165_Black_Reliquary.jpg`,
                    gameLink: `https://store.steampowered.com/app/2119270/Black_Reliquary/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Metroid Prime`,
                    gamePoster: `https://www.aryammedia.com/wp-content/uploads/2023/07/w-vgs-action-metroid.jpg`,
                    gameLink: `https://www.nintendo.com/us/store/products/metroid-prime-remastered-switch/`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Animal Crossing: Wild World`,
                    gamePoster: `https://howlongtobeat.com/games/475_Animal_Crossing_Wild_World.png`,
                    gameLink: `https://nookipedia.com/wiki/Animal_Crossing:_Wild_World`,
                    gameReview: ``,
                },
                {
                    gameTitle: `Pokémon Unbound`,
                    gamePoster: `https://cdn2.steamgriddb.com/thumb/e1dc0039261b0ef4f18498d68a351b8c.jpg`,
                    gameLink: `https://www.pokecommunity.com/threads/pok%C3%A9mon-unbound-completed.382178/`,
                    gameReview: ``,
                },
            ].map((g) => ({ ...g, type: 'game' as const }));
    // ======           ======



    // ======IMPORTANT MISC PROPERTIES======
    // ======                         ======
            
    // ======                         ======



    // ======SIGNALS AND PROPERTIES======
    // ======                      ======
            discordProfile: string = `https://discord.com/users/224091102477680640`;
            discordProfilePic: string = `/profile-pictures/discord-pfp.jpg`;
            discordProfileStyle: string = `discord-profile`;
    
            gamePosterStyle: string = `current-game-art`;
            gameString: string = `game`;
    
            currentGameTitle: WritableSignal<string> = signal(``);
            currentGameArt: WritableSignal<string> = signal(``);
            currentGameLink: WritableSignal<string> = signal(``);
            currentGameReview: WritableSignal<string> = signal(``);
    // ======                      ======



    // ======ON INIT/DESTROY======
    // ======               ======
            ngOnInit(): void {
                console.log(`GAMESILIKECOMPONENT: ` + this.gameArray.length + ` games displayed`);
                // console.log(`GAMESILIKECOMPONENT: ` + JSON.stringify(this.gameArray))
            }
    
    
            ngOnDestroy(): void {
                console.log(`leaving games-i-like page`);
            }
    // ======               ======

}
