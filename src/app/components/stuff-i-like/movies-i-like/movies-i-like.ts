import { Component, signal, WritableSignal, OnInit, OnDestroy} from '@angular/core';

import { FavoriteMovie } from '../../../models/favorite-movie';

import { Marquee } from '../../marquee/marquee';


@Component({
  selector: 'app-movies-i-like',
  imports: [Marquee],
  templateUrl: './movies-i-like.html',
  styleUrl: './movies-i-like.css'
})
export class MoviesILike implements OnInit, OnDestroy {

  movieArray: FavoriteMovie[] =  [
    { movieTitle: `Twin Peaks: Fire Walk with Me`,
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/xb/qg/78/zd/tOQekTHJmVCgfUYXTb6dLAu6l8W-0-2000-0-3000-crop.jpg?v=647348df81`,
      movieLink: `https://letterboxd.com/film/twin-peaks-fire-walk-with-me/`,
      movieReview: `this movie is just perfect in every single aspect. the writing, directing, use of previously established symbolic imagery– just everything. \
                    there are so many great surreal scenes that are downright horrifying. \
                    i am fascinated by the lore and mythology of twin peaks, and ^^fire walk with me^/^ has my favorite portrayals, hints, and reveals of the seriess famously impenetrable secrets. \
                    sheryl lee brilliantly depicts the drug addled psychosis and bipolar frenzy of a girl who exists halfway within reality, and halfway in a dream. \
                    laura palmer almost literally, lives in the dream we dream when we watch this movie. \
                    \n \n"we are like the spider. we weave our life and then move along in it. we are like the dreamer who dreams and then lives in the dream." -david lynch` },
    { movieTitle: `Perfect Blue`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/4/6/1/7/5/46175-perfect-blue-0-2000-0-3000-crop.jpg?v=1ed5878cce`, 
      movieLink: `https://letterboxd.com/film/perfect-blue/`, 
      movieReview: `Satoshi kon is my idol. He goes crazy here with the surrealism. Definitely the best piece of media in the  “i dont know whats real and whats not psychosis” sub genre of psychological thriller. This is probably the movie ive watched the most times in my adult life because nobody that isnt a weeb has seen it, so i end up showing it to a lot of friends. So far every single person has loved it. I have many movies i love but this is just a fun watch for basically anyone. I take great pride in doing my part to share this amazing movie.`},
    { movieTitle: `In The Mouth of Madness`, 
      moviePoster: `https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2022/12/28104036/bNh5iySaJ15tvLjGrYsw1JNhx8l.jpg`, 
      movieLink: `https://letterboxd.com/film/in-the-mouth-of-madness/`, 
      movieReview: `Ok so, this is my favorite horror movie of all time (unless u count ^^twin peaks: fire walk with me^/^ which I dont). ^^In the mouth of madness^/^ is not the scariest movie, its not the best written, its not the best acted, but i think it accomplishes exactly what it tries to do. It is so fun and charming. The way i would describe this movie in one sentence is “a really interesting cosmic horror mystery, seasoned with the perfect amount of 80s campiness”. I love cosmic/eldritch horror and i think this is the best movie in that genre. The feeling of something being not quite right makes such a well paced transition into a sense of existential dread. 

Sam neil stars as the main protagonist, and he is so good in these kinds of ambiguous horror movies. He conveys so much horror with his facial expressions alone, its like he was genetically made to play these rolls. 

As far as horror movies are concerned, ^^in the mouth of madness^/^ has by far the best ending out of them all. I even think its up there with the best movie endings of all time, but im struggling to remember any other endings that are even close to as good as this one.`},
    { movieTitle: `her`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/au/nb/i6/lq/fsoTLnUXEUTNuVCBxAJMY0HPPd-0-2000-0-3000-crop.jpg?v=16789732be`, 
      movieLink: `https://letterboxd.com/film/her/`, 
      movieReview: `I saw this movie at a time in my life when i was going through a rough relationship and it spoke to me so hard. \
                    To me this movie shows how people fall in love with the idolized version of each other they have in their head, not actually the true person that they are. \
                    When faced with the brutal reality of the situation it almost seems as if everything completely falls apart. \
                    ^^Her^/^ highlights a lot of the ups and downs of being in a relationship when you are not necessarily mentally ready to be in one. \
                    It could also be interpreted as being about toxic relationships. \
                    \n \nThe soundtrack is probably my favorite movie soundtrack of all time too. Arcade fire popped off with this shit.`},
    { movieTitle: `Alien`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/8v/f1/qw/aa/bg7K6VtUG7Ew70gQj6SSroD5d4R-0-2000-0-3000-crop.jpg?v=a932f9e98e`, 
      movieLink: `https://letterboxd.com/film/alien/`, 
      movieReview: `This movie absolutely changed the game when it came to horror and scifi movies. There was nothing even close to this at the time it came out. It actually has a lot to say in terms of the political climate at the time, but i need not get into it because that stuff went totally over my head when i watched this movie, and i still thought it was a 10/10. The setting is so dark and foreboding, the person who designed the set better have won an oscar or something. The feeling that the xenomorph (the official name for the alien, let me nerd out. I love this shit) could be 1 foot away, around the next corner, or in the fucking walls at any point creates so much organic tension. Not to mention that it still looks incredible. the visuals hold up EXTREMELY well and surpass most of the movies that came out in the last 40 years. Im telling you man, practical effects are the way to go. especially in horror movies. I want my abandoned alleys, hallways, and spaceships to look dark and gritty and natural. CGI makes everything look so perfect and shiny unless used with special care. Undisciplined use of it can really separate you from whats happening on screen, suspend your disbelief, and subconsciously ruin that sense of immersion that a horror movie needs to be scary. 

Also, winona ryder!!!!! My absolute queen!! i love her she absolutely mogs the entire cast. So brilliant and beautiful and talented. One of the best actors of all time, and probably the best actress of all time. At least in the top 5, but i cant really think of anyone else better than her right now.`},
    { movieTitle: `Blade Runner 2049`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/2/6/5/4/3/9/265439-blade-runner-2049-0-2000-0-3000-crop.jpg?v=86735e0bb8`, 
      movieLink: `https://letterboxd.com/film/blade-runner-2049/`, 
      movieReview: `Is having both ^^her^/^ and ^^bladerunner 2049^/^ in my list of favorite movies giving incel? Maybe. Dont care. I love this movie. I think ^^her^/^ and this movie definitely have very similar themes. The ai girlfriend, the sense of longing for meaning or higher purpose, the desire of people (especially those of the chronically lonely) to feel like they are special, looking for an escape from the mundanity of your current reality, and the message that a person’s value and self worth can never truly come from anyone or anything but ones self. 

Yea but who cares about “themes” or “subtext”, this movie is COOL AS FUCK! Ryan gossling is LITERALLY ME. He is a bad ass motherfucker who kills bad guys, drives a sick hover car, has a hot girlfriend, is really smart and talented and strong, but under all that armor that he shows the world he is actually a pure soul with a heart of gold~~~~ He wont let this techno dystopia bring him down! 


(in all seriousness i love this movie so much because it is trying to say something important, while at the same time just being the most entertaining piece of scifi in the last decade. The movie is almost 3 hours and i was never bored or felt like it was dragging on. Once it was over i wanted more.)
`},
    { movieTitle: `The Raid`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/7/8/2/6/6/78266-the-raid-0-2000-0-3000-crop.jpg?v=4095a2a23a`, 
      movieLink: `https://letterboxd.com/film/the-raid-2011/`, 
      movieReview: `I go to a local underground theatre in la sometimes. The dude who runs it is a huge movie nerd and knows a lot about what makes a good film. One day i saw he was showing ^^the raid^/^ and ^^the raid 2^/^ and i started freaking out and made all my friends come to see it. Before the movie plays the owner of the theatre always comes up and makes a speech and tells some fun facts about what we are about to watch. I respect this man’s opinion a lot. He said, and i quote “i consider this movie to be on the same level as the best works from scorsese, kubrick, and a bunch of other critically acclaimed directors. Its the perfect action movie” I felt so validated in that moment because i feel the exact same way lol. ^^The raid^/^ is fucking lit and by far the best action movie ive ever seen. One of the best movies ive ever seen. Period.`},
    { movieTitle: `Live Flesh`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/5/1/7/8/9/51789-live-flesh-0-2000-0-3000-crop.jpg?v=a2b779318d`, 
      movieLink: `https://letterboxd.com/film/live-flesh/`, 
      movieReview: `This movie is LITERALLY about me. This movie genuinely made me cry. Not because it was sad or emotional, but because of how poignant it felt. The main character reminded me of myself so much and i dont think ive ever related to a character harder. I dont want to spoil the ending, but i thought i knew how it was going to end. I was thinking “if this movie is about me, its going to end like ^!^this^/!^. It always ends like ^!^this^/!^”. Well i was wrong, and the fact that i was wrong kinda made me realise that you actually never know what is going to happen in your life. If you ever want an abstract simulation of how it feels to walk in my shoes, watch this movie.`},
    { movieTitle: `Heavy Metal`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/4/4/9/7/3/44973-heavy-metal-0-2000-0-3000-crop.jpg?v=ccf9df9734`, 
      movieLink: `https://letterboxd.com/film/heavy-metal/`, 
      movieReview: `Another visual and auditory masterpiece, just like ^^yellow submarine^/^, but on the completely different side of the coin. I’ve seen this movie like 6 times and i still dont really get why i like it so much lol. It really is just a unique vibe and experience. I think a big part of that vibe is how fucking sick it looks with all the hand drawn animation. If ^^yellow submarine^/^’s are visuals inspired by psychedelic rock, ^^heavy metal^/^’s visuals are inspired by… well… yknow… heavy metal LOL. `},
    { movieTitle: `The King of Comedy`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/4g/y9/qr/q9/pbAqLKoLydP7jl6P0vmYwlDtRPD-0-2000-0-3000-crop.jpg?v=8eb030b5f7`, 
      movieLink: `https://letterboxd.com/film/the-king-of-comedy/`, 
      movieReview: `This movie was the joker’s joker moment`},
    { movieTitle: `A Clockwork Orange`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/5/1/8/6/7/51867-a-clockwork-orange-0-2000-0-3000-crop.jpg?v=d6d5407b50`, 
      movieLink: `https://letterboxd.com/film/a-clockwork-orange/`, 
      movieReview: `From the very first scene where the boys are drinking milk together at the milk bar i knew i would love this movie lmao. At first i loved it for its setting and how well written it is, but towards the middle it changed into a story that had a lot to say about consciousness, the self, and redemption. The way this movie makes u sympathise with one of the worst individuals to ever star as a protagonist in a film. It really forces u to think about what this movie is trying to say. Like the ship of theseus– if a person has their entire personality and moral values completely rewritten are they really the same person?

^^Clockwork orange^/^ is in contention with ^^starred up^/^ for the award of favorite movie i watched in 2025.`},
    { movieTitle: `Hot Wheels: World Race`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/1/8/2/2/4/18224-hot-wheels-world-race-0-2000-0-3000-crop.jpg?v=ea227d8aa6`, 
      movieLink: `https://letterboxd.com/film/hot-wheels-world-race/`, 
      movieReview: `When i tell people this is one of my favorite movies they think im joking. I am not joking. Its a banger for the ages. This shit will make u remember what u thought was cool when u were 12 and remind u that shit is still cool as fuck. 

Also the dialogue in the movie is made entirely of 1 liners. Its a blast. `},
    { movieTitle: `The Silence of the Lambs`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/5/1/7/8/2/51782-the-silence-of-the-lambs-0-2000-0-3000-crop.jpg?v=18d88bdff4`, 
      movieLink: `https://letterboxd.com/film/the-silence-of-the-lambs/`, 
      movieReview: `The lambs were in fact very loud. This is bullshit.`},
    { movieTitle: `The Shining`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/7s/m2/bw/d0/caoYMcjUamGoBVy65i1AHJBvdzw-0-2000-0-3000-crop.jpg?v=88d9d6cce4`, 
      movieLink: `https://letterboxd.com/film/the-shining/`, 
      movieReview: `I did not watch this movie until i was like 27 years old and im glad i watched it after my brain was fully developed so i could fully appreciate it. It has the most interesting setting of a horror movie i have ever seen. ^^The shining^/^ takes the classic trope of the haunted house to the pinnacle of what a horror movie aspires to be. I cant see another haunted house movie ever eclipsing it. It did everything you can do with the setting, and it did it all perfectly. The feeling of isolation is so tangible, u almost feel as if u r trapped in the hotel with the characters. The building they chose to shoot in really captures the mood kubrick was trying to convey. The hotel itself looks like a ghost, with the barren dusty hallways and the run down architecture juxtaposed against the photos shown and stories told of its prime.

I am a sucker for lore and backstory in great settings. There was so much more mystery left in this place, and the movie barely scratched the surface of the secrets hidden within the walls of the overlook hotel. Everything came across as intentional and well thought. Im sure there were so many concepts and ideas that had to be left out. When the movie ended i wanted to know more. I wanted to experience more of this world. I know there is a book which is very different from this adaptation, ill definitely read it one day.

The acting is awesome, the script is stellar, and direction is damn good. Everyone knows this.
10/10.
`},
    { movieTitle: `Arrival`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/3u/dy/qd/qd/4Iu5f2nv7huqvuYkmZvSPOtbFjs-0-2000-0-3000-crop.jpg?v=0fc28fdf2c`, 
      movieLink: `https://letterboxd.com/film/arrival-2016/`, 
      movieReview: `A movie about aliens? Hell yea sign me up! Oh, its not a traditional alien movie and we are actually learning to communicate with the aliens by learning their language? What a novel concept! This surely will be a good time! 

1 hour later: Is my life completely viewed from a lens of my own perspective? Would a shift in perspective make my life unrecognizable from how I currently view it? If I truly viewed my life through a new perspective, would I change not only my future, but my past as well? Am I actually influenced by factors so far out of my control and comprehension that my life is predetermined? Maybe free will exists solely because our destiny has been created by our future selves? Does the cause lead to the effect, or does the effect lead to the cause? Does the past create the future, or vice versa? When I make a footprint in the sand while walking on the beach, did I make that footprint, or did that footprint make me…?

Idk man, sick movie though.
`},
    { movieTitle: `The Dark Knight`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/78/y5/zg/ej/oefdD26aey8GPdx7Rm45PNncJdU-0-2000-0-3000-crop.jpg?v=2d0ce4be25`, 
      movieLink: `https://letterboxd.com/film/the-dark-knight/`, 
      movieReview: `If you have read some of my other reviews u might know im a sucker for a great setting and lore. I think the batman universe is by far the coolest “superhero” universe there is. It doesnt even feel like a superhero setting because it is so different from many of the others. Its like  neo-gothic-dystopian or whatever u box u wanna put it into. 

There is a specific reason everyone loves this movie in particular, out of all the other batman movies. Its fucking heath ledger as the joker man. He makes this movie his bitch. Every time he is on the screen he owns all of your attention. Just remembering how good he is in this makes me want to watch it again right now lol. Heath ledger died before this movie was even released in theatres. Its so tragic, i wish we could have been blessed by more exceptional performances from him.
`},
    { movieTitle: `The Beatles: Yellow Submarine`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/4/4/7/9/6/44796-yellow-submarine-0-2000-0-3000-crop.jpg?v=cf5db85f42`, 
      movieLink: `https://letterboxd.com/film/yellow-submarine/`, 
      movieReview: `Even if you dont like the beatles, ^^yellow submarine^/^ is a visual and auditory masterpiece. Just thinking about some of its psychedelic hand-drawn scenes gives me an indescribable feeling of whimsy. Its really funny too. I quote this movie constantly and no one ever gets it. Thats ok. I do it for me.`},
    { movieTitle: `Full Metal Jacket`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/l0/l4/6c/7v/29veIwD38rVL2qY74emXQw4y25H-0-2000-0-3000-crop.jpg?v=6e44829670`, 
      movieLink: `https://letterboxd.com/film/full-metal-jacket/`, 
      movieReview: `This was the first *good* movie i ever saw. We got netflix streaming when i was 14 and i randomly watched this. It was my favorite movie for a long time.`},
    { movieTitle: `Best in Show`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/4/3/6/0/1/43601-best-in-show-0-2000-0-3000-crop.jpg?v=9acd41f8dc`, 
      movieLink: `https://letterboxd.com/film/best-in-show/`, 
      movieReview: `I think this was the first “mockumentary” ever made. Its a classic. If you don’t think this is funny you need to take yourself less seriously.`},
    { movieTitle: `Hereditary`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/4/2/4/3/4/8/424348-hereditary-0-2000-0-3000-crop.jpg?v=470e48b681`, 
      movieLink: `https://letterboxd.com/film/hereditary/`, 
      movieReview: `Tldr this is just the “perfect supernatural horror movie”. The lore is well researched, the atmosphere is mysterious and unnerving, and its just fucking scary. You can feel the horror seeping from every set piece, shot selection, lighting choice, and line of dialogue in this movie. There is nothing wasted in this movie, its incredibly efficient in how it tells its story.

SCARY good performance (hehe :3) by Toni Collete. It’s hard to describe how perfectly she gets across the emotional state of her character. So much of the horror is conveyed directly through her, like she is a medium.  

Just a movie that does what its trying to do perfectly.
`},
    { movieTitle: `Starred Up`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/k0/v3/xy/by/zFK9hfrBAQd0ATfzgGWGbPDBpea-0-2000-0-3000-crop.jpg?v=9b80173146`, 
      movieLink: `https://letterboxd.com/film/starred-up/`, 
      movieReview: `I used to think that shawshank redemption was the pinnacle of prison movies, but after a recent rewatch and after viewing ^^starred up^/^ i changed my mind. I actually dont think its close either. 

Jack o’connell stars in this movie as a 19 year old kid who has experienced nothing but hardship and trauma his entire life. Hes been in prison since he was 16 and literally cannot act like a socially adjusted person if his life depended on it. And his life does depend on it. O’connels performance here is so raw and emotional and powerful that it hurts. 

^^Starred up^/^ is going toe to toe with ^^clockwork orange^/^ as the best movie i watched in 2025.`},
    { movieTitle: `Holes`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/dd/2w/x4/la/o2Dm2mcE1qW8vT0bpsJO5OMBbqa-1-0-2000-0-3000-crop.jpg?v=419801ed91`, 
      movieLink: `https://letterboxd.com/film/holes/`, 
      movieReview: `A movie that executes its vision perfectly. Its actually a perfect movie. Stuff i didnt notice as aa kid blew my mind when i watched it as a 28 year old. All the plot points and seemingly insignificant details fit together so well. It is 100% intentional design and tight plotting. Great use of chekhov’s gun narrative objects.`},
    { movieTitle: `City of God`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/5/1/5/2/3/51523-city-of-god-0-2000-0-3000-crop.jpg?v=7517ea94ce`, 
      movieLink: `https://letterboxd.com/film/city-of-god/`, 
      movieReview: `I didnt know what i was getting into when i watched this movie. I expected a cool movie about gangsters. What i got was a look into a completely different world i will never be a part of. This movie is based on a true story and it really made me grateful for growing up in an environment where i didnt have to worry about getting shot by an 8 year old who learned it was cool and normal to kill people. Its really a sad tragedy. Still 100% recommend it if you havent seen it. The story in engaging and interesting and the acting is spectacular. The best movie i watched in 2024.`},
    { movieTitle: `The Man from Earth`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/4/3/9/5/2/43952-the-man-from-earth-0-2000-0-3000-crop.jpg?v=f307c73fdf`, 
      movieLink: `https://letterboxd.com/film/the-man-from-earth/`, 
      movieReview: `Its one of those movies where its just characters talking in one room for 2 hours. A man poses a strange and confounding question/scenario to a group of his friends and colleagues that may make them rethink everything they thought was true. Usually this sub genre of film has a lot to say about the human condition or philosophy. This movie does too, but the topic of conversation isn’t directly about that. The mIn focus of the movie is the proposed scenario and what the characters think about it. This is one of those movies thats clearly trying hard to be what i call a “tryhard movie”- which means a movie that appears to film nerds and takes itself very seriously (this is not a negative or positive, its just a trait a movie may have). It does that while being insanely entertaining and suspenseful, like it had me on the edge of my seat only through dialogue and absolutely no threat to any of the characters. I think this is a movie literally everyone could enjoy.`},
    { movieTitle: `Cars`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/de/kp/63/hd/dWg33ektXuHmxjSjEulwDPTWbC2-0-2000-0-3000-crop.jpg?v=df40f228cb`, 
      movieLink: `https://letterboxd.com/film/cars/`, 
      movieReview: `Im pretty sure cars is the movie that gave me my small town whimsy. Idk man i know most people hate this movie– or at least think its one of pixar’s worst, but i think the good vibes in radiator springs are completely unmatched. If i had to pick my “comfort movie” this one would surely be at the top of the list.`},
    { movieTitle: `Oldboy`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/5/1/4/5/4/51454-oldboy-0-2000-0-3000-crop.jpg?v=294dbcadef`, 
      movieLink: `https://letterboxd.com/film/oldboy/`, 
      movieReview: `Moral of the story: incest is actually based???!!?`},
    { movieTitle: `The Incredibles`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/4/6/8/0/6/46806-the-incredibles-0-2000-0-3000-crop.jpg?v=dce597a185`, 
      movieLink: `https://letterboxd.com/film/the-incredibles/`, 
      movieReview: `Definitely the best superhero movie ever made. ^^The Dark knight^/^ is more of a thriller to me. Marvel wishes they could make a movie half as good as this.`},
    { movieTitle: `Howl’s Moving Castle`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/4/9/0/6/2/49062-howl-s-moving-castle-0-2000-0-3000-crop.jpg?v=fde81bda52`, 
      movieLink: `https://letterboxd.com/film/howls-moving-castle/`, 
      movieReview: ``},
    { movieTitle: `Star Wars: Episode III – Revenge of the Sith`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/5/0/7/0/9/50709-star-wars-episode-iii-revenge-of-the-sith-0-2000-0-3000-crop.jpg?v=cdb8caab10`, 
      movieLink: `https://letterboxd.com/film/star-wars-episode-iii-revenge-of-the-sith/`, 
      movieReview: `Most people have come around on ^^revenge of the sith^/^ at this point. It was not well received when it came out, but what it lacks in narrative subtlety and top tier writing is made up for by how fucking cool and awesome and epic it is. The culmination of 30 years of worldbuilding and foreshadowing had to be this way. At this point in the series ^^star wars^/^ had really perfected the lightsaber choreography, and having so many good fight scenes is just a blast to watch. They were always the climax of the movies and the dopest parts anyway (except for #4), so why not just have a bunch? So many cool setpieces, so many <strong><em>LEGENDARY</strong></em> scenes. I still say “do it” like palpatine all the time. Yea this movie doesn’t break ground like the original trilogy, but it is fucking fun and i dont think it really tired that hard to be anything else.`},
    { movieTitle: `Star Wars`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/2/7/0/6/2706-star-wars-0-2000-0-3000-crop.jpg?v=f1f1271bf5`, 
      movieLink: `https://letterboxd.com/film/star-wars/`, 
      movieReview: `Look if you havent seen this movie already ur probably not gonna see it lol.`},
    { movieTitle: `Star Wars: Episode V – The Empire Strikes Back`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/mp/pz/lf/2i/7BuH8itoSrLExs2YZSsM01Qk2no-0-2000-0-3000-crop.jpg?v=27c6c6fba7`, 
      movieLink: `https://letterboxd.com/film/the-empire-strikes-back/`, 
      movieReview: `My favorite movie in the ^^star wars^/^ series. My rankings go:
5
3
4
6
1
2
I really did not like the disney trilogy but haven’t watched it enough to the point where i can really share my opinion confidently
`},
    { movieTitle: `Mean Streets`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/5/1/8/5/0/51850-mean-streets-0-2000-0-3000-crop.jpg?v=931fbfc6b7`, 
      movieLink: `https://letterboxd.com/film/mean-streets/`, 
      movieReview: `This is my favorite scorsese movie. It only focuses on 2 characters. it allows for an in depth look at these guys, what makes them tick, and their relationship with each other and the surrounding cast. Its a more grounded and down to earth story. Scorcese gets to flex on everyone here and show his character writing chops.`},
    { movieTitle: `Borat`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/5/1/6/1/4/51614-borat-cultural-learnings-of-america-for-make-benefit-glori-0-2000-0-3000-crop.jpg?v=17316654a2`, 
      movieLink: `https://letterboxd.com/film/borat-cultural-learnings-of-america-for-make-benefit-glorious-nation-of-kazakhstan/`, 
      movieReview: `Probably the funniest movie ever made. Yea its a product of its time and i can imagine a lot of people finding it offensive or being mad at me for liking it. Dont care. At its core its a progressive movie.`},
    { movieTitle: `Jay and Silent Bob Strike Back`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/5/0/3/5/5/50355-jay-and-silent-bob-strike-back-0-2000-0-3000-crop.jpg?v=cc2522999c`, 
      movieLink: `https://letterboxd.com/film/jay-and-silent-bob-strike-back/`, 
      movieReview: `I do not smoke weed i swear!`},
    { movieTitle: `Frank`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/1/2/5/9/7/6/125976-frank-0-2000-0-3000-crop.jpg?v=bdd7f75fa5`, 
      movieLink: `https://letterboxd.com/film/frank-2014/`, 
      movieReview: `god, this movie has a lot to say about what it means to be an artist and the power of music. It deals with issues that all artists face like imposter syndrome, inferiority complex, talent, and the poisonous monetization of the music industry. It is also directed in such unique and trippy way. When i first watched it i was literally entranced. By the end of the movie i couldnt even remember what really happened, i just remembered thinking it was the best movie ever LOL. i needed to go back and rewatch it a couple days later to really take in the experience. it was my favorite movie around the time when i was like 20-24.

I also have to mention the soundtrack. The movie is about a band, and it has a great soundtrack. Not just the band’s songs, but the bgm as well. This movie showed me how powerful music is when used in film to curate the vibe. The choice of music in a scene can completely change its tone. 

If you are a musician, in my humble (but very based and always correct) opinion– this is a 100% required watch. Brb gonna go listen to “lone standing tuft”.`},
    { movieTitle: `Pirates of the Caribbean: The Curse of the Black Pearl`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/2/6/9/5/2695-pirates-of-the-caribbean-the-curse-of-the-black-pearl-0-2000-0-3000-crop.jpg?v=272b36c0d8`, 
      movieLink: `https://letterboxd.com/film/pirates-of-the-caribbean-the-curse-of-the-black-pearl/`, 
      movieReview: `Fun, cool, and infinitely charming.`},
    { movieTitle: `Memories`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/2/2/1/2/8/22128-memories-0-2000-0-3000-crop.jpg?v=7443e066ca`, 
      movieLink: `https://letterboxd.com/film/memories/`, 
      movieReview: `Junji ito is my idol. Only the first short in this anthology is directed by him, but it might actually be his best work.`},
    { movieTitle: `Millennium Actress`, 
      moviePoster: `https://a.ltrbxd.com/resized/film-poster/2/9/8/8/4/29884-millennium-actress-0-2000-0-3000-crop.jpg?v=7c3df2e20f`, 
      movieLink: `https://letterboxd.com/film/millennium-actress/`, 
      movieReview: `I call this soatoshi kon’s “best movie”. Its not my favorite BUT i think if this was written by an american and was made in live action it would have swept the oscars lol. Its incredibly intimate and moving. It feels like someone telling you their life story. 10/10.`},
    { movieTitle: `Harry Potter and the Prisoner of Azkaban`, 
      moviePoster: `https://a.ltrbxd.com/resized/sm/upload/a3/0q/kf/h8/jUFjMoLh8T2CWzHUSjKCojI5SHu-0-2000-0-3000-crop.jpg?v=6285ee260e`, 
      movieLink: `https://letterboxd.com/film/harry-potter-and-the-prisoner-of-azkaban/`, 
      movieReview: `^^Harry potter^/^ is my guilty pleasure. Though, I dont think the movies or books are generational works of art or anything. It can be messy and sloppily written. Most of the characters are caricatures of classic archetypes with little to no backstory, and we are told almost nothing of their motivations. The series definitely tries to do too much, which cant be accomplished within the restrictions it puts on itself. ^^Harry potter^/^ doesnt really have anything profound to say, or a message u are intended to leave with. And u know what, thats actually a good thing.

Not everything needs to be steeped in symbolism and hidden meaning. Sometimes you get a idea that is fucking cool, and you write it because you want to. Sometimes the main character is the good guy chosen one, and the villain is just evil because thats how he fucking is lol. I think that leaves a lot of room for whatever extra shit the author wants to put in. at the same time, that might be the reason the series can feel so sloppy– because there is so much random bullshit packed in there, and none of it is ever really explained, and none of it really matters. Its jingling shiny dopamine keys in your face in the form of “look! cool magic thing”. This is a double edged sword, because i think with a lot more intention and extra care the setting of ^^harry potter^/^ had so much more potential than what it ended up becoming. J.k. rowling struck gold with this idea, and kinda just milked it for a billion dollars and then became a piece of shit lol. We do not fw her around here, but we can separate the art from the artist.

ANYWAY, now that im done with my long rant about the series i can finally get to talking about THIS specific entry. ^^Prisoner of azkaban^/^ is the first time that ^^harry potter^/^ started trying to be dark and edgy. It honestly works really well as baby's first gothic horror. Let me just preface this– even tho i call this movie horror it is not scary. It just follows the format. Horror as a genre takes the weaknesses of ^^harry potter^/^’s writing, and turns them into strengths. In horror, you dont want to explain what is going on, or why things are happening, because then its not scary anymore. You actually do want a lot of random cool shit and spectacle to keep the audience entertained. Usually horror isnt trying to be deep, and neither is ^^harry potter^/^. This movie is just freakin cool. 

Although i said ^^harry potter^/^ does not have good character writing and backstories, there are exceptions. A lot of those characters make their first appearance in this movie. Once we start diving into the wizarding world outside of hogwarts, it seems much more effort was put into introducing the new members of the cast and making us interested in them. These guys have actual backstory and motivation and character flaws, what a concept!

I think a big reason why this movie in particular feels so unique is that they got alfonso cuaron to direct it for some reason lol. Hes the guy who directed ^^childen of men^/^ and ^^y tu mama tambien^/^ and other such works of art. He made this movie look GREAT. There is clearly a touch of artistry and vision in the way this film was shot and directed, but not so much that it strays too far from the series roots. 

I did not intend this to be a dissertation lol, but when i started writing i had a lot more to say than I initially thought. Thanks for reading :3
`},
  ].map(m => ({ ...m, type: 'movie' as const }));;

