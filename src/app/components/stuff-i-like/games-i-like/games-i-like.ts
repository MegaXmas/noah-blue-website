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
                    gameReview: `Dark souls 1 man, what a legendary moment for gaming. It inspired a whole new genre of games. I think it deserves all the praise it gets and should go down in history as one of the greatest and most influential games of all time. This might just be nostalgia, but there is a certain wonder that ds1 has i dont think any of the other games in the series have matched. The tranquility of firelink shrine, the camaraderie from certain npcs, the sense of scale and awe at the world… i gasped the first time i saw ash lake and anor londo. Its just such an enchanting game while also being dark and evil. I think its this juxtaposition that creates such an engaging world that compels curiosity.

Its funny, most people play ds1 and then halfway thru are like “wtf is going on what am i doing here?” and then go research the lore. I was the opposite. My interest for dark souls was initiated from learning some snippets of the story. I was instantly drawn into this dark fantasy narrative from the get go. Im the mf who reads every items description and goes thru all the dialogue of every character i find just to get an extra kernel of lore. David lynch said “were all like detectives. We want to figure things out… its beautiful that people are thinking”. I hate it when things are just given to me up front and require no critical thinking or analysis. I have always been fascinated by literature and literary devices like symbolism, foreshadowing, etc... and the darker the themes and narrative of the story, the better. Dark souls and i, we just get each other yknow?

Ds1 is an old game now. the sequels have added so many new features, upgrades in qol, improvements of the game engine to make things feel smoother and snappier, etc... But i cant help but still prefer ds1 to its sequels. I really like clunky and methodical gameplay when its done well. The game world and level design has to account for it, but when properly realized it feels so satisfying. Every press of a button must be purposeful and precise. strategy and patience are rewarded and encouraged. U can tell this game was designed with love and care in all its aspects. Not saying the other games are not, but ds1 specifically feels like a labor or love when you play it. I love this game and i will always recommend it to people who havent yet played it.`,
                },
                {
                    gameTitle: `Dark Souls II: Scholar of the First Sin`,
                    gamePoster: `https://m.media-amazon.com/images/M/MV5BMTM4N2JjZTEtNzE2YS00MTdmLTg1NTctZjVkNGFlOWU5OWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`,
                    gameLink: `https://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/`,
                    gameReview: `So many people are dark souls 2 haters. I mean, i get it. The story is arguably very disconnected from the overall narrative, its made some questionable changes to game mechanics, and when the game was first released it was way worse than the scholar of the first sin edition. I didnt play ds2 when it first released so my view isnt influenced by that inferior version. Theres a reason i specified the “scholar of the first sin” edition. I think this remake/remaster of the game is freakin awesum sauce!!!! The developers patched a lot of the bugs, changed level layouts and enemy placement, and included the 3 dlcs (which i think are essential to understanding the themes the story is trying to tell). The dlcs are debatably the best levels in the game too. 

I personally like how the story of dark souls 2 is kinda separate from ds1 and ds3. I think it is a great way to accentuate themes the series was trying to convey while also adding so much of its own. Tbh one of my gripes with dark souls 3 is it feels very “nostalgia baity”. Like– “hey guys look over here! Remember this thing from dark souls 1?!??! Oh btw… this fan favorite character is back and you are gonna love it! And omg… is that firelink shrine?? Is that anor londo??? I know theres no way u could forget those places from the first game!!!” dont get me wrong i love ds3, but this is one of the criticisms i have of it. 

Ds2 also just has so much content, i think thats part of the reason the game can feel disconnected as well. Sometimes u are doing all this random bs and are like “ok wtf am i actually doing? What is the point of all this?” which i think is a double edged sword. Some of the content feels a bit thrown together with a lack of purpose as opposed to dark souls 1s brilliantly designed game world/map. But as someone who likes to do all the sidequests, fight all the bosses, and beat all the levels– its a plus for me. I just like playing the game. Also because i am a huge nerd about the lore of the souls series i just know what the significance of all these places and enemies are. Any extra bit of lore i can get is alright with me. I think my ^^least favorite aspect^/^ of ds2 is that some of the boss runbacks (when u die to the boss and have to get to the boss arena again) are ^!^[UP]WAY TOO FUCKING LONG!!!!![/UP]^/!^. Ds2 actually has the only boss i never beat in any of the souls games. it has the most infamous boss runback in the game and a fight so tedious for the build i was using i just couldnt be asked try 50 more times.

I suggest all those who havent played ds2 to play the game and make a judgement for urself. As much as i love it, its still on the bottom of my list of the fromsoft releases. And to the people who havent gone back and tried scholar of the first sin after playing the original– give it another shot.
`,
                },
                {
                    gameTitle: `Dark Souls III`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg`,
                    gameLink: `https://store.steampowered.com/app/374320/DARK_SOULS_III/`,
                    gameReview: `When i was 20 years old and this game came out i was so excited to play it. I worked at fucking ^^office depot^/^ at the time which might just be the worst retail job ever. All i wanted to do was clock out and play it. But alas, life had other plans. When i got home my computer blue screened and bricked… i actually cried ^!^[up]lmao[/up] i was so upset!!!^/!^ i hated my job and life a lot and i needed ^^something^/^ to keep me going and i thought it would be ds3. In a moment of grief and depression i made a decision: that was the night i started one piece [up]lmao[/up]. I didnt have a computer for 4 months and all i did was watch one piece on my ps3 using my friends crunchyroll account. It might have been a blessing in disguise cuz tbh one piece is better than ds3 anyway and i might never have watched it if it wasnt for this unfortunate event.

Uhhhh if u want a review– tldr: the game is a banger. its widely regarded as the best dark souls in the series (although i disagree). It has the smoothest combat, lots of qol upgrades, and so many new weapons, spells, miracles to try out and play fun builds. Its got really fun and cool and hard bosses and the lore in ds3 is also debatably the best in the series. It finishes so many story lines and ties up loose ends, its very satisfying. Shit slaps 10/10
`,
                },
                {
                    gameTitle: `Sekiro: Shadows Die Twice`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg`,
                    gameLink: `https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/`,
                    gameReview: `Sekiro is the most underrated title in new gen fromsoft catalogue imo. This game has the most satisfying combat to master. The boss fights in this game are [up]so hard lmao[/up] but figuring out the timings of their attacks and the ways to counter them feels ^^sooooooooo goooooood^/^. Maybe i am biased in how highly i rate this game, because i play all the souls-like games like sekiro. I demand myself to learn the boss to near perfection and make no mistakes, i rarely ever upgrade my health or defenses in these games. I treat many boss fights in souls like puzzle/rhythm games and i think that style of gameplay is basically mandatory in sekiro.

Sekiro is also hands down the most cinematic souls-like game also. The art style is beautiful. I was in awe of all the breathtaking landscapes and creativity on display on the level design. There are jaw-dropping moments in this game around every corner. An early example is when ur navigating these snowy mountain peaks, and u have to avoid the sight of a ^^giant snake god^/^ to pass through. The boss fights are also just so fucking rad. The character design of the bosses is exceptional, but ^^especially^/^ the human characters you fight. Its some epic anime battle shit where u are sword fighting superheroes using all these explosive powers and abilities god its so fucking cool man. The cutscenes are dope and the animations are so smooth and buttery. Dont get me started on the boss executions either. 

Sekiro is just a spectacular game. I have heard a lot of people dont like it and a lot of fans of souls havent played it. ^!^[up]Foolish mistake![/up]^/!^
`,
                },
                {
                    gameTitle: `Elden Ring`,
                    gamePoster: `https://m.media-amazon.com/images/I/6110RSDn3PL._AC_SL1050_.jpg`,
                    gameLink: `https://store.steampowered.com/app/1245620/ELDEN_RING/`,
                    gameReview: `Elden ring… ooooohhh mannn. One of the greatest games of all time, if not the best. Its def top 3 for me. First off, soulslike combat was perfected here i think. Its just slow and methodical enough to make mistakes punishing, and just fast and smooth enough to feel like you have control and skill expression. Fulfills that “power fantasy” that so many action games try to fulfil while still being challenging. 

I really want to praise how successfully fromsoft created an actual engaging open world video game. First off the landscapes and environments are beautiful and creative. It takes the concept of video game biomes like forest, mountain, fire, snow, etc and gives them an entirely new identity. Like its not just a snow biome, there is actually immense ruins and structures created by an extinct race of giants that give the environment so much more to wonder at. It encourages curiosity and exploration. Many areas have twists like this and usually multiple. Theres a moment in the beginning of the game where you step out of the tutorial area cave and are greeted with the wonder of ^^the lands between^/^ for the first time. It was an unforgettable gaming experience for me. 

Continuing on from me praising the environments, i want to talk about the story and worldbuilding. Fromsoft is famous for their "environmental storytelling”, which is basically creating your game world with strict intention. Placing items in areas which hint at an untold story, altering environments to allude to past events, and adding small and sometimes insignificant details to make the world feel real and lived in. this goes hand in hand with the actual areas and levels of elden ring to create that engaging open world i talked about. Going from one place to the next isnt just travel like it is in many open world game, it becomes an enjoyable experience core to the game itself. 

The story is also my favorite that fromsoft has written thus far. Its a masterpiece within the “dark fantasy” genre (which i think still needs way more content and stories than it currently has. imo it is ^!^[up]HEAVILY SUPERIOR[/UP]^/!^ to medieval or traditional fantasy). I love stories with all powerful gods, cosmic forces beyond our comprehension, and well written characters both evil and just. I dont wanna go into the entire story because its very nuanced and complicated with a lot of moving parts, but i find it fascinating. Ive watched ^!^way to many^/!^ elden ring lore videos (not enough i crave more).

I have criticisms like the repetition of certain dungeon environments and bosses, but at the end of the day you have to reuse assets to create this big of a game on a reasonable budget. Elden ring is my favorite single player action game in the last 20 years, probably my 3rd favorite single player game behind “disco elysium” and “paper mario ttyd”.
`,
                },
                {
                    gameTitle: `Batman: Arkham Asylum`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/4/42/Batman_Arkham_Asylum_Videogame_Cover.jpg`,
                    gameLink: `https://store.steampowered.com/app/35140/Batman_Arkham_Asylum_Game_of_the_Year_Edition/`,
                    gameReview: `Arkham asylum was my first stealth game and first horror game all in one. The combat is so smooth. i remember them advertising their combat system “freeflow combat” as brand new and innovative, which it was. The stealth sections were challenging but rewarding. They encouraged experimentation with all the tools in batmans kit to get past them without being detected. The story and characters were really dark and stunning to me at the time, especially the scarecrow sections. Super creepy and awesome. The riddler puzzles are probably one of the best sidequest collectathons in gaming. Some of these puzzles are genuinely super difficult to figure out. I think arkham asylum was the first game i ever got all trophies and fully completed. I replayed it multiple times on the hardest difficulty, and challenged myself to beat every stealth section with perfection. If i was spotted, that was a reset. I dont remember going out of the way to impose self regulated difficulty on myself before playing this game. I think thats the mark of a great game, one that keeps you coming back, one that enables and inspires you to play in different ways. Top it all off with the fact that this game came out around the same time as ^^the dark knight^/^ and dc had me a batman fan for life. I dont see people talk about this game online, but i think its in the conversation for one of the best of all time. 

Im currently playing the sequel “arkham city” rn and its also great, although i dont feel as engaged as i did in the original. I think thats probably just a drawback of open world games vs curated world games. The asylum was such a brilliant setting and each part was designed so well. I recommend this game to anyone interested in stealth gameplay and/or dark stories.`,
                },
                {
                    gameTitle: `Phantasy Star Online Blue Burst`,
                    gamePoster: `https://www.pioneer2.net/community/data/attachments/16/16353-903401da9490e5b892bcdc57dc24f378.jpg?hash=kDQB2pSQ5b`,
                    gameLink: `https://ephinea.pioneer2.net/`,
                    gameReview: `Grab a friend or two and get on this pso private server for a truly unique experience. The server is a labor of love from the fans and still has events and updates to this day. It has an incredibly helpful and active community which is very welcoming to new players. 

As for gameplay, its really hard to describe. There is no other game with combat like pso. Its one of the most clunky combat systems of all time. If u thought dark souls and demons souls were clunky u aint see nothing. But this is almost to its advantage. Instead of fast paced and action oriented combat, pso rewards precise timing and spacing spacing, tactics, patience, and game knowledge. You must become one with the clunk. As an example ill explain combat from the perspective of using a sword weilding class (which is what primarily played): 

Position yourself in a secure but open area so you dont get flanked. Attack the enemy with the very tip of the sword and knock them back with your attack combo (which must be timed correctly) to keep them at bay. When you attack you stay planted to that area and are unable to move, so pick your spots carefully. How many attacks does it take to defeat this particular enemy? If they are getting too close or ur in danger of being surrounded you might have to cut your combo short and block or kite away. Make sure u dont mash, because once you input an attack u cannot cancel it. you must be very intentional with your button presses to leave yourself unexposed. Which of my special moves should i use and when should i use it optimize its impact (as it takes awhile to build up your special meter)? In particularly hard rooms during late game, you are going to have to manage enemy aggro and tightly weave in between them to get to better positions. There is a lot more to the combat mastery (like weapon switching and spell swapping), but i hope this describes how methodical you gotta be to succeed. Its one of the most satisfying games to play perfectly and master. Every mistake you make is punishing but you are always aware of how u messed up and what you couldve done better to have not taken damage. 

This probably doesnt sound appealing to most, and thats fine. I dont think it is the most widely appealing or modern feeling game. But there is a niche this game fills to certain gamers. I havent played in years, but writing this and looking up gameplay videos is making me want to hop back in.`,
                },
                {
                    gameTitle: `Alan Wake`,
                    gamePoster: `https://upload.wikimedia.org/wikipedia/en/1/1f/Alan_Wake_Game_Cover.jpg`,
                    gameLink: `https://store.steampowered.com/app/108710/Alan_Wake/`,
                    gameReview: `Alan wake is ^^suuuuper^/^ inspired by twin peaks. Small town, charismatic lead character, drama, mystery, ^!^a being made of pure light who is trying to subdue the mysterious power of a dark entity who resides in a parallel world—and said entity’s power is currently seeping through the cracks of reality and influencing the events of our world for its own incomprehensible, but undoubtedly evil goals…^/!^ Yknow, the usual.`,
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
                    gameReview: `Rise and grind motherfucka– those armor and weapon materials arent gonna drop themselves. 2% drop rate from the hardest boss in the game on highest difficulty, and youre complaining? I need those 3 extra stat points on my boots, and you better believe im gonna fuckin get them.`,
                },
                {
                    gameTitle: `Pokémon Emerald Version`,
                    gamePoster: `https://m.media-amazon.com/images/M/MV5BMmU5YmM4MGQtODE5MS00NmYwLWEwNDItY2Q2ZmJjYzFhOTFhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`,
                    gameLink: `https://www.serebii.net/pokemon/`,
                    gameReview: `Im 7 years old and this is the greatest thing to happen to me in my entire life. My machoke is level 86, and i have no idea why its not evolving. There is a seaking in my party for some reason. Im learning how to read braille. Life is good.`,
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
                    gameReview: `Its a lot like super smash bros melee, but more forgiving. The characters all have unique mechanics which is pretty cool. Very satisfying to play. Unfortunately— some of the characters in this game might be among the most frustrating and unfun characters to be pitted against in any fighting game ive ever played. If the world were just, orcane would be erased from existence and all kragg players would be put on trail for crimes against humanity.`,
                },
                {
                    gameTitle: `Darkest Dungeon: Black Reliquary`,
                    gamePoster: `https://howlongtobeat.com/games/129165_Black_Reliquary.jpg`,
                    gameLink: `https://store.steampowered.com/app/2119270/Black_Reliquary/`,
                    gameReview: `A mod for darkest dungeon which adds a fuck ton of original content and rebalaces many classes and game mechanics to make it more engaging to play. Its a grind, but its a very fun grind. I love minmaxing my stats and equipment. The dopamine u get from getting good drops and character rolls, or a good virtuous outcome when you are sure ur gonna party wipe is very hard to recreate.`,
                },
                {
                    gameTitle: `Metroid Prime`,
                    gamePoster: `https://www.aryammedia.com/wp-content/uploads/2023/07/w-vgs-action-metroid.jpg`,
                    gameLink: `https://www.nintendo.com/us/store/products/metroid-prime-remastered-switch/`,
                    gameReview: `The atmosphere and vibe of the metroid prime series is still lowkey unmatched to this day. One of the greatest videogame soundtracks of all time as well. If u like immersive game series this is one of the best out there.`,
                },
                {
                    gameTitle: `Animal Crossing: Wild World`,
                    gamePoster: `https://howlongtobeat.com/games/475_Animal_Crossing_Wild_World.png`,
                    gameLink: `https://nookipedia.com/wiki/Animal_Crossing:_Wild_World`,
                    gameReview: `One of my favorite gaming experiences as a child. All my friends had this game, we would all play together and just vibe out. The other animal crossing games have more content and are prob better, this is on the list purely for nostalgia and to honor the game that gave me so many wonderful gaming memories.`,
                },
                {
                    gameTitle: `Pokémon Unbound`,
                    gamePoster: `https://cdn2.steamgriddb.com/thumb/e1dc0039261b0ef4f18498d68a351b8c.jpg`,
                    gameLink: `https://www.pokecommunity.com/threads/pok%C3%A9mon-unbound-completed.382178/`,
                    gameReview: `By far my favorite pokemon rom hack ive ever played. The story is ^!^[up]actually[/up]^/!^ pretty good. Many of the gyms and bosses and elite 4 are ^!^[up]actually[/up]^/!^ really hard. The postgame is ^!^[up]actually[/up]^/!^ really fun. Only problem is that it only has up to gen 7, so i cant use my darling <b>iron bundle…</b>`,
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