  // get movieItems(): FavoriteStuff[] {
  //   return this.movieArray.map(m => ({
  //   stuffTitle: m.movieTitle,
  //   stuffArt: m.moviePoster,
  //   stuffLink: m.movieLink,
  //   stuffReview: m.movieReview
  //   }));
  // };

  letterboxdProfile: string = `https://letterboxd.com/MegaXmas/`;
  letterboxdProfilePic: string = `https://a.ltrbxd.com/resized/avatar/upload/1/1/7/8/0/4/9/9/shard/avtr-0-220-0-220-crop.jpg?v=4fb09fb5fb`;
  letterboxdProfileStyle: string = `letterboxd-profile`;

  moviePosterStyle: string = `current-movie-poster`;
  movieString: string = `movie`;

  currentMovieTitle: WritableSignal<string> = signal(``);
  currentMoviePoster: WritableSignal<string> = signal(``);
  currentMovieLink: WritableSignal<string> = signal(``);
  currentMovieReview: WritableSignal<string> = signal(``);


  ngOnInit(): void {

    console.log(`MOVIESILIKECOMPONENT: ` + this.movieArray.length + ` movies displayed`)
    // console.log(`MOVIESILIKECOMPONENT: ` + JSON.stringify(this.movieArray))
  };

  ngOnDestroy(): void {

    console.log(`leaving movies-i-like page`)
  };
}
