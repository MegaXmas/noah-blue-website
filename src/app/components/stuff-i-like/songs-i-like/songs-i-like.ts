import { Component, OnInit, OnDestroy, inject, output, EventEmitter} from '@angular/core'
import { FavoriteSong } from '../../../models/favorite-song';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Marquee } from '../../marquee/marquee';

@Component({
	selector: 'app-songs-i-like',
	imports: [Marquee],
	templateUrl: './songs-i-like.html',
	styleUrl: './songs-i-like.css'
})
export class SongsILike implements OnInit, OnDestroy {

songArray: FavoriteSong[] = [
	{ songTitle: `The Background`,
		songArtist: `Third Eye Blind`, songAlbumTitle: `Third Eye Blind`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2734139c9208eeed67d2a211beb`,
		songLink: `https://open.spotify.com/track/5n8EO9QJbmQLtQd8MAvrOg?si=3169e3388cc640f9`,
		songReview: `the first song that every made me cry. its a masterpiece of emotion.`,
		songLyrics: `"the plans i make still have you in them.
					when you coming swimming into view, 
					^^and im hanging on your word 
					like i always use to do!^/^
					the words they use so lightly, i only feel for you.

					i only know because i 
					<i>carry you around,
					in the background...</i>"

					such beautiful songwriting man it gets me everytime...` },
	{ songTitle: `LIFE EATER`,
		songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: `BLOODLUST`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273e29c71fe5a3f5aa301b4bf76`,
		songLink: `https://open.spotify.com/track/04LKJh8KqRAFWKHgEKpGPq?si=1fa92c39893f4b9e`,
		songReview: `i love a sad banger. the progression from soft whispy vocals to emotional pent up screaming really does it for me. instrumental perfectly captures the tone too. this is my favorite nn song. \
					when i found out that, out of all the songs on bloodlust, this was the song homie jayvee had the most creative control on it was a serindipitous moment lol.`,
		songLyrics: `"i need your flesh, the nape of you neck.
					^!^just tell me you love me^/!^.
					^!^[up]fuck all the reeeeesssssttttt!!!!![/up]^/!^"

					so simple, but some of my favorite lyrics of all time. i really feel it when he scream that shit it`,
		},
	{ songTitle: `Scab`,
		songArtist: `corbin`, songAlbumTitle: `Ghost With Skin`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27362ca5d840aaf7a55db118534`,
		songLink: `https://open.spotify.com/track/491tKk99HaUtA5Xpr38zIp?si=6d8e899cd8634e4e`,
		songReview: `this song made me feel like i had no idea what i was doing as an artist LMAO. this is the exact kind of music i want/wanted to make. it heavily inspired my song "beside u". :3 \
					such creative vocals and visual lyricism. everything fits together perfectly like a hauntingly beautiful painting. \
					its so hard to pick my favorite lyrics from this song so im gonna put multiple verses lol. i love every single part equally.`,
		songLyrics: `"putting you in harms way when i turn into a monster.
					i know that ur ashamed, take a numberrrrr~~~
					i know i can be a real bummer, 
					baby all my life ive been swimming through the gutter
					are we gonna make it right? are we right for each other?
					this might be the last supperrrr~~~

					i dont want u wastin away. what u stay with me for?
					why u gotta play with pain? gotta find a new sport.
					<i>know i gotta find a way, yeah, baby. 
					yeah, you know I gotta find that cure.</i>
					just tell me how much that ull take from me.
					^^please tell me how ull endure^/^"

					"hard to find the courage just to muster it up.
					body looking like a crusher, i got rucks in my blood.
					know i never tell u baby, tell u enough-
					ur the only thing thats saving me from crossing over
					to the other side. will u be there on the other side?
					no need to be scared, we can share the ride, baby
					look into my eyes, know ur terrified, baby
					can we make it through the night? are we really worth saving????" 
					
					"baby i can tell when we first met~~~
					that u were in denial, baby, ur cynic~~~
					but i can see the light shine through your grimace
					i never thought ud drive me to the clinic~~~
					baby, im stuck in sin city
					tryna get me hooked, why so fishy?
					might run off, might ^!^go missiiinnngg^/!^
					no lights on, going 150"`, 
		},
	{ songTitle: `bled`,
		songArtist: `sace6`, songAlbumTitle: `bled`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273480e4c3485c506582cb7cb49`,
		songLink: `https://open.spotify.com/track/09Rc6fAuoc4uUojKGK9y93?si=03a40dc2394b4d96`,
		songReview: ``,
		songLyrics: `You couldn't dooooo itttttt
					Take yourself serious for more than a month
					Lies and excuuuuuseeeeesss
					Based off experience, it’s never your fault

					If I kept you too close it's 'cause I wanted to keep you longer
					And if I let you go it’s 'cause I don't wanna need you longer

					^^ur done with this and so am i^/^
					<i>guess that mkes two of ussss</i>`,
		},
	{ songTitle: `Aoi Shiori`,
		songArtist: `galileo galilie`, songAlbumTitle: `portal`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27349878e5d827207b68f98a733`,
		songLink: `https://open.spotify.com/track/3fCO1n6l7yekcNRDRkoJJ4?si=4569bdd8e8974963`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Piano Man Abridged`,
		songArtist: `perspective, a lovely hand to hold`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273f986b3d2e7ccc3ef6e82a273`,
		songLink: `https://open.spotify.com/track/04BpOGwGhlPYhfpBA4Un7K?si=d96d132d8b61407e`,
		songReview: ``,
		songLyrics: `We were there inside your bedroom
					When you were looking at meeeee
					Nothing but some best friends
					And some messed up sheets

					I never said it to you but you said it to me

					In the back of your parents Acura in a gated community
					There was a sunset so bitter sweet
					On a hillside you brought me
					^!^All forrrr nottttttt!!!^/!^
					so I’ll put all my thoughts aside
					Under my covers I’ll rot and hide
					From a world that hurt my insides… 😪`,
		},
	{ songTitle: `anything else`,
		songArtist: `sullii`, songAlbumTitle: `wake up next to me`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273e8e7b399c1c32046e3b6537a`,
		songLink: `https://open.spotify.com/track/27NAnAbTogvdnaR76t79uN?si=3809925b56cb4d30`,
		songReview: ``,
		songLyrics: `^!^[up]Fuuuuuccckkkkkk!!!!!![/up]^/!^

Don’t leave when you know that I’m a safe bet
Lying through the concrete, tryna keep the rain iiiiin
<i>All this time and you try to tell me 
I thought that I look cool with you round me
I couldn’t stop you thinking about me again</i>

^!^I’m freezing and worried Imma burn out
Standing on your porch still tryna get my words out
Don’t leave baby, I could be your safe bet
Lying through the concrete, maybe we should rain check

All this time and you try to tell me 
how the ground fell through when you found me,
[up]I wish that it was you thinking 'bout me againnnnn!!!![/up]</!>`,
		},
	{ songTitle: `Me & You Together Song`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273840bd76cfcb271385978a6a6`,
		songLink: `https://open.spotify.com/track/4AQzk2yNWKs6sYhZi6NzVN?si=e9dea3da9a5e4489`,
		songReview: ``,
		songLyrics: `i've been in love with her for ages
And I can't seem to get it right…
I fell in love with her in stages
My whole life~~~~`,
		},
	{ songTitle: `After Dark`,
		songArtist: `asian kung-fu generation`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a9ad390f59f140f7895327fb`,
		songLink: `https://open.spotify.com/track/5CyUzHTWZfrB0xm31tr7SD`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `rejecter`,
		songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: `ruiner`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a6b4b633c0ed80c853e9ac50`,
		songLink: `https://open.spotify.com/track/4IPKfv5dbRdfQujHMtsPcc?si=a4a87318f45d46c6`,
		songReview: ``,
		songLyrics: `Laying on the freeway
Thinking 'bout what she say
Waiting for a semi-truck
Like I don't even give a fuck `,
		},
	{ songTitle: `Light With a Sharpened Edge`,
		songArtist: `the used`, songAlbumTitle: `in love and death`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273b5bc4686d08a5812a63f180d`,
		songLink: `https://open.spotify.com/track/52JTm74BAXB37krURlHPRl?si=72026cc1874e422a`,
		songReview: ``,
		songLyrics: `It's not me
Buried wreckage, my soul
It's not me
^!^So who am I now?????^/!^`,
		},
	{ songTitle: `NOT FAIR`,
		songArtist: `the kid laroi + corbin`, songAlbumTitle: `f*ck love 3+: over you`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273b4d59e6fa7e5e7cbc57ac33a`,
		songLink: `https://open.spotify.com/track/10XwT9r62bJtgK07aaitUk?si=73705af8bd794d31`,
		songReview: ``,
		songLyrics: `I can't cum unless you kiss me

You don't wanna come around here
It's hard for me to show you I care
Don't wanna be myself I'm too scared
Yeah, yeah, I'm too scared`,
		},
	{ songTitle: `Keep Screaming`,
		songArtist: `lil narnia`, songAlbumTitle: `pain extract`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273c94c9697f9c081abe9272545`,
		songLink: `https://open.spotify.com/track/2uDJxmMs4fYzFtnVvi5EKp?si=ba9d159c68354563`,
		songReview: ``,
		songLyrics: `Oh those eyes remind me that it all ends bad
Hold her hand with the IV sticking out I cant
Sit and say goodbye please baby don't leave
^!^It should have been me...
[up]It should have been meeeee!!![/up]^/!^`,
		},
	{ songTitle: `Haruka Kanta`,
		songArtist: `asian kung-fu generation`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27363d5c2b683fd0c7316ef9b34`,
		songLink: `https://open.spotify.com/track/052C0m9kD30nZqcPWPPRqm?si=bf629c2036464ee8`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `where the wind blows`,
		songArtist: `caspr (ppg casper)`, songAlbumTitle: `where the wind blows`, songAlbumCover: `https://images.genius.com/58ccc343c26ddbb73f684152c614f819.500x500x1.jpg`,
		songLink: `https://www.youtube.com/watch?v=hhsUOcodalk`,
		songReview: `i really wish caspr could put this on spotify 😭 i know he has had label issues for years but this is such a great song.
					he blends all of his strengths as an artist with this song and i think its so beautiful <333`,
		songLyrics: `"promise that ill fix u~
					will u fix me???
					i got issues baby, yea~~~~"`,
		},
	{ songTitle: `Yearbook`,
		songArtist: `james ivy + harry teardrop + instupendo`, songAlbumTitle: `yearbook`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736db3b8ecfb7844435c8777d9`,
		songLink: `https://open.spotify.com/track/3HuC5shT06bdWZViLEbNqi?si=db9259b0d56748b2`,
		songReview: ``,
		songLyrics: `You still cut my breath short when you walk by
I'm in Amy's backyard and I'm wide eyed, tongue-tied
You cut your hair to your shoulders
I say it makes you look older
And now I'm playing with your hands in Florida
An out-of-breath and close-to-death euphoria
I'm fallin' in and out of it again
I'm fallin' in and out of it again and again and again

Got drunk passed out in your swimming pool
Spent the whole summer in your living room <3333`,
		},
	{ songTitle: `Standing Alone`,
		songArtist: `armor for sleep`, songAlbumTitle: `what to do when you are dead`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733439ed02bb1efcd748df6baa`,
		songLink: `https://open.spotify.com/track/3bH0Dg5POKn4tgyqgSKuxE?si=60d0f8cd10444b31`,
		songReview: ``,
		songLyrics: `It looked so good from here
But nothing works foreverrrrrr

It crashed into the ground
I knew that you’d be wandering ’till you were
Standing alone in the wreckage
Looking for pieces
you can salvageeee
Everything’s all so twisted up
^^But you can’t stay away from disasters^/^`,
		},
	{ songTitle: `It's Not Living (If It's Not With You)`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273485f550938133100829e73f8`,
		songLink: `https://open.spotify.com/track/3TgMcrV32NUKjEG2ujn9eh?si=8eb7e9c1460947b4`,
		songReview: ``,
		songLyrics: `And all I do 
is sit and think about you
If I knew what you'd do
Collapse my veins, wearing beautiful shoes
^^It's not living if it's not with you!^/^
All I do is sit and drink without you
If I choose, 
then I lose
Distract my brain from the terrible news
^^It's not living if it's not with you^/^`,
		},
	{ songTitle: `Sometimes`,
		songArtist: `my bloody valentine`, songAlbumTitle: `loveless`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2730ede770070357575bc050511`,
		songLink: `https://open.spotify.com/track/5KBKqxYY263Tr0haAu3fMz?si=167678b01ac84759`,
		songReview: ``,
		songLyrics: `Close my eyes, 
		feel me nooooow
I don't know 
how you could not love me nooooowww...`,
		},
	{ songTitle: `I Would Hate You If I Could`,
		songArtist: `turnover`, songAlbumTitle: `peripheral vision`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738810645138bfcbd3707f2290`,
		songLink: `https://open.spotify.com/track/5M8YrY0L5SWV2Nt7ti98ZW?si=81832f13b92e4e94`,
		songReview: ``,
		songLyrics: `I hear you've been telling all your friends that you're done with me
Like you always knew things wouldn't work out
And I've been hearing things from people that I don't want to talk to
Like it matters who you're sleeping with now
Can I erase from my mind anything that you said
Or any time that we spent with each other?
^^I don't wanna waste away another cell on a memory
When you're just another meaningless lover^/^ 💔`,
		},
	{ songTitle: `Gym Class`,
		songArtist: `lil peep`, songAlbumTitle: `gym class`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273f29c7353407114a7e08330d4`,
		songLink: `https://open.spotify.com/track/08AJ0xQv5LRZsvXf1Jkr2y?si=fde58b529eb142a4`,
		songReview: ``,
		songLyrics: `Getting high, taking bars till we on Mars
I could make the ground move like I'm Avatar
Now I'm faded on my own in my bedroom
Now I'm looking at my phone, should I text you?
I just wanna sex you, I just wanna bless you
Baby, I'm a priest in the underworld, guess who
Lil Bo Peep with a brand new flow, too
Lookin' at my teeth like you never seen a gold tooth
Never in the streets, 'cause I never leave my home
If you wanna live a dream I ain't coming, bitch, I told you <3333`,
		},
	{ songTitle: `Ceilings`,
		songArtist: `local natives`, songAlbumTitle: `hummingbird`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27312843952346aaa03f1f67970`,
		songLink: `https://open.spotify.com/track/1lTlQGQzaZoNX8SDNqYtUi?si=c9bf87aa1ca04828`,
		songReview: ``,
		songLyrics: `You haven't stopped your smoking yet
So I'll share your cigarette
<i>~~~~~Just to feel it in my fingeeeeeers~~~~~</i>

Walk around 'til 3 a.m
Tell me what I know again
<i>~~~~~To keep myself from second guessing~~~~~</i>

<i>~~~~~All my 
silverrrrrr 
dreamssssss 
bring me 
to youuuu-oooouuu-oouuu~~~~~</i>`,
		},
	{ songTitle: `Sweet Disposition`,
		songArtist: `the temper trap`, songAlbumTitle: `conditions`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27357a0868419086b576553c9f4`,
		songLink: `https://open.spotify.com/track/5RoIXwyTCdyUjpMMkk4uPd?si=874c5df9257744c8`,
		songReview: ``,
		songLyrics: `A moment, a love, a dream, aloud
A kiss, a cry, our rights, our wrongs
A moment, <i>a ~~~~looooooveeeee~~~~</i>

So stay thereeeeeeee
'Cause I'll be comin' overrrrrrr
And while our blood's still young
^^It's so young, 
it runssss^/!^
And won't stop 'til it's overrrrrr
Won't stop to surrenderrrrrr <33333`,
		},
	{ songTitle: `Dark Blue`,
		songArtist: `jack's mannequin`, songAlbumTitle: `everything in transit`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273ca9cb73f907a5714c038bd24`,
		songLink: `https://open.spotify.com/track/3tZwKujD64Ad6vlDVxZOrg?si=e0785dd5cc7745c2`,
		songReview: ``,
		songLyrics: `And when the water reached the West Coast
And took the power lines
And it was me and you
<i>And the whole town under waterrrrrrr</i>
There was nothin' we could do…
It was ^^dark blueeeeeee^/^

Dark blue, dark blue
Have you ever been alone in a crowded room
When I'm here with you?
I said the world could be burnin', burnin' down
Dark blue, dark blue
Have you ever been alone in a crowded room?
Well I'm here with you
I said the world could be burnin'
<i>'Til there's nothin' but dark blue
Just daaaaaark blueeeee</i>`,
		},
	{ songTitle: `All That I've Got`,
		songArtist: `the used`, songAlbumTitle: `all that ive got`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273840bd76cfcb271385978a6a6`,
		songLink: `https://open.spotify.com/track/6IxQ0PdozaZKch1m8tGCwb?si=0a54d46f09614107`,
		songReview: ``,
		songLyrics: `So deep
that it didn't even bleed and catch me
Off guard, 
red-handed
Now I'm far from lonely
<i>Asleep I still see you lying next to me</i>
^^So deep that it didn't even bleed and catch me^/^

^!^I'll be just fine
Pretending I'm not!!!
I'm far from lonely
And it's all that I've got!!!!</!>`,
		},
	{ songTitle: `Hopes Up`,
		songArtist: `nothing,\u200Bnowhere. + dashboard confessional`, songAlbumTitle: `reaper`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733f26f51e52c3fd057890d757`,
		songLink: `https://open.spotify.com/track/1w5dZMSwIM242ymwTv0PAi?si=08d278093928443b`,
		songReview: ``,
		songLyrics: `When I think of love I see your face
But when I think of you I think of pain 🩸🗡️
My heart and mind are not on the same page
It's obvious I get carried away

Now it's 3AM and I'm on the phone
Checking on your page while I'm all alone
You'd think I'd learn or I'd try to change
^!^Why does this always end the same?

I'm tired of falling out of loveeeee
I'm tired of the rise and fallllllll
I'll leave before it starts…
[up]Cause I don't wanna get my hopes up!!!![/up]^/!^`,
		},
	{ songTitle: `ornament - one take`,
		songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: `one takes vol. 1`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735eaa4b96ea6169e985e16701`,
		songLink: `https://open.spotify.com/track/01uAJqVU894f3b2Osab88V?si=82bbd565bdec4b54`,
		songReview: ``,
		songLyrics: `In time, 
I'll be hanging on your nightstand by myself
As I sit in the dust while you lay with someone else
And I wish that you could feel how it felt
^^Knowing I am just an ornament on your shelf^/^ 💔

Cause every single day I wanna blame myself
I'm with you when you sleep but you're with someone else
And every single day you see my colors fade
^^I'm just that picture that you haven't thrown away^/^
And I can see the pain when you see my face
<i>And you can close the drawer but that won't change a thingggg</i>
Every single day you see my colors fade…
^^I'm just that picture that you haven't thrown away^/^

Now I gotta keep it all in like it's all good…
But everything changed when you left me in Oakwood
And if you could take it back I know you would
Won't throw me away when you know you should
Tell me what's real, is it all in my head?
Every night, every word that I said
They say move on, but I'm better off dead
How can I sleep when I'm next to your bed?
How can you keep me confined in a frame?
Memories fading, the faces will change

^^But I still live in your head, so I stay
Next to your bed, watch me wither away^/^`,
		},
	{ songTitle: `Always a Wish`,
		songArtist: `armor for sleep`, songAlbumTitle: `what to do when you are dead`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733439ed02bb1efcd748df6baa`,
		songLink: `https://open.spotify.com/track/19Dz5aHz22nwZDswxt5y9N?si=abd7c1b8a5f344d4`,
		songReview: ``,
		songLyrics: `You can wander off forever
					And if you fall I’ll pick you up and carry you home again

					I’ve been chasing you since we were kids
					I’ve watched you change 
					but still love every part of you there is
					^!^I’ve been chasing you since we were kids^/!^
					<i>Pull on my sleeve
					Im worried about u...</i>

					But I know uuuuu~~~
					More than they doooo~~~
					I’ll be right hereeee~~~
					^^When they all leave you behind^/^
					<i>And I know that dreams 
					don’t come true</i>
					^!^But if you wanna dance 
					I’ll be hiding out in the shadows waiting

					Saving the last dance for you~~~
					Saving the last 
					[up]dance for youuuuu!!![/up]^/!^`,
		},
	{ songTitle: `Love Song of New Century`,
		songArtist: `asian kung-fu generation`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-v9diDVdp57vI-0-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/0U6MLwYotz5XrejU9SI2Bu`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Rewrite`,
		songArtist: `asian kung-fu generation`, songAlbumTitle: ``, songAlbumCover: `https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/69/3b/ec/693bec5e-bfb9-7d6f-a619-1565d6357c6e/jacket_KSCL00696B00Z_550.jpg/600x600bf-60.jpg`,
		songLink: `https://open.spotify.com/track/052C0m9kD30nZqcPWPPRqm?si=bf629c2036464ee8`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Early Sunsets Over Monroeville`,
		songArtist: `my chemical romance`, songAlbumTitle: `i brought you my bullets, you brought me your love`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273fb621d5b06b2ff5985ff6c27`,
		songLink: `https://open.spotify.com/track/2aHqdN4K9naX3oBuUxp6zf?si=3332c4a6f9344b49`,
		songReview: ``,
		songLyrics: `Late dawns and early sunsets 🌇
Just like my favorite scenes
Then holding hands, and life was perfect
Just like up on the screeeeeeeen

Running away and hiding withhhh uuuuuuuu~~~
I never thought they'd getttttt meeee hereeeee
Not knowing you changed from juuuuust oneeeee biiiiiite 🧛
I fought them all off 
^^just to hold you 
close and tight^/^

But does anyone notice? 
But does anyone care??
And if I had the guts 
^^to put this to your head^/^
But would anything matter 
^^if you're already dead?^/^
And should I be shocked now, 
by the last thing you said?
Before I pull this trigger, your eyes vacant and stained
And in saying you loved me made things harder, at best
^!^[up]But does aaaaaaanyone notice??!!?!
But does aaaaanyone care?!!!?!^/!^[/up]`,
		},
	{ songTitle: `Clairvoyant`,
		songArtist: `the story so far`, songAlbumTitle: `clairvoyant`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273897fd0d916c6fdaa02ef0464`,
		songLink: `https://open.spotify.com/track/5fgnsSQYKIlEn2KTQcGjh2?si=bc0f5c908ee449a4`,
		songReview: ``,
		songLyrics: `I think you'll notice when things become different
The good vibes in our lives won't feel so consistent

The way that you left me is alright, it's alright
If I argue the point then we yell and we fight
And I won't be home for the rest of the night
You might hate my words but you know that I'm right
<i>You know that I'm right</i>

This is your life, there's no way to run from it
The doubt in your brain or the pain in your stomach`,
		},
	{ songTitle: `won't let this go`,
		songArtist: `fats'e`, songAlbumTitle: `staring at the ceiling`, songAlbumCover: `https://images.genius.com/d3467ba40648a51b7a3cbb69d6db80cb.500x500x1.jpg`,
		songLink: `https://open.spotify.com/track/3levuRgOJwMuVF2P06sIfU?si=367c3786e57f4b1d`,
		songReview: ``,
		songLyrics: `In the pockettttt
Of yesterday's pants in the closetttttt
There's a note that you left me
And I think I forgot to read it…
^^But I'll read it^^

No, I won't let this go
No, I won't let this go
<i>And I'll never let this gooooooo</i>

^!^Now I'm back on my bullshit!!!!!
No more sentimental things!!!!
I have to make noise!!
I have to make noise!!!!
I don't know whyyyyyy
[up]My ears ring every night!!!![/up]^/!^
While I'm trying to sleep
^!^It's very worrisome^/!^`,
		},
	{ songTitle: `me and mine`,
		songArtist: `sullii`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273e2f1cefd596c5dd6e896cee7`,
		songLink: `https://open.spotify.com/track/4WnHYTg52lf0lWxebQdEo2?si=d8a8c9817b344153`,
		songReview: ``,
		songLyrics: `If they find me and my body
In the dirt lay right beside your house
<i>Do I have to? I’m a nightmare
Guess you’ll have to drag me all back out</i>
And to the friends that had my back
I guess you’ll be wanting this knife back
<i>You hate me, how you hate me
Take a deep breath in and just relapse</i>
And if thеy find me and my body
They’ll talk of how I made thеm proud
^^Then ask me why I couldn’t stay
As they drag my body to the ground…^/^ 🪦`,
		},
	{ songTitle: `laced up`,
		songArtist: `tsubi club`, songAlbumTitle: `laced up`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a61b296646414808aef3579b`,
		songLink: `https://open.spotify.com/track/76dVXaLfVAbtoyARKjSUcK?si=4fcfcdef65e94203`,
		songReview: ``,
		songLyrics: `I hate it, I hate it, I hate it, thanks so much
I hate it, I hate it, I hate it, I hate it`,
		},
	{ songTitle: `커피를 마시고 Coffee - Reprise`,
		songArtist: `urban zapaka`, songAlbumTitle: `01`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273014fa950326773be715e087e`,
		songLink: `https://open.spotify.com/track/3PX5Hkkhh4da6Sntk3LwYo?si=610a0a65f91d4160`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Free Fallin' - Live 2007`,
		songArtist: `john mayer`, songAlbumTitle: `where the light is: john mayer live`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735b9c332f9f76cabc137e400f`,
		songLink: `https://open.spotify.com/track/4LloVtxNZpeh7q7xdi1DQc?si=4289e5abb61c4416`,
		songReview: ``,
		songLyrics: `It's a looooong day 
living in Reseda
There's a freeeeeeway 
running through the yard~~~~
I'm a baaaaad boy 
^^'cause I don't even miss her…^/^
I'm a baaaaad boy 
^^for breaking her heart^/^ 💔

All the vampires walking through the valley
They move west down <i>Ventura Boulevard</i>
And all the baaaaad boys 
^^are standing in the shadows^/^
And the good girls 
^^are home with broken hearts^/^ 💔`,
		},
	{ songTitle: `Sincerity Is Scary`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736223cee839558ed11d93b9d2`,
		songLink: `https://open.spotify.com/track/6HguG9HRb1Ke1bhihfE4m8?si=35fc51a678b84619`,
		songReview: ``,
		songLyrics: `I'm sure that you're not just another girl
I'm sure that you're gonna say that I was sexist
I feel like you're running out of all the things I liked you for

Why can't we be friends when we are lovers?
'Cause it always ends with us hating each other
Instead of calling me out,
~~~~you should be pulling me in~~~~ <33333`,
		},
	{ songTitle: `Texas`,
		songArtist: `james ivy`, songAlbumTitle: `texas`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273cc2d90a8b5f7e4ab163bdad7`,
		songLink: `https://open.spotify.com/track/7yc8YGdQiLU5O7mxe1C6QE?si=489415258caa4d27`,
		songReview: ``,
		songLyrics: `<i>What can I do to find out
If I ever meant something to you?
I fall out of the wrong side of the bed
Was it something I said?
I'm just talking to you from inside of my head</i>

^^You want the way that I feel
It's in the back of my mind
I want it all of the time
I want it all of the time
I'm tasting blood in my mouth
I'm seeing ghosts in my house
I'm stuck but I got it down
I'm stuck but I got it downnnnnn^/^

^!^I've found a way to make it real!^/!^
You'll never take it back from me~~~~~
^!^I've found a way to make it real!^/!^
You'll never take it back from me~~~~~`,
		},
	{ songTitle: `LOVE.`,
		songArtist: `kendrick lamar + zacari`, songAlbumTitle: `damn.`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699`,
		songLink: `https://open.spotify.com/track/6PGoSes0D9eUDeeAafB2As?si=80dfb0fe495444bb`,
		songReview: ``,
		songLyrics: `Oh, by the way, 
open the door, by the way
Told you that I'm on the way
I'm on the way, 
I know connection is vague
Pick up the phone for me, babe

Remember Gardena? 
I took the studio Camry
I know Top will be mad at me
I had to do it, 
I want your body, your music
I bought the big one to prove it
Look what you made
Told you that I'm on the way
^^I'm like an exit away,
yea^/^

I wanna be with you, ayy, I wanna be with you
<i>~~~~~Just love me, just love me~~~~~</i>`,
		},
	{ songTitle: `Black Heart`,
		songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: `reaper`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733f26f51e52c3fd057890d757`,
		songLink: `https://open.spotify.com/track/3Bw0KL26dbUaoRKPaowQal?si=92e4901dc7324cc5`,
		songReview: ``,
		songLyrics: `You're just another reason why I stay inside
Just another reason why I hate this life
This has been a long time coming, I swear
This has been a long time coming, I swear
And I can't seem to let go of the hate inside
Every time I'm close you go and change my mind
This has been a long time coming, I swear
This has been a long time coming, I swearrrrr 💔`,
		},
	{ songTitle: `im sorry i never texted u back`,
		songArtist: `fats'e`, songAlbumTitle: `im sorry i never texted u back`, songAlbumCover: `https://images.genius.com/bc23ae01c83f3bca32928c3265d5afb4.800x719x1.jpg`,
		songLink: `https://open.spotify.com/track/6pIc7umWZQA4qZnU2ybkEB?si=bfccd02bda0441ca`,
		songReview: ``,
		songLyrics: `We fall asleep while on the phone
A couple times before we meet
I see you staring at the wall
I hear you talking in your sleep
I didn’t mean to blow you off
That day I ruined everything
That day I ruined everything

^^but thats just how the story goooeeessss^/^

<i>Time has accelerated
Pour one out for the ones who didn’t make it
Pour my heart out to you lying in your bed</i>
^^I’m sorry I never texted^/^ 😣`,
		},
	{ songTitle: `Rare`,
		songArtist: `man overboard`, songAlbumTitle: `man overboard`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2739776b4dc1f80c3830b7d311b`,
		songLink: `https://open.spotify.com/track/4bFZGJeyDeaPkraKGXUy71?si=98ed9766a5d74d9a`,
		songReview: ``,
		songLyrics: `I would like to think you’re okay without me
And your happy thoughts are rarely about me
^!^You’re so worth all of this torture
You’re so worth all of this torture^/!^`,
		},
	{ songTitle: `Scream Mountain`,
		songArtist: `hot mulligan`, songAlbumTitle: `pilot`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273597e821e98e1e6c7e8b609b4`,
		songLink: `https://open.spotify.com/track/2y9nKLOpmIBxCXNW05ZZef?si=c4ac5648e3264d88`,
		songReview: ``,
		songLyrics: `And iiiiiiiii knowwwwww 
that I’m just like uuuuu
because I hate uuuuu
And iiiiiiive grownnnnn 
^^to pretend you were here so that I’m not alone…^/^`,
		},
	{ songTitle: `Grin`,
		songArtist: `sideview drive`, songAlbumTitle: `keeping honest`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a85869d4f3f2317c887bf194`,
		songLink: `https://open.spotify.com/track/54Pkr1i9FOv9UAlG0rLTjk?si=48192242ca0a48ac`,
		songReview: ``,
		songLyrics: `Hold ur breath
Like u always do
Try ur best just to hide the truthhhh

U burn the pictures ill do the same
We were flawed in the first place
^^And its not ok to treat me this waaayyyy^/^

And Ill light the maaaaatch
And ill burn this bridge with only 
[UP]HOW U WANTED, KEEPING HONEST[/UP]

Its the hardest part of trying
When Im so fucking used to i lying
Right thru that grin of urs
Oh god i love the way you look at me when u smile


Do u remember when wed stay out late in the city light
And ur eyes would shine in the moonlight
And u wanted not to cry cuz u knew that one day we would
^!^have to say goodbye!!^/!^ 😞`,
		},
	{ songTitle: `Heartbreaker`,
		songArtist: `autoheart`, songAlbumTitle: `punch`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2731cac138cde26f65cfc56adc0`,
		songLink: `https://open.spotify.com/track/2sF9Mq4TWW2iSM8c0x1Aai?si=75b546fe46ad4cb3`,
		songReview: ``,
		songLyrics: `Heartbreaker
You are all that I see in my 
immediate future`,
		},
	{ songTitle: `FUCKPARTY`,
		songArtist: `sewerperson`, songAlbumTitle: `feathers n glue`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273de542f8f441e7f8b4705a4f0`,
		songLink: `https://open.spotify.com/track/5etQimeo6bWdmN1RDskj1W?si=9b339ac757d24ea0`,
		songReview: ``,
		songLyrics: `Multi-coloured powders in my breakfast
I don't drink the water, I need to sweat this
She told me I'm a red flag checklist
^!^stfu, I hope you die in a fire, fr^/!^ 🔥`,
		},
	{ songTitle: `Spirit Desire`,
		songArtist: `tigers jaw`, songAlbumTitle: `spirit desire`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273fa4866c2ffae5cb4233f5733`,
		songLink: `https://open.spotify.com/track/3PTKa8qgM7axIkatKDxVft?si=52cf03aa1f6942c8`,
		songReview: ``,
		songLyrics: `It still feels new when I talk to you
I feel reborn when the sun gets warm
It's hard but I feel better when I'm not inside
I get scared you'll leave me soon
Even though we call each other every afternoon

I used to want to show you every single line
Now it's hard for me to show you anything I write
I know that I get nervous when we're not alone
But I wait for you for hours when you're coming home`,
		},
	{ songTitle: `Buried Myself Alive`,
		songArtist: `the used`, songAlbumTitle: `the used`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273850d8da4ce418aba90f156d0`,
		songLink: `https://open.spotify.com/track/746bHsY27aWTMYpoxqECOm?si=0617b8207b464fa5`,
		songReview: ``,
		songLyrics: `You almost always pick the best times
to drop the worst lines
You almost made me cry again this time

I think I made it a game to play your game and let myself cry
Buried myself alive on the insideeee 
so I could shut you outtttt
^!^And let you go away for a looooong tiiiiime^/!^

^!^[UP]God!!!!![/UP]^/!^

^^I guess it's okay I puked the day away
I guess it's better you trapped yourself in your own waaaaaay^/^
And if you want me back, 
you're gonna have to ask
^!^Nicer than that, 
nicer than that!!!!^/!^

^!^[UP]NICER!!!!!...
NICERRRRR!!!!!![/UP]^/!^`,
		},
	{ songTitle: `Calling All Cars`,
		songArtist: `senses fail`, songAlbumTitle: `still searching`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2739df48b372c06a24c03fa17a6`,
		songLink: `https://open.spotify.com/track/4LtUNqSiFZzm70a7kM8hnc?si=13c200757b7c4999`,
		songReview: `review`,
		songLyrics: `So will you scatter my ashes where they won't be found?
I kept my word when I swore that I would let you down
And now that I'm gone
Try to forget me, and just move on
So will you scatter my ashes where they won't be found?
I kept my word, and you hate me for it now

^!^u hate me for it nowwwwww^/!^`,
		},
	{ songTitle: `Weight of the Wind`,
		songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: `who are you?`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735734b84fefb7bf855c822fca`,
		songLink: `https://open.spotify.com/track/7avXR8uTcmE9Cy69tcQoew?si=492bb40c11584208`,
		songReview: `yap yap`,
		songLyrics: `And I can hear the pain in the way that you say my name
<i>~~~~The cold gaze in your eyes~~~~</i>
Tell me all the things that keep you up at night
If you sleep forever then you'll never have to fight

I'm like "Damn, how did it get like this?"
I still hate my life, I'm still full of shit
And I got a thing for destruction
Down all the pills, 
said ^!^[up]fuck the instructions[/up]

I can make the things that I love dieeeee
Ruin everything that's kept me aliveeeee
Push away the people who stood by my sideeee^/!^
They ask me why I do it
^^I don't know whyyyyyy^/^ 😔`,
		},	
	{ songTitle: `ctrl alt del`,
		songArtist: `corbin`, songAlbumTitle: `ghost with skin`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27362ca5d840aaf7a55db118534`,
		songLink: `https://open.spotify.com/track/2sQLX7xGiCRtjdJQChFwqe?si=2741a06392a5446e`,
		songReview: ``,
		songLyrics: `I feel numb, I can't forget, yeah
Your sweet nothings bite my lip
I can't get up, I feel like shit
I've been goin' through withdrawals, you're the drug I miss
<i>I feel sick, I need Robitussin
I just lost my motor functions</i>

I know it's hard to believe that I have feelings too
You cut like a knife, how much blood did I lose? 🩸🔪
Crisis, I was banking on you
Our vices, you would binge on me too…
`,
		},
	{ songTitle: `duet`,
		songArtist: `polearm`, songAlbumTitle: `222`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27325bd21d27d1c4e407741dd17`,
		songLink: `https://open.spotify.com/track/1BBDpPtBhqw0nd84xNAZd0?si=db3d9540d4864e45`,
		songReview: ``,
		songLyrics: `I never ask you for a thing, need no inquiry
So, why can't you ever erase me from your diary?
You’ll never get another pleasure 'long as I breathe
And I can’t handle all the pressure, buckle my knees

You’re sick, you won’t stop dreaming about me
You don’t mean it, saying you won’t breathe without me

And I still miss you, it’s not like I don't want you back
Leave you begging for some more, you can have your fun with that
It still doesn’t make a difference if you ever miss me back
Maybe leave you for the winter, let's see how you cope with that
Another itch, another cut, another stitch
Not surprising in the slightest how you won’t give me an inch`,
		},
	{ songTitle: `Alibis`,
		songArtist: `marinas trench`, songAlbumTitle: `fix me`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733281a49d36e9344011d593ff`,
		songLink: `https://open.spotify.com/track/5Bolj930O9vxycMoLy1Bb1?si=13bdca60b1f14f65`,
		songReview: ``,
		songLyrics: `~~~~All my faces are alibis~~~~~
<i>I'm half the man I wanted to be…</i>`,
		},
	{ songTitle: `night at work`,
		songArtist: `kurtains`, songAlbumTitle: `florence fields`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738201cb664d7af648b2ab6d0b`,
		songLink: `https://open.spotify.com/track/0o4hxw4uTsKNId65cK6NBG?si=e0bf9ffc1b9b49d1`,
		songReview: ``,
		songLyrics: `Girl, I'll call you when I finish up at work
					And I promise to you that I'll make it worth it
					And I'm sorry that I couldn't make it work when
					You needed me the most and I was hopeless
					~~~~Girl, I can make it up to you, I swear~~~~
					^^~~~~And I can tell you find it hard~~~~^/^
					But I just wanna show you that I care
					^^And I didn't mean to hurt you… <33333^/^`,
		},
	{ songTitle: `whatever it takes`,
		songArtist: `convolk + sewerperson + guardin`, songAlbumTitle: `whatever it takes`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2730b67e663e96eb22258098622`,
		songLink: `https://open.spotify.com/track/4paTIojVRwNvVfS70Q0nvT?si=383f86e8abd54e97`,
		songReview: ``,
		songLyrics: `Every move that I make
					Every promise I break 
					I'll be there for you
					I'll do whatever it takes 
					I'll do whatever it takes 
					to be there for you

					I could fall again and get stuck with you for a night again
					^^I miss you on my skin 
					come make me feel right agaaaain^/^
					(i totally used these lyrics in my song ^^”i wish that i could hate u”^/^ because theyre just so relatable to me :)`,
		},
	{ songTitle: `Dont Wanna Dance`,
		songArtist: `caspr (ppg casper) + pasto flaco`, songAlbumTitle: `dont wanna dance`, songAlbumCover: `https://cdn-images.dzcdn.net/images/cover/d1c7c1185f6f9855d0d55b1555da4a56/0x1900-000000-80-0-0.jpg`,
		songLink: `https://open.spotify.com/track/3A64kFtr40bOffNedhdlTU`,
		songReview: ``,
		songLyrics: `Bitch, I'm on drugs, 
I don't wanna dance
I just copped designer pants
I know how you feel, it's how I feel
You know I understand

^^One, two, three, four, five, six, seven, eight, nine, ten^/^ 🔥🔢
I cannot fuck with you n****,
you n**** be worrying about all of the nonsense`,
		},
	{ songTitle: `Patient`,
		songArtist: `sullii + lontalius`, songAlbumTitle: `patient`, songAlbumCover: `https://images.genius.com/5277da6a64a20780432ce9a433ee1f02.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/6p10iEYKnj6EzrS5qzGBSH?si=a9cb280f44624953`,
		songReview: ``,
		songLyrics: `I try and keep my eyes up on ya
It's latе on your drive but your light was on ya
<i>~~~~I wait outside only time I want ya
Still latе, I can't stay at all~~~~</i>

I can't think about you when
Tryna write but I haven't found me yet
I'm outside of your house and I'm freezing
I can't sleep when I know it shakes me up
Tryna write but I couldn't make me up
I'm outside of your house and I froze up`,
		},
	{ songTitle: `You Won't Remember...`,
		songArtist: `bibio`, songAlbumTitle: `silver wilkinson`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736ca462741e173b33aa0b37e1`,
		songLink: `https://open.spotify.com/track/7DZIXHoj13Dwe0ys58zcyP?si=112f1414a1784143`,
		songReview: ``,
		songLyrics: `He sees you
More than you could know
In his chair at night
He can't clear his mind

Silence hurts
No-distractions-ache
Then he gets the call
And he drives for miles

You won't remember
But he wanted you
He'd like to tell you
That he wanted you

You won't remember
But he wanted you
He'd like to tell you
That you're haunting him 🫥`
		},
	{ songTitle: `thingsudo2me`,
		songArtist: `ericdoa + brakence`, songAlbumTitle: `coa`, songAlbumCover: `https://i1.sndcdn.com/artworks-w8gH5Vwjx8Ue-0-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/1pQxJJghbHSI1BAcxxtxm5?si=6eaadb6e6de0499a`,
		songReview: ``,
		songLyrics: `I fall all over the place
Find a way to keep me down and kickin' dirt in my face
I heard it all, there's not a lot of stupid shit you could say
I'm down the road, pick up my phone, ask what you doin' today
Girl, what you doin' to me?

It's 2 p.m. and you're texting me, "Are you up yet?"
You bring it up and I'm askin' to change the subject
Upset, baby, you in love yet?
Up nеxt, unkept, new friends actin' suspеct
Decline, realize, 
tell me what you feel like
Take me, save me,
^^tell me this is real life^/^`,
		},
	{ songTitle: `The Taste of Ink`,
		songArtist: `the used`, songAlbumTitle: `the used`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273850d8da4ce418aba90f156d0`,
		songLink: `https://open.spotify.com/track/5jZ1Z2GFTf2gwmFc3qiUxs?si=c1fcd0a5e04c4048`,
		songReview: ``,
		songLyrics: `Don't you think I'm pretty when I'm standing top the bright-lit city?
And I'll take your hand and pick you up, 
and keep you there 
^!^[UP]so you can see it!!!^/!^[/UP]
As long as you're alive and care, 
I promise I will take you there
^!^[UP]So long as you're alive and care, 
I promise I will take you thereeeee!!!!^/!^[/UP]`,
		},
	{ songTitle: `keep a secret`,
		songArtist: `polearm`, songAlbumTitle: `222`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27325bd21d27d1c4e407741dd17`,
		songLink: `https://open.spotify.com/track/5EFWKa8AZWpSV6DZgzeKMN?si=bed23ceaadb94d3e`,
		songReview: ``,
		songLyrics: `I’m swearing as soon as you opened the door was the moment you had me
As badly as I wanna be in love, I can’t be
The role that I know that I only can play is the hopeless romantic
But the way you come onto me is honestly sending me into a panic

Can you keep a secret?
^^They won’t ever have to know it if you don’t repeat it!!!!^/^`,
		},
	{ songTitle: `Is Anybody Out There?`,
		songArtist: `lil lotus + caspr (ppg casper)`, songAlbumTitle: `all my little scars, vol. 3`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2739e6b576eb968a3d9fa8982d1`,
		songLink: `https://open.spotify.com/track/44unu2dlhkm5Tku5Hs7oCN?si=1f8843fbeec84dfa`,
		songReview: ``,
		songLyrics: `Paranoid, but I can't look back, though
Hearing voices in my head talk back, though
"Hello, hello" and I feel fine
Break my legs and shaking on my spine
Let go, like a ghost, we're wasting time
When I saw your face, I wanna make you mine
I wanna make you mineeee~~~

When you're up and you’re gone every move is a setback
Told me to go and I hate that you said that
If I had the guts then I promise I would
No, it’s never enough, I feel misunderstood`,
		},
	{ songTitle: `missing`,
		songArtist: `sullii`, songAlbumTitle: `wake up next to me`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273e8e7b399c1c32046e3b6537a`,
		songLink: `https://open.spotify.com/track/70o7A1lHqlc4RthFYgH1Vu?si=1ae52a548b604a6c`,
		songReview: ``,
		songLyrics: `I wasn’t ready for anything you could have told me, 
I hope that we could have been real
Maybe if I keep my troubles around me 
you’ll never see how much they’re holding me still

You told me you were listening

^!^I fall back, maybe we’ll be fine
I waste all my time, wake up next to me
I can barely breathe, I can’t stand myself
Fall right back asleep, I don’t owe you that^/!^`,
		},			
	{ songTitle: `Old Friends`,
		songArtist: `pinegrove`, songAlbumTitle: `cardinal`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273b91fccb3df1a12673b42f3e8`,
		songLink: `https://open.spotify.com/track/4ykQ18swXrkrrbwsZKxQo7?si=0738039aab034d4c`,
		songReview: ``,
		songLyrics: `I saw your boyfriend at the Port Authority
Sort of fucked up place
Well so I averted my stride on a quick one
He's coming back from going over to your place, huh?

I feel like I could forget about it
I feel like I could mellow out
I don't feel undone in a big way
There's nothing really bad to be upset about

But when I thought I 
was getting better I
woke up on the ground
An appointment or a disappointment
A setback, oh, another comedown

Walking out in the nighttime springtime
Needling my way home
I saw Leah on the bus a few months ago
I saw some old friends at her funeral

My steps keep splitting my grief
Through these solipsistic moods
I should call my parents when I think of them
Should tell my friends when I love them
Maybe I should have gone out a bit more
When you guys were still in town
I got too caught up in my own shit
That's how every outcome's such a comedown`,
		},
	{ songTitle: `Straightjacket Feeling`,
		songArtist: `the all american rejects`, songAlbumTitle: `move along`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273aaf8c068ffe217db825a1945`,
		songLink: `https://open.spotify.com/track/00GIEePaWvA8PYKlvwszIO?si=fdde837abeea467a`,
		songReview: ``,
		songLyrics: `Try this on, straightjacket feeling
<i>So maybe I won't be aloneeeee~~~~</i>
Take back now, my life you're stealing
Yesterday was hell

But today, I'm fine without you
Run away this time without you
And all I ever thought you would be
That face is tearing holes in me again
And all the things you put me through
I'm holding on by letting go of you`,
		},
	{ songTitle: `Masterpiece Theatre II`,
		songArtist: `marianas trench`, songAlbumTitle: `masterpiece theatre`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27374f1e3995ca48318665c885e`,
		songLink: `https://open.spotify.com/track/0PucGkKFWofLbkAOPowvQA?si=c22c1b2c0a8c4f4e`,
		songReview: ``,
		songLyrics: `I will softly pull away
In this broken beautiful mess I've made
And in the dead of quiet I will slowly fade
In this masterpiece I made…

I'll burn out and slip away
And this is just a part I portray
<i>You're beautiful</i>
Can I hide in you and stay here?

Hush now, they'll hurt you till your heart melts
They know you're lonely
And they will only 
<i>~~~~break your heart~~~~</i>
^!^And this masterpiece will 
tearrrrr you apaaaaarttt^/!^`,
		},
	{ songTitle: `The Truth About Heaven`,
		songArtist: `armor for sleep`, songAlbumTitle: `what to do when you are dead`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733439ed02bb1efcd748df6baa`,
		songLink: `https://open.spotify.com/track/5qAKEQvEMo2TAjOq7qbRsK?si=dba4a191fdb143ec`,
		songReview: ``,
		songLyrics: `I'd trade in forever 
to just hear you say the sound of my name <3333 😢
But that's not why I'm here

I came down here to tell you
It rains in heaven all day long
I wanna find you so bad and let you know
I'm miserable up here without you
Miserable up here without you

^^Don't believeeeee 
that it's betterrrrrr
when you leave everything behiiiiind
Don't believeeeeee
that the weatherrrrr
is perfect the day that you die^/^ 🌧️🌈`,
		},
	{ songTitle: `Escape Plan`,
		songArtist: `tigers jaw`, songAlbumTitle: `spin`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733229828ddbf08835866b5f47`,
		songLink: `https://open.spotify.com/track/22q0Q9kJrricJ75sIp7gTy?si=1b86b2ab07474882`,
		songReview: ``,
		songLyrics: `Under the surface, you confront yourself
You wonder what life would be like if I was someone else
But I am patient, I refuse to concede or believe
That I am only what you want me to beeeeee
Only what you want me to beeeeee

^!^I put it all on the line, 
would you be my [up]escape plaaaaaaan[/up]??!!?!?!!!^/!^`,
		},
	{ songTitle: `1:1`,
		songArtist: `ecco2k + thaiboy digital + yung lean`, songAlbumTitle: `trash island`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27389fc8b71ce74de508e3109af`,
		songLink: `https://open.spotify.com/track/2dOah7YpxtEyjQRgwhRvqf?si=bea85142fe404646`,
		songReview: ``,
		songLyrics: `I can't lose more sleep over you now
Just this last time
Kiss goodbye, I look for a way out
Make a wish on D-9
Pass my time, go slide on the green line
I don’t play, fast forward and rewind
Press pause and I freeze time
And I throw up the peace sign ✌️
Ooh, you're one of a kind
Ooh, I swear it’s a waste of time
Ever since I came into your life, 
I've been losing mine 💔 😞`,
		},
	{ songTitle: `Photograph`,
		songArtist: `nickelback`, songAlbumTitle: `all the right reasons`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273105db7f723f33d9273fbf4d8`,
		songLink: `https://open.spotify.com/track/3hb2ScEVkGchcAQqrPLP0R?si=83f9fb5f2f2c4c96`,
		songReview: ``,
		songLyrics: `Every memory of looking out the back door 🚪
I had the photo album spread out on my bedroom floor
^^It's hard to say it! 
time to say it!!^/^
Goodbyeeee… 
^!^goodbyeeee!!!!!^/!^
Every memory of walking out the front door🚪
I found the photo of the friend that I was looking for
^^It's hard to say it! 
time to say it!!^/^
Goodbyeeee… 
^!^goodbyeeee!!!!!^/!^ 😞`,
		},
	{ songTitle: `Featuring Mark Hoppus`,
		songArtist: `hot mulligan`, songAlbumTitle: `i wont reach out to you`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27366cd2963d58ed1c204d69169`,
		songLink: `https://open.spotify.com/track/41hMYBgv6teOnu64kn4Ylb?si=65adc638d7164055`,
		songReview: ``,
		songLyrics: `I kinda miss you
Back in high school
Twenty-five and I still think about your drawings that you made
I kinda miss you
But I can't talk to you
'Cause in my mind the only thing that I could do now is intrude

I've got a ring I think that she'd love you too
But I can't get past the fact I drag almost everyone down
Painting the walls that lined the hall after school
Smoke and tattoos, five years removed
Hope you'd recognize me now

I didn't think I'd say “I Wanna see you”
I won't reach out to you
After all this time I'd imagine 
I don't fit into your view`,
		},
	{ songTitle: `Lie & Say I Love Her`,
		songArtist: `93feetofsmoke`, songAlbumTitle: `lie & say i love her`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273109c46a727ed405e2846c7eb`,
		songLink: `https://open.spotify.com/track/0hqJ8ZPWWwdqhKfi4qzV97?si=b9195dd12cc6401c`,
		songReview: ``,
		songLyrics: `^!^[up]Nowadays, headache, cold shoulder[/up]
Getting colder, 
guess I'm growing older!!^/!^
I'm a loner, 
^!^[up]lie and say I love her!!![/up]^/!^
You don't come over
^!^[up]when you're sobeeeeerrrrrr!!!![/up]^/!^`,
		},
	{ songTitle: `Wide Awake`,
		songArtist: `man overboard`, songAlbumTitle: `heart attack`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273b480638320ff8d8f51b77977`,
		songLink: `https://open.spotify.com/track/0YrPCuuSlZrydRAObHQ17X?si=bd23de2d83e741b9`,
		songReview: ``,
		songLyrics: `It starts with another day,
alone in your car!!!
There's gotta be another way 
for me to get to you!!!
This distance is real, 
my heart burns at the wheel…
There's gotta be another way 
for me to get to you <3333

^^I saw you leaning on the hood of my car
We're not leaving here, 
[UP]we're not leaving hereeeeeee[/up]
I need to be with you alone in my arms
I am dying here… 
I am dying hereeeeee~~~~~^/^

When you're not 
^!^[UP]homeeeeeee
When you're not homeeeeee[/up]
We're laying wide awake^/!^
We're always wide awake…. 💔`,
		},
	{ songTitle: `An Idea Is a Greater Monument Than a Cathedral`,
		songArtist: `empire! empire! (i was a lonely estate)`, songAlbumTitle: `what it takes to move forward`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736f2ba946a4e085499ec8e7e5`,
		songLink: `https://open.spotify.com/track/2HvaFrmZW0e1YYcuitZoKy?si=890a0a1260a34347`,
		songReview: ``,
		songLyrics: `"Will the same mistakes haunt you 
					like they used to do?
					Or are you afraid 
					that your body won't let you choose?

					You cannot accept the things you can't control
					And I knowwwww 
					your mind is yooung ^^but your body's old!!!^/^
					And you can't forgive yourself, 
					though no one else could blame you 
					for this...

					And already I 
					can't remembeeeer
					if the heaaaart
					was ever awareeeee
					That the body it kept aliveeee 
					was ^^wearing out^/^
					was ^^~~~shutting dooooownn~~~^/^
					And toniiiiight, 
					when it realiiiiized, 
					^!^[up]you gave up 
					⬇️ it cried out!!!![/up]^/!^ ⬇️

					<i>Only now I realize
					I always knew
					(~~~~i always knew!!!~~~~)
					I always knewwwww 💔</i>"`,
		},
	{ songTitle: `The More You Talk The Less I Hear`,
		songArtist: `armor for sleep`, songAlbumTitle: `what to do when you are dead`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733439ed02bb1efcd748df6baa`,
		songLink: `https://open.spotify.com/track/6v49MLTXuo2HJ7PvSUwbM2?si=95b2885850784a45`,
		songReview: ``,
		songLyrics: `You see me, do I look okay to you?
Give me your hand
I'll shake it and shake it again
I'll smile till my face falls off my head
If it's good for you, 
It's good for me too

I just need to see you now
^!^And I don't care about anything else!^/!^`,
		},
	{ songTitle: `How to Make Love Stay`,
		songArtist: `empire! empire! (i was a lonely estate)`, songAlbumTitle: `what to do when you are dead`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736f2ba946a4e085499ec8e7e5`,
		songLink: `https://open.spotify.com/track/7K2bHu6wkZfKnNHSd7W03L?si=2157815d42074f5e`,
		songReview: ``,
		songLyrics: `Remember the flowers you picked
When we crossed over Madison?
You were so sure you found yourself
That you branded it into an oak
The one you swore reached through the sky
And swallowed the city line
You had yet to hit twenty-three
An age that would swallow youuuuuuu~~~`,
		},
	{ songTitle: `Drop a Star`,
		songArtist: `galileo galilie`, songAlbumTitle: `portal`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27349878e5d827207b68f98a733`,
		songLink: `https://open.spotify.com/track/0tckZ6TW8nl3xCGHXSPHiu?si=d481da5fd08f4ab8`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Archangel`,
		songArtist: `burial`, songAlbumTitle: `untrue`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273ad7f95966b473742cd323de8`,
		songLink: `https://open.spotify.com/track/28hwfx6WVMQoOCHMvD2IMJ?si=6e37ea4353134714`,
		songReview: ``,
		songLyrics: `^^Kissing you!^/^
<i>Tell me I belong, 
tell me I belong, 
tell me I belong</i> <3333`,
		},
	{ songTitle: `room to breath`,
		songArtist: `fats'e`, songAlbumTitle: `room to breath`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27386a9560ed3e17246d756f885`,
		songLink: `https://open.spotify.com/track/3Mr7KgAZdL7XRHWrgt40hA?si=c713488779f24dee`,
		songReview: ``,
		songLyrics: `Yeah, I’m kinda glad I won't talk to you again
Should've seen the red flags just a few weeks in
Yeah, I thought for once maybe something could go right
Guess I’m just stuck in this low point in my life

Wasted so much energy and wasted so much time
This was just a game to you, how could I be so blind?
Now I'm just ashamed, should've seen through all the lies
Wish I wasn't gullible and desperate, intertwined`,
		},
	{ songTitle: `Stereo Play`,
		songArtist: `james ivy`, songAlbumTitle: `everything perfect`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273d4ecd8b8e294b1a10e804227`,
		songLink: `https://open.spotify.com/track/1VIR9grYveTYYM6uXQt4hd?si=0b0fcf3555e745af`,
		songReview: ``,
		songLyrics: `Everybody's downtown waiting for us
And I've sort of been out of that thing, so what?
I know it's dumb but it's killing time
It's numb but it still hurts right? 
<i>Tell me why</i>

cuz I'm gone, 
I'm gone!
And all your friends have been here for way too long, 
too long
And the stereo's the only thing we got on
You got the thing you always wanted 
<i>but it's wrong</i>
^^cuz they're playing our favorite song!^^`,
		},
	{ songTitle: `Ur Having Fun`,
		songArtist: `idkconundrum + flowers for you + yung kell`, songAlbumTitle: `ur having fun`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2739bc62db3454aa6b339c4efc5`,
		songLink: `https://open.spotify.com/track/1ldgRHPJkukh8jwrs9caUq?si=8f369b842b6a4423`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Something Comforting`,
		songArtist: `james ivy + porter robinson`, songAlbumTitle: `something comforting`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2734df9a24ee1827559b911efb2`,
		songLink: `https://open.spotify.com/track/45ISWEG1nykauPfeBTvcJH?si=61557c7960de41fa`,
		songReview: ``,
		songLyrics: `cuz getting made you want more
And hoping made you hurt more
Oh, there must beeee
Something wrong with meeeee

And getting made you want more
And hoping made you hurt more
Someone tell meeee
Something comforting~~~

I just wanna make u feel 
^^something^/^
I just wanna make u feel
^^nothing^/^`,
		},
	{ songTitle: `Said I Loved You...But I Lied`,
		songArtist: `michael bolton`, songAlbumTitle: `the one thing`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273c10713ebc1e21c9931b49ade`,
		songLink: `https://open.spotify.com/track/2nfMrwg3aRhSAv4HX7IzJL?si=0363efec2cb94226`,
		songReview: ``,
		songLyrics: `Said I loved you, but I lied 😢
^!^[up]Cuz this is more than love I feel inside!!!!!!![/up]^/^

Said I loved you, but I was wrong…
^!^[up]cuz love could never ever feel so strong!!!!!![/up]^/^`,
		},
	{ songTitle: `Dry`,
		songArtist: `harry teardrop`, songAlbumTitle: `1000 backyard pools`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273c9ac0a10391632c71c844852`,
		songLink: `https://open.spotify.com/track/2fMzPPesPr9I6LMvGMc2ka?si=a55a1cbdf6454cf7`,
		songReview: ``,
		songLyrics: `I turn nothing~~~~
into friday night~~~~
I'm boring your week to death
I thought that's what you likeeeee

I'm still trying~~~~
to make you laugh~~~~
I'm splitting your lips in half
And making your cheeks crack
And no one told me that I'm drying you out 🥀

Open the door to find your roommate say
<i>"She just left"</i>
But I can't say I'm surprised
^^It's what I get after all this timeeee^/^
Leaving you out to dry…
^!^Leaving you out to dryyyyyy^/!^ 😞
`,
		},
	{ songTitle: `back 2 u`,
		songArtist: `spookybands`, songAlbumTitle: `back 2 u`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735801281cc9f6d66128e33782`,
		songLink: `https://open.spotify.com/track/7oIaOS7oJIUvGLRQmrMj5n?si=067197a3f5e74cb3`,
		songReview: ``,
		songLyrics: `And i aint singin hallelujah
					Idk how to get back to ya
					Didnt ever wanna fall in love 2 young
					But i guess thats what u do huh?
					I dont think i rly had a choice it was 2 much

					How tf did i get so complicated?
					I only want ur love im done with waitin
					Yea Im still in love with u thats an understatement
					^^its no wonder that u had to get far away from me!!

					[up]SPOOKYBANDS I MADE THAT MONEY AND I GHOST A BITCH i dont know [/UP]^/^

					I thought i was the only 1
					2 pick up all ur pieces
					And cant stop that im fallin 4 u 
					But i give u it all if u wanted me 2
					And im sick the lyin will u tell me the truth?
					but i dont like that better
					^^and i thought i was over u but i called u when i left her… ^/^📲

					<i>man im so sick of myself…</i>`,
		},
	{ songTitle: `follow`,
		songArtist: `sullii`, songAlbumTitle: `wake up nect to me`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273e8e7b399c1c32046e3b6537a`,
		songLink: `https://open.spotify.com/track/7ob6TeZ57I3UsAulzArKdJ?si=cf45d4e7aadc47ad`,
		songReview: ``,
		songLyrics: `I was all up in my head
Tryna keep me in the house
Look at my jealousy now
I couldn’t, I couldn’t, I couldn’t carry me out
I’ve been still tryna keep me on my ones
Maybe if I never said anything
We coulda been
I’m with my troubles again
Tryna breathe all of them in

^!^[up]How come!!!
I don’t believe a word, I need an outcome!!!
I’m sick to death of hearing how I’m helpless!!![/up]^/!^
<i>You wonder why I’m tryna play dead</i>`,
		},
	{ songTitle: `Mean It`,
		songArtist: `lany + lauv`, songAlbumTitle: `~how im feeling~`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2732c0e1e9e1fd1e7b132da1606`,
		songLink: `https://open.spotify.com/track/5ACkb3CikcSZPF0h7FSZAp?si=c9040b42b76343d7`,
		songReview: ``,
		songLyrics: `Don't kiss me right now
Don't tell me that you need me
Don't show up at my house
All caught up in your feelings
Don't run me 'round n 'round
Don't build me up just to let me down

Don't mess with my head
Don't tell me you're falling
With your feet still on the ledge
I'm all out of breath
Baby, don't run me 
'round n 'round
Don't kiss me, no, don't kiss me right now
^!^[up]On your lips, just leave it!!!!
If you don't mean it!!!!!![/up]^/!^`,
		},
	{ songTitle: `rlyfeel2`,
		songArtist: `polearm`, songAlbumTitle: `222`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27325bd21d27d1c4e407741dd17`,
		songLink: `https://open.spotify.com/track/5OYoJhkKK8jhbXqtewBYEW?si=57bab86be8f24da3`,
		songReview: ``,
		songLyrics: `I can see through your lies
I’m never at peace and it’s hard to find
I’m gonna cry, would rather just stay inside
If you say that you hate it, well, so do I`,
		},
	{ songTitle: `Delores`,
		songArtist: `lil xtra`, songAlbumTitle: `make it through fall`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273844f6235f879a43badf01d57`,
		songLink: `https://open.spotify.com/track/4gg4V2sMA3oUbFmV19B6Fb?si=9aedb9145a384668`,
		songReview: ``,
		songLyrics: `Please don’t say there’s something inside you
I don’t want to hang, no I don’t really like you
But I wouldn’t say that I’m nothing like you

^^It’s all the same, 
we’re all the same^/^

I’m all that’s left and you know best–
So tell me how I’ll fuck up next 😥
We’ll hold this sadness in our chest

^^Like every time
I hate this…^/^ 😢`,
		},
	{ songTitle: `I Should Have Never Let You Leave`,
		songArtist: `extra large holiday card`, songAlbumTitle: `i should have never let you leave`, songAlbumCover: `https://f4.bcbits.com/img/a0447268600_10.jpg`,
		songLink: `https://open.spotify.com/track/7llLrFkWRvzJqVS5TbBK96?si=6693893a4d364fcc`,
		songReview: ``,
		songLyrics: `See I do things to hurt myself,
^^So on her birthday I drove by her house…

[up]His car was parked in her driveway!!!
I knew his car would be in her driveway!!![/up]^/^

And to know that you haven't changed a bit
Oh yeah, well, whatever, 
I loved you before–

Now we'll wait and 
^^seeeeeeee~~~~^/^
If I will ever let you 
^^beeeeeee~~~~^/^
I should've never let you 
^^leaveeeeeee~~~~^/^

I should've never let you 
<i>leave…</i>`,
		},
	{ songTitle: `Malibu Nights`,
		songArtist: `lany`, songAlbumTitle: `malibu nights`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273c4dae9528b2a8408f463eb17`,
		songLink: `https://open.spotify.com/track/0Eqg0CQ7bK3RQIMPw1A7pl?si=ab79e113bdcf450d`,
		songReview: ``,
		songLyrics: `I've got way too much time to be this hurt
Somebody help, it's getting worse
What do you do with a broken heart?
Once the light fades, everything is dark
Way too much whiskey in my blood
I feel my body giving up
Can I hold on for another night?
What do I do with all this time?`,
		},
	{ songTitle: `Believe`,
		songArtist: `quietdrive`, songAlbumTitle: `make believe`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27334ce368d2de48720b623df09`,
		songLink: `https://open.spotify.com/track/6wHtbupRbCNwft13GVN6xj?si=fa623dd271d84a56`,
		songReview: ``,
		songLyrics: `Believeeeeeee
					That you're always on my mind!!!
					Believeeeeeee
					That you got here just in time!!!`,
		},
	{ songTitle: `Can't Be Saved`,
		songArtist: `senses fail`, songAlbumTitle: `still serching`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2739df48b372c06a24c03fa17a6`,
		songLink: `https://open.spotify.com/track/63k8KXOgawK2cNtvm2ZW8y?si=6b1fc1ebf34c403d`,
		songReview: ``,
		songLyrics: `I'm stuck in a coma, 
stuck in a never-ending sleep
And someday I will wake up 
and realize I made up everythingggggg`,
		},
	{ songTitle: `Calcium`,
		songArtist: `ecco2k`, songAlbumTitle: `e`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273e49806ff277ac693976caa97`,
		songLink: `https://open.spotify.com/track/0D6MyCMzbniMYWHYyCcv5N?si=35156ed19ded4be1`,
		songReview: ``,
		songLyrics: `I've been rolling oxen bone
<i>Double K crystals kiss my nose 💎
Double K crystals kiss my nose 💎
Double K crystals kiss my nose 💎</i>

Baby, kiss me through the phone 💋
Ecco2k, I lost all hope
<i>Smoking on dope, I feel so cold
Smoking on dope, I feel so cold</i>

Live on islands made of stone
Rob that n**** for his coat
Twenty-five thousand on Silk Road
<i>Shine, shine, shine, shine, shine, that glow</i> ✨

Obviously silver, not no gold 🩶
Tried to keep up and he went broke
Steaming hot, they don't want no smoke
2g K, went to the hole`,
		},
	{ songTitle: `You've Haunted Me All My Life`,
		songArtist: `death cab for cutie`, songAlbumTitle: `kintsugi`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27343aafb2edd88b9447f49337d`,
		songLink: `https://open.spotify.com/track/3ENaHanzpi9ZamW12r1Sx5?si=2482e7b96e4a4b20`,
		songReview: ``,
		songLyrics: `You've haunted me all my life
Through endless days and countless nights
There was a storm when I was just a kid
Stripped the last coat of innocence

And there's a flaw in my heart's design
For I keep trying to make you mine
And so I wait, but I never seem to learn
How to capture your diminishing returns

You've haunted me all my life
You've haunted me allllllll my lifeeeeeee~~~`,
		},
	{ songTitle: `Narcissist`,
		songArtist: `no rome + the 1975`, songAlbumTitle: `rip indo hashi`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738a63c4fe32457453cb0f3103`,
		songLink: `https://open.spotify.com/track/4qjLvvBh5ZeKEPyShKRf06?si=3e52a5229a9841d4`,
		songReview: ``,
		songLyrics: `345's where we stayed
She told me I'm a narcissist for doing it again
Took a bunch of acid and she told me, "Not again"
Now I gotta tell her that I love one of her friends`,
		},
	{ songTitle: `born yesterday`,
		songArtist: `quadeca`, songAlbumTitle: `i didnt mean to haunt you`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27345f6c58341c281d50d622c5c`,
		songLink: `https://open.spotify.com/track/4QGSuTmh4PxESQxz1zbLmx?si=39f0e9d76e494b48`,
		songReview: ``,
		songLyrics: `Those little things, 
					<i>I should've said out loudddd~~~~</i>
					All those little things
					<i>That weigh heavy on the cloudssss~~~~</i>

					I had just a hint of doubt
					I wish I let that hint become me…
					Just a little doubt
					Couldn't figure out how to outrun me…

					And I'd be free if I just saved the date
					^^I'd be there with you right nowwwwww^/^
					And that day plan should've stayed delayed
					^^Cause the only thing I want is outttttttt^/^

					^^And it's all those little things
					I should've said out loud!
					Every little thing
					[up]I did to make you proud!!!!![/up]^/^`,
		},
	{ songTitle: `fall asleep to the thought of me trying to fall asleep`,
		songArtist: `sullii`, songAlbumTitle: `wake up next to me`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738d0c58cd96b1239fbff36ae5`,
		songLink: `https://open.spotify.com/track/2qWg3mlIPnUxbP7mgFQOVc?si=2d46926ee6064dc0`,
		songReview: ``,
		songLyrics: `I probably wrote this down before
I don’t think that I’ma stay
I love you just like I did before
<i>But I can’t stand the way–</i>
I probably never meant as much
As I think you meant to me
I don’t think that I love anyone… 😞

I’m kinda nervous, yeah, I think I better get to leaving
Funny how secure I feel my insecurity ease in
Tryna call my friends I hope they got the timе for speaking
Like herе’s another song I wrote that I’m never releasing
And I’ve been feeling like we’re falling down the stairs
Every time we take a step forward I hit my head
Am I the only one that’s overthinking 'bout my ex 
and tripping over what she said 
I’m so tied to my bitterness`,
		},
	{ songTitle: `dna [demo]`,
		songArtist: `lany`, songAlbumTitle: `roll over, baby`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27385b68f4688bc3578748643be`,
		songLink: `https://open.spotify.com/track/30wVWhcDjjcHsH3G0UGEJ1?si=0d63302c6cbf4f48`,
		songReview: ``,
		songLyrics: `I wanna hold your hand in front of my friends
Say what I'm feelin' and not have to pretend
That I don't care, no I don't care
I wanna brag about you when you're not around
Hear your name next to mine 
^^'cause I like the way it soundsssss^/^

I'm sorry I call again when you don't pick up
And tell you you're beautiful but probably too much
<i>I tried but I can't treat ya like the rest of LA</i>
Oh, it's just not in my DNA … 
to love you only halfway~~~~
<i>Love you only halfwayyyyy~~~~</i>`,
		},
	{ songTitle: `Freud`,
		songArtist: `galileo galilie`, songAlbumTitle: `portal`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27349878e5d827207b68f98a733`,
		songLink: `https://open.spotify.com/track/6NhmlAWNopJdE3ANQayeQZ`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `9-5 (love me)//`,
		songArtist: `kenny hoopla`, songAlbumTitle: `survivors guilt: the mixtape//`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27328f984a071dd9f074d3e22ed`,
		songLink: `artist/4exLIFE8sISLr28sqG1qNX?si=b7ddfc4e442f423d`,
		songReview: ``,
		songLyrics: `^!^[up]would u quit ur 9-5 to love me??!??!?![/up]^/!^`,
		},
	{ songTitle: `Speaking With A Ghost`,
		songArtist: `citizen`, songAlbumTitle: `youth`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2731e55ca1db5a06afb00aaf501`,
		songLink: `https://open.spotify.com/track/629vhmYCm4meZj3TdOECnN?si=dbdf9594fcfd4c57`,
		songReview: ``,
		songLyrics: `It's been a while since you've called
I'm speaking with a ghost and I'm wondering
How you're making out…

And I went and spent that week trying to find you out
^^Every night, 
every night it feels the same^/^
And I went and spent those nights driving by myself
^^Every night, 
every night it feels the same^/^`,
		},
	{ songTitle: `Hero/Heroine`,
		songArtist: `boys like girls`, songAlbumTitle: `boys like girls`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273317ebb91078852577248ed98`,
		songLink: `https://open.spotify.com/track/1AnesEZjtNHT7Nr2Y4BuNR?si=8eba3b2dd7c34336`,
		songReview: ``,
		songLyrics: `I feel like a hero
<i>and you are my heroineeee~~~~~</i>
Do you know that your love 
<i>is the sweetest sin~~?~~</i>`,
		},		
	{ songTitle: `Waiting for the End`,
		songArtist: `linkin park`, songAlbumTitle: `a thousand suns`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273074fe407a21d8c679c45a9a4`,
		songLink: `https://open.spotify.com/track/01pOtDU5YHWbxuNBzlRUem?si=58a251a24e2e4001`,
		songReview: ``,
		songLyrics: `Sitting in an empty room
Tryin' to forget the past
This was never meant to last
I wish it wasn't sooooo

I know what it takes to move onnnnn
I know how it feels to lieeeeee
All I wanna do is trade this life for something new 😢
Holding on to what I haven't 
^!^[up]gottttttt!!!!!![/up]^/!^`,
		},
	{ songTitle: `Digital Love`,
		songArtist: `daft punk`, songAlbumTitle: `discovery`, songAlbumCover: `https://i1.sndcdn.com/artworks-000073786235-br5bx0-t1080x1080.jpg`,
		songLink: `https://open.spotify.com/track/2VEZx7NWsZ1D0eJ4uv5Fym?si=79c603ab6d7f4da3`,
		songReview: ``,
		songLyrics: `~~~~~Last night I had a dream about you
In this dream, I'm dancing right beside you
And it looked like everyone was having fun
The kind of feeling I've waited so long
Don't stop, come a little closer
As we jam, the rhythm gets stronger
There's nothing wrong with just a little little fun
We were dancing all night long
The time is right to put my arms around you
You're feeling right, you wrap your arms around too
But suddenly I feel the shining sun
Before I knew it, this dream was all gone~~~~~~`,
		},
	{ songTitle: `liar`,
		songArtist: `heroine diaries + nora evelyne`, songAlbumTitle: `liar`, songAlbumCover: `https://images.genius.com/3d7bc4610cedbeb25c8294eba448a38e.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/2WiwXmGF1AQMlA0bS6CFhY?si=78adea02424b45d6`,
		songReview: ``,
		songLyrics: `When I fell for you, 
I fell for a two faced liar
So I cannot staaaand thereeee
<i>and let you walk over meeee</i>
'Cause one day you will see
I was good enough to be
^^what you wanteeeeeed~~~^/^`,
		},
	{ songTitle: `Fade Into You`,
		songArtist: `mazzy star`, songAlbumTitle: `so that i might see`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27389a392107ebd79818022b3ea`,
		songLink: `https://open.spotify.com/track/1LzNfuep1bnAUR9skqdHCK?si=abb2ac6457eb43da`,
		songReview: ``,
		songLyrics: `I wanna hold the hand inside you
I wanna take the breath that's true
I look to you and I see nothing
I look to you to see the truth`,
		},
	{ songTitle: `Meet Me At Our Spot - Live`,
		songArtist: `willow + tyler cole`, songAlbumTitle: `Meet Me At Our Spot - Live`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2734c661ea593496e940bc2965b`,
		songLink: `https://open.spotify.com/track/3BrWLBC4WYx393yRUOlTih?si=385f5743d7984c7e`,
		songReview: ``,
		songLyrics: `When I wake up, 
I can't even stay up
I slept through the day, fuck
I'm not getting younger
But when I'm older, 
I'll be so much stronger
I'll stay up for longer
Meet me at our spot

When I go to sleep, 
I can't even fall asleep
Something's got ahold of me
Feel it taking over me
But when I'm older 
I'll be moving onward
I just got a drunk text
Meet me at our spot

We caught a vibe
Baby, are you coming for the ride? 
<i>~~~~The ride, the ride, the ride~~~~</i>
When I look into your eyes 
<i>~~~~Your eyes, ur eyes~~~~</i>
I just wanna hold you all night 
<i>~~~~All nightttt~~~~</i>
Maybe we can take a drive
Baby, we can hit the 405
Hypnotized by the lights
Man, this must be the life

^^Meet me at our spot
Got something I wanna show you
Meet me at our spot
They can't find us there^/^`,
		},
	{ songTitle: `THREAD`,
		songArtist: `polearm + fats'e + lil narniaa + anxietyattacks!`, songAlbumTitle: `thread`, songAlbumCover: `https://m.media-amazon.com/images/I/41gx8FsnftL._UXNaN_FMjpg_QL85_.jpg`,
		songLink: `https://open.spotify.com/track/2nQa77CWGU6Iy6VHoT1EBa?si=0c03aacdd5574237`,
		songReview: ``,
		songLyrics: `^!^Never again, god I'm hanging by a thread
All my life another night on the edge
I'll just say goodbye now
You can cry your eyes out
I'll be alright while you're alone^/!^

^!^[up]Can you tell me that you cared!?!?!!?
Every night I've been impaired!!!!
But deep down I'm so scared!!![/up]^/!^

I hit a blunt, I hit a bag, now what's the moveeee
When I wake up, I don't need drugs, I just need youuuuu
Woah
I just spent another night out
Now I'm back inside your houseeee
I've been so turnt up tryna fight the urge to sleep
But it's been a couple days and it's more than I can take
But I'll find a way
There's something 'bout the way
that you make me feel
Which path do I take
Throw it all away
or bury my heart`,
		},
	{ songTitle: `Moonlight`,
		songArtist: `sullii`, songAlbumTitle: `me and my absent mind`, songAlbumCover: `https://i1.sndcdn.com/artworks-Xzdpsr3V4TFXfwy1-fKozuw-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/2OPzD16f6kbZxlOeFtiO5C?si=f17d9e49761c4f2d`,
		songReview: ``,
		songLyrics: `Why'd u always pull me to the ground?
Told me it's my body that they said they never found
Funny how it's me that never wanted me around
I tried to keep my demons underneath me when I fell
Why'd you always pull me to the floor?
I'm getting sick of talking to your shadow at my door
Funny how it's me that never wanted me at all
I try to keep my demons underneath me when I fall`,
		},
	{ songTitle: `40 Over`,
		songArtist: `seaway`, songAlbumTitle: `vacation`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273595165ca9661d370c8597dfc`,
		songLink: `https://open.spotify.com/track/2ENGOYVtlYd39z9CJbkj27?si=82457b88a3c04b63`,
		songReview: ``,
		songLyrics: `^!^skin on skin!
Tell me im gonna get  it right this tiiimmeee!!
Skin on skin!
Known to everyone ur hand in miiiinnneee~~~~!!!^/!^`,
		},
	{ songTitle: `Sign`,
		songArtist: `flow`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/5825c13b984cbbb6b9fc192b7c7b31e9.1000x991x1.png`,
		songLink: `https://open.spotify.com/track/0xmWQKzc5m9rLv2ucDWxwD`,
		songReview: ``,
		songLyrics: `i realize the screaming pain
		hearing louding in my brain,
		but im going straight ahead
		with the scar...
		
		^!^[up]CAN U HEAR ME?
		CAN U HEAR ME?
		CAN U HEAR ME?
		SO AM IIIIIIII!!!!![/UP]^/!^`,
		},
	{ songTitle: `sign in everything`,
		songArtist: `koi`, songAlbumTitle: `2019`, songAlbumCover: `https://source.boomplaymusic.com/group10/M00/03/14/838f6686d79a46929f421693bdf4ca00_464_464.jpg`,
		songLink: `https://open.spotify.com/track/0eCFCRb1d7BBJnBvD0KIyb?si=7ec55551a9314aee`,
		songReview: ``,
		songLyrics: `Yeah, I've been looking for a sign in everything
I spent all this time and it ain't came
I'm just hoping that the flight delayed
Lost a couple hours on this time change
Put my phone down, I'm hoping that it vibrate
I don't leave the house 'cause I get tight at everything
^^What's the point of asking? 
You decided everything^/^

All that lil' shit don't mean much
You saying shit I wouldn't think of 
Not even in a thousand years, it wouldnta came up 
Shit changed but I still know where we came from
^^Hundred lies to my face and you ain't blink once^/^`,
		},
	{ songTitle: `gotta mean something`,
		songArtist: `koi`, songAlbumTitle: `2019`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27310b72c876c109c6319fdd226`,
		songLink: `https://open.spotify.com/track/0ie4w3p3QMsnYKfIZFGt5N?si=ae1894202e5a44d0`,
		songReview: ``,
		songLyrics: `Yeah, we could add it to the list of mistakes
When you needed me most, I couldn't stay
I've been losing my focus on things
I ain't mean to go ghost on you, babe
We can add it to the list of mistakes
Your friends don't listen the same
^!^You don't like it when they mention my name!^/!^

Yeah, you don't like it when I come up, change the subject
<i>it's gotta mean something</i>
The fact I still push all your buttons
Somethin' tells me that you still love me
I'll be right there if that's in discussion
Maybe you can take down my new number
I know this ain't come up all of a sudden
Baby, this gotta mean something
Same city at the same time
This gotta mean something
Coincidences crazy, ain't it right
I never thought we'd see each other another time
This gotta mean something <3333`,
		},
	{ songTitle: `miami`,
		songArtist: `koi`, songAlbumTitle: `2019`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27310b72c876c109c6319fdd226`,
		songLink: `https://open.spotify.com/track/3lWIH1u71oYhBA8yQ3STCI?si=0bed5cf4847441f8`,
		songReview: ``,
		songLyrics: `We can send that shit in overnight 
I've been working overdrive
Whole time, I know what yo' friends think, don't lie
I see it from both side
They think that I'm bad for you
I've been working overtime
They don't see the half of it

They don't see the things I doooo~~~
The steps that I take to improveeee~~~

She like to ask what every song about
You know you prolly half the catalog
Ran outta words to describe it all
<i>Now I'm just throwing this shit at the wall~~~</i>
I can't lie, 
^^I'm just saying all the things you like…
Whatever change ur mind~~~~^/^`,
		},
	{ songTitle: `Slip Like Space`,
		songArtist: `armor for sleep`, songAlbumTitle: `what to do when you are dead`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733439ed02bb1efcd748df6baa`,
		songLink: `https://open.spotify.com/track/2QSo88WWyr4B54mUeNH4iD?si=d9adb84419744383`,
		songReview: ``,
		songLyrics: `Watch me point to the sky
You'll laugh and say I'll never fly
^^I'll smile as you walk away
I always knew I couldn't stay~~~^/^

This planet wasn't made for me
All of you live so easy
I lay outside and up I stare
^^My home is in the void up there~~~^/^

^!^Approach light speed!
And break apart!
I don't care now
Nothing's real somehowwwww!!!^/!^`,
		},
	{ songTitle: `Letdown`,
		songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: `letdown`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273bceca911948196db4945cf4a`,
		songLink: `https://open.spotify.com/track/31CzDmNZhSA5WcGNaGTinq?si=07b154f02edf4a52`,
		songReview: ``, 
		songLyrics: `^!^So I'll drive all night through my home town
You can drive your knife through my chest now
Imma crash my car by your old house
'Cause all I'll ever be is a letdown!!!!
So I'll drive all night through my home town
You can drive your knife through my chest now
Imma crash my car by your old house
'Cause all I'll ever be is a letdown!!!!^/!^`,
		},
	{ songTitle: `Swan`,
		songArtist: `galileo galilie`, songAlbumTitle: `portal`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27349878e5d827207b68f98a733`,
		songLink: `https://open.spotify.com/track/45286GD70Zf4WXX2Nxh5sU?si=ec869bcb04f84417`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `To Tommorrow`,
		songArtist: `galileo galilie`, songAlbumTitle: `portal`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27349878e5d827207b68f98a733`,
		songLink: `https://open.spotify.com/track/0b1eJt5F6yI2u0T0LF0Ly3?si=74d1bdd530024b50`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `goodbye`,
		songArtist: `sadeyes + powfu`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735e902a26f015b6850df5c6bb`,
		songLink: `https://open.spotify.com/track/0FDI5Rbj9GIsaOpYBwMq12`,
		songReview: ``,
		songLyrics: `I don't wanna fall asleep without you next to me
'Cause I know one day all my dreams will be reality
And I know nothing I could do could ever change it now
Our love's a drug and I can't take the thought of coming down <3333
It's when you touch me 
hold me closer than she ever tried
I know that nobody love me, 
that's why I hurt inside
I knew that nobody loved me, 
I feel it multiplied
I find it hard to breathe, 
the way she said goodbyeeeeeee~~~~`,
		},
	{ songTitle: `The Old Man and the Sea`,
		songArtist: `galileo galilie`, songAlbumTitle: `portal`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27349878e5d827207b68f98a733`,
		songLink: `https://open.spotify.com/track/0PnuvhWWU00JVNbStqblGD`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Sayonara Frontier`,
		songArtist: `galileo galilie`, songAlbumTitle: `portal`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27349878e5d827207b68f98a733`,
		songLink: `https://open.spotify.com/track/6NhmlAWNopJdE3ANQayeQZ`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Untitled`,
		songArtist: `knuckle puck`, songAlbumTitle: `copacetic`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2739961af823171cad5d130a788`,
		songLink: `https://open.spotify.com/track/7j04glqh2SY6Es6jiQEhgf?si=cb0cabf4af874529`,
		songReview: ``,
		songLyrics: `Silhouettes on the ceiling
^^I’ve been much better, but at least I’m healing^/^
You know I haven’t slept since you left
But, for me, that’s progress, 
^^for me that's progress^/^`,
		},
	{ songTitle: `better off dead`,
		songArtist: `familypet`, songAlbumTitle: `better off dead`, songAlbumCover: `https://images.genius.com/e5e9b4c706b1b1781923540fcdf7c82d.1000x1000x1.png`,
		songLink: `https://open.spotify.com/track/5rFK78i7giot3tu9nq7mZN?si=82c7c3a893054864`,
		songReview: ``,
		songLyrics: `Maybe I'm better off dead, a-a-ad
Maybe I'm better off dead, a-a-ad
Maybe I'm better off dead, a-a-ad
Maybe I'm better off dead, a-a-ad`,
		},
	{ songTitle: `Pain Killer`,
		songArtist: `wicca phase spring eternal + darcy baylis`, songAlbumTitle: `this moment i miss`, songAlbumCover: `https://f4.bcbits.com/img/a2036361733_16.jpg`,
		songLink: `artist/70AkqfU43ou9hFxJZTDt7A?si=8a7e7ae9a56a4a65`,
		songReview: ``,
		songLyrics: `Last time was bad
This time is not much 
better than last
Buddy, I'm tired
Every light is dim
This too will pass
Is it on your shoulder?
Is it even there?
It's the weight I imagine since the last time I saw you
Do you wonder?
Do you care?
^^I know this moment I miss
It doesn't get much better than this^/^

<i>Let the white horse take me away
From the pain I can’t kill today</i>`,
		},
	{ songTitle: `tell me a joke`,
		songArtist: `quadeca`, songAlbumTitle: `i didnt mean to haunt you`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27345f6c58341c281d50d622c5c`,
		songLink: `https://open.spotify.com/track/2fOYcnUo9iPTOqIlSg26MY?si=a688e68783b64a74`,
		songReview: ``,
		songLyrics: `Knock knock, who's there? 
Tell me the truth
A familiar shadow that everyone knew
Reached through the walls,
<i>you saw right through</i>
Laughin' at you, 
I had so many things left to do
And it's funny, you said it's too soon
Stuck in the red, 
<i>came out the blue</i>
How am I doin' this?
Bone dry skeleton, humorous
<i>I tried to walk myself out of the ground</i>

All I could hear were thе crickets
Funny the joke is on mе
I tried hard not to miss it
Everything I couldn't be
^^Ha-ha
Laugh to the graaaaaave~~~
Ha-ha, ha-ha
Laugh to the graaaaave~~~^^`,
		},
	{ songTitle: `nightmare`,
		songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: `trauma factory`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733c69f0216273016337f456a3`,
		songLink: `https://open.spotify.com/track/4ELpTiWFYUgFBzrjqt5Q8e?si=53889f2981904c00`,
		songReview: ``,
		songLyrics: ` live inside the night time
^^She said it didn't feel like it's the right time^/^
Well I saw you with the new boy…
^!^I'm lookin' for somethin' that I can destroy!!!!^/!^
You know I hate it when you tease me~~~~
I see you every night when I am dreaming
Yeah, every time I see you right there…
^!^You turn a dream into a fuckin' nightmare^/!^
live inside the night time
^^She said it didn't feel like it's the right time^/^
Well I saw you with the new boy…
^!^I'm lookin' for somethin' that I can destroy!!!!^/!^
You know I hate it when you tease me~~~~
I see you every night when I am dreaming
Yeah, every time I see you right there…
^!^You turn a dream into a fuckin' nightmare^/!^`,
		},
	{ songTitle: `Sevenpence`,
		songArtist: `ryan leahan + patchymate + abbot + torr`, songAlbumTitle: `sevenpence`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273fdbebbaf80ed88cc50d45fd7`,
		songLink: `https://open.spotify.com/track/7G1GISzz73uzOEOr0tvfG1?si=b2013f517e754f3a`,
		songReview: ``,
		songLyrics: `This is my parting message
					Put on that dress if it's what you really wanted to do from the beginning
					You got friends that you wouldn't expect calling you pretty
					You asked why you're so alone if you're living in the city
					It gets hard sometimes, 
					^^~~~~I knowwwww~~~~
					~~~~At least you're with me~~~~^/^ ♥️

					If I ain't get through to you, I'll try again <33333
					Been reborn so many times but I'mma die again <3333

					^^Sydney got to first base
					Never got to take you on a first date!
					Love me but you'll hate me in the worst way!
					Trust me, but I'll break it on the first day!
					^!^ur Lucky if you ever got to hurt me!!!^/!^ ^/^`,
		},
	{ songTitle: `Swimming`,
		songArtist: `pinegrove`, songAlbumTitle: `11:11`, songAlbumCover: `https://f4.bcbits.com/img/a2227207840_10.jpg`,
		songLink: `https://open.spotify.com/track/4pB7WCRZrGfh82qQCqMVKc?si=ac0824aa05b440ac`,
		songReview: ``,
		songLyrics: `Sputtering into thе moving trees
And birds above and clouds all going on without me
They do еlucidate a letter to the sky
^^I wanna be a part of it
I'm not ready to die yet^/^

Coming up from every part of me
I feel it in my skeleton, I feel it like a brass key
Opening an image in my mind
^^I wanna be alive
I wanna live my life^/^`,
		},
	{ songTitle: `Staring Contest`,
		songArtist: `james ivy`, songAlbumTitle: `staring contest`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a3ad6633aefe2e84df7cb252`,
		songLink: `https://open.spotify.com/track/7idBzgbgDjEhxf6PdX741o?si=05272cc4eede499a`,
		songReview: ``,
		songLyrics: `Staring contest with the moon
Wake up in the afternoon
These days I’m in a terrible mood
But I’ll always fake a smile for you <3333
Staring contest with you in bed
Tracing your face in my head
These days I hate when you get upset
There’s nothing I can do about it…

Drinking whiskey that you bought me
And I tried everything that you taught me`,
		},
	{ songTitle: `Rally the Troops! Poke Holes in Their Defenses! Line Our Coffers With Their Coffins!`,
		songArtist: `empire! empire! (i was a lonely estate)`, songAlbumTitle: `what it takes t move forward`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736f2ba946a4e085499ec8e7e5`,
		songLink: `https://open.spotify.com/track/47ZwmM3WnoI8xDFgoOgcrJ?si=db7a93bb5fac4189`,
		songReview: ``,
		songLyrics: `It flew out your mouth, "You can drive me anywhere—
Just drive me anywhere but here tonight"
The length of your neck is a lonely parapet;
You are armed to the teeth and looking for a fight

It was in your mother's dress that the temper finally
Showed signs of slowing down
Your fingers traced the route of the seam
^^Like a map of your body that landed just shy of your knees^/^

It fell the same way on your mother—
As she was, at that age, the same height as you
She never faced a fear quite as sharp
^^But her sister did and it broke her heart^/^ 💔

What came out your mouth next was a series of mistakes—
You had taken all you could take, and here tonight
The weight of their stares, well, they could bury you alive
You are worn to the bone, and looking to disappear`,
		},
	{ songTitle: `Tiny Vessels`,
		songArtist: `death cab for cutie`, songAlbumTitle: `transatlanticism`, songAlbumCover: `https://f4.bcbits.com/img/a1705132257_10.jpg`,
		songLink: `https://open.spotify.com/track/5ikzUqSyy8XiZYvVQncA4n?si=53d890457c0d42c0`,
		songReview: ``,
		songLyrics: `This is the moment that you know
That you told her that you loved her, but you don't
You touch her skin, and then you think
That she is beautiful, but she don't mean a thing to me…`,
		},
	{ songTitle: `Daylily`,
		songArtist: `movements`, songAlbumTitle: `feel something`, songAlbumCover: `https://f4.bcbits.com/img/a2543414835_16.jpg`,
		songLink: `https://open.spotify.com/track/6AgtouHw1KrKy1PsoLjY3o?si=9fc865740f5f44c3`,
		songReview: ``,
		songLyrics: `Outside for the first time
in a long time
You said you can't remember what it's like
To feel more than cold on the inside
But the sunrise
will come again And you'll be just fine
You'll be just fineeee~~~`,
		},
	{ songTitle: `Stranger`,
		songArtist: `george barney roberts`, songAlbumTitle: `stranger`, songAlbumCover: `https://m.media-amazon.com/images/I/51dkw6xMaGL._UXNaN_FMjpg_QL85_.jpg`,
		songLink: `https://open.spotify.com/track/7EY197j1NuUuLyvf7BXyLg?si=4c83f532757549ff`,
		songReview: ``,
		songLyrics: `Saw u in town last night
After 9 and a couple of lines
Gave me a big, big fright
With some friends ive never seen before
U looked pretty cool as u walked out the door
I cant even look in ur eyes
I just had to run and hide 😞

Strangersssss
Were strangerssssss
Strange, that well both look away
When theres so much more to say… 💔`,
		},
	{ songTitle: `Expo '86`,
		songArtist: `death cab for cutie`, songAlbumTitle: `transatlanticism`, songAlbumCover: `https://f4.bcbits.com/img/a1705132257_10.jpg`,
		songLink: `https://open.spotify.com/track/4K5QoTvgjOKgLPn15RCk9y?si=9d983e1d65b24ede`,
		songReview: ``,
		songLyrics: `Sometimes I think this cycle never ends
We slide from top to bottom, then we turn and climb again
And it seems by the time that I have figured what it's worth
The squeaking of our skin against the steel has gotten worse~~~~`,
		},
	{ songTitle: `REM`,
		songArtist: `nothing,\u200Bnowhere. + lil west`, songAlbumTitle: `reaper`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733f26f51e52c3fd057890d757`,
		songLink: `https://open.spotify.com/track/1Z8eokiiNkWvHvO5wBzZAy?si=7ef3073c048c45e6`,
		songReview: ``,
		songLyrics: `I'm so sick of feeling used
I wish I could dream of something new
'Cause right now all I dream about is you
'Cause every time I'm laying in my bed
You're the only thing inside my head
I think I'd rather stay awake instead`,
		},
	{ songTitle: `Acolyte`,
		songArtist: `slaughter beach, dog`, songAlbumTitle: `birdie`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273bff875df2edc64c5f4fc9766`,
		songLink: `https://open.spotify.com/track/5L3XdGLaieG0cGpgsFmzku?si=4af81566da2e4df2`,
		songReview: ``,
		songLyrics: `We could fly to Ireland
You know I'm good for the ticket
Try to smirk, but you're smilin'
Know I'll stick with it
Annie, I want you to marry me <3333
We'll wait a few years
I don't mean to frighten you
I just wanna be clear 😇

Man, it cuts like a dull knife
When you're young and you're told–
"It makes sense when you're older"
^^Darling, let's get old…^/^`,
		},
	{ songTitle: `Somewhere Out There`,
		songArtist: `our lady peace`, songAlbumTitle: `gravity`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273eab203ffb6af8a1cd6a5d1ea`,
		songLink: `https://open.spotify.com/track/6fQJg7MdQssgZJDhTJtFtd?si=32ef3eb9e71c48b7`,
		songReview: ``,
		songLyrics: `You're falling back to me
The star that I can see, yeah
I know you're out there
Somewhere out there
You're falling out of reach
Defying gravity, yeah
I know you're out there
^!^Somewhere out there^/!^`,
		},
	{ songTitle: `Faster`,
		songArtist: `Third Eye Blind`, songAlbumTitle: `out of the vein`, songAlbumCover: `https://m.media-amazon.com/images/I/618vaNj9thL._UF1000,1000_QL80_.jpg`,
		songLink: `https://open.spotify.com/track/5dLT6dZ6PMUKWSTGCXGerq?si=77d41291a3324128`,
		songReview: ``,
		songLyrics: `Whoa, I wanna get off one time and not apologize
Woah, you gotta steal the time of a life that's passing by`,
		},
	{ songTitle: `Chasing Cars`,
		songArtist: `snow patrol`, songAlbumTitle: `eyes open`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735da2756220da9b6f17924f8f`,
		songLink: `https://open.spotify.com/track/0x6Y6ikSyS17NxfhWsgENm?si=0adc7239ab9148f1`,
		songReview: ``,
		songLyrics: `All that I am
All that I ever was
Is here in your perfect eyes,
<i>they're all I can see</i>
I don't know where
Confused about how, as well
Just know that these things will never change for us at all

If I lay here
If I just lay here
<i>Would you lie with me and just forget the world?</i> 🥲`,
		},
	{ songTitle: `Montrose`,
		songArtist: `man overboard`, songAlbumTitle: ``, songAlbumCover: `https://f4.bcbits.com/img/a3760014369_5.jpg`,
		songLink: `https://open.spotify.com/track/5vzvpATBFCRmIyhXP3jYcO?si=e1fd89ae157b4858`,
		songReview: ``,
		songLyrics: `^^And my heart caves in, when I look at you^/^
This is so hard

Do you take pictures off the walls,
when you know I'm coming to your room?
Do you hide all the stuffed animals the other boys bought for you????`,
		},
	{ songTitle: `Contact`,
		songArtist: `wicca phase spring eternal`, songAlbumTitle: ``, songAlbumCover: `https://f4.bcbits.com/img/a3322416545_16.jpg`,
		songLink: `https://open.spotify.com/track/13vcqgMWOlvvMkCkGEsQ5a?si=c2336d20e0a14a45`,
		songReview: ``,
		songLyrics: `What's a month when the whole year is bad?
Had a bad couple nights, but I'm back
Yeah I'm back to the secrets we kept
I kind of like how the cat's in the bag
And I like how she acts like a cat 🐈
And I know that it's not what I want
What I want is her love to myself
What I want is for her to react`,
		},
	{ songTitle: `*Asterisk`,
		songArtist: `orange range`, songAlbumTitle: ``, songAlbumCover: `https://i.pinimg.com/736x/f8/74/b2/f874b2fee4a6cdd79e8efcba55aa76ff.jpg`,
		songLink: `https://open.spotify.com/track/706e7n479uUY8Q46jGAnaA`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Make Believe`,
		songArtist: `sewerperson`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-sTh8kQJYCP6wnPcY-vlARKw-t1080x1080.jpg`,
		songLink: `https://open.spotify.com/track/6g6DUrelhhmBTcB6zn2utH?si=7ed4a82b46c44595`,
		songReview: ``,
		songLyrics: `You were sitting next to me with ash-blond hair
And it's distant, but I know the feeling's still there
And I'm sick of fucking filtering, I barely breathe air
When it's lights out, but I know the fear is still there
I kept a quarter on the centrepiece for you to de-stress
Three in the morning before sunset
^!^You know everything is make-believe inside of your chest
I got pieces I lost, I can never get baaaaaack^/!^`,
		},
	{ songTitle: `In the Middle Of It All`,
		songArtist: `citizen`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/493c99713d5b0c94eb68f277e8b2a736.1000x1000x1.png`,
		songLink: `https://open.spotify.com/track/23ImZO2UEsDFttkbS5R0rG?si=68b544b131f7430d`,
		songReview: ``,
		songLyrics: `^!^I saw you there^/!^

She's the one that everybody marvels at
Delicate with her voice 
and flowers strung across her head
She's the one that everybody notices
^^She thinks about an older friend, his face, his body in her bed^^`,
		},
	{ songTitle: `Every Breath You Take`,
		songArtist: `the police`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2734ee0c737e55ea9d0c0d3770e`,
		songLink: `https://open.spotify.com/track/1JSTJqkT5qHq8MDJnJbRE1?si=30ddb0cca0174767`,
		songReview: ``,
		songLyrics: `I'll be watching you
<i>Every breath you take, every move you make
Every bond you break, every step you take</i>
I'll be watching you
<i>Every single day, every word you say
Every game you play, every night you stay</i>
I'll be watching you
<i>Every move you make, every vow you break
Every smile you fake, every claim you stake</i>
I'll be watching you

I'll be watching you <333`,
		},
	{ songTitle: `Turn U On`,
		songArtist: `sewerperson`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-sTh8kQJYCP6wnPcY-vlARKw-t1080x1080.jpg`,
		songLink: `https://open.spotify.com/track/3LGKmNRkATl8xnQ7zLyw4K?si=57d556fe89f94d28`,
		songReview: ``,
		songLyrics: `Yeah, I knew she would break my heart
I knew she would, but I let it happen anyways
I'm hopeless in many ways`,
		},
	{ songTitle: `cut the feedback!`,
		songArtist: `93feetofsmoke`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-000553477308-3c8n3o-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/6c8msRfUE1EnSul5P3ZO3O?si=ac29598dfab949bb`,
		songReview: ``,
		songLyrics: `Take two steps back, you don't know me
Take four shots down, and I'm ready
Not sure where I'll be in the morning
Got eight missed calls on my home screen

Life loud, cut the feedbackkkk
Never learned how to relaxxxxx
Grass green, no relapse
I got what you want, but you don't need thaaaaat 😞`,
		},
	{ songTitle: `This Is War`,
		songArtist: `thrity seconds to mars`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27364219d797874eecfd69f2458`,
		songLink: `https://open.spotify.com/track/2D52zjCyqEIQa221lhw6uk?si=06ee4a8533d244e4`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Another Life`,
		songArtist: `Third Eye Blind`, songAlbumTitle: ``, songAlbumCover: `https://m.media-amazon.com/images/I/618vaNj9thL._UF1000,1000_QL80_.jpg`,
		songLink: `https://open.spotify.com/track/4NOaxNIsltlV2KSqzQcK6y?si=6c32bbb5449141a5`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Topanga`,
		songArtist: `trippie red`, songAlbumTitle: ``, songAlbumCover: `https://townsquare.media/site/812/files/2018/10/trippie-redd-topanga-art.jpg?w=1080&q=75`,
		songLink: `https://open.spotify.com/track/5aXgz1oKK8Q9z9xvTmSnrO?si=adccf7dbed014ffa`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Where'd All the Time Go?`,
		songArtist: `dr. dog`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-D0HD7IWUm8uq-0-t500x500.png`,
		songLink: `https://open.spotify.com/track/0UV5zxRMz6AO4ZwUOZNIKI?si=34377c451d4d4112`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `The Anthem`,
		songArtist: `good charlotte`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27339bdded45c21f2ecae363a8f`,
		songLink: `https://open.spotify.com/track/0BRHnOFm6sjxN1i9LJrUDu?si=6b638a7353a74538`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `ceilings`,
		songArtist: `lizzy mcalpine`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273d370fdc4dbc47778b9b667c3`,
		songLink: `https://open.spotify.com/track/2L9N0zZnd37dwF0clgxMGI?si=5de316394c4c4fb8`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Motorcycle Drive By`,
		songArtist: `third eye blind`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2734139c9208eeed67d2a211beb`,
		songLink: `https://open.spotify.com/track/47wtXjG0Sk6DI6cjkRBcEg?si=8de8693ad6cd4c1f`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Reality Surf`,
		songArtist: `bladee`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-twZQezAhegwp-0-t500x500.png`,
		songLink: `https://open.spotify.com/track/7bN1xfvn1fB0mhKcdCK4un?si=64d89e28feca4407`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `What Hurts The Most`,
		songArtist: `rascal flats`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a7065d67d77b2d86a12ce93b`,
		songLink: `https://open.spotify.com/track/4bVuIlGQBMWS7vIhcx8Ae4?si=225f132aae4f4093`,
		songReview: ``,
		songLyrics: `what hurts the most
		is bein sooooo cloooseeee
		and havin so much to say
		and watchin u walk awaaaaaayyy
		and never knowinnnnn
		what coulda beeeeennn
		<i>and not seein that love in uuuuu~~~~
		is what i was tryin to doooooo~~~~</i>`,
		},
	{ songTitle: `Sleep Paralysis`,
		songArtist: `lil lotus`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/8b8e432a850d4802e69ab9c566521a93.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/0MYo3B9OMLJIwbOWHnBo8w?si=4f618b0dd65e4c26`,
		songReview: ``,
		songLyrics: `^!^i cant live like this!
		in bed with my ghost
		sleep paralysis!!!!
		where did the time go?
		bring me back again
		this place i might know
		[up]SLEEP PARALYSIS!!
		SLEEP PAARALYIIISSSSSS!!!!![/UP]^/!^`,
		},
	{ songTitle: `drug mule`,
		songArtist: `bobby raps + corbin`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-QzMlQIQOUo72Ftij-XfUHGQ-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/0vnmWWErx6CdyJOeAlcw7F?si=a343e419ff4340b5`,
		songReview: ``,
		songLyrics: `i turn an uber to a drug mule
		felt so stupid that i can trust u
		now it doesnt feel the same when i fuck u
		wanna play dead but dont know how to play numb to
		i guess im back on my own`,
		},
	{ songTitle: `this is me trying`,
		songArtist: `taylor swift`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc`,
		songLink: `https://open.spotify.com/track/5kI4eCXXzyuIUXjQra0Cxi`,
		songReview: ``,
		songLyrics: `[up]^!^AT LEAST IM TRYYYYYYINNGGGGGGG!!!!!!!!!!!![/UP]^/!^`,
		},
	{ songTitle: `betty`,
		songArtist: `taylor swift`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc`,
		songLink: `https://open.spotify.com/track/7kt9e9LFSpN1zQtYEl19o1?si=06770bb334674812`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `your eyes`,
		songArtist: `lil peep`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-000150342771-uhyzzp-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/279j7K8VbSq0U5PJQhQGB1?si=3e9236dab3104b33`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `now i rlly kno`,
		songArtist: `cr1tter`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/f907f86217d6dc8486c8678c74541a0c.1000x1000x1.png`,
		songLink: `https://open.spotify.com/track/04sGhQhbZxEVUJUIld0QdD?si=eb0e63262b2b4253`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Ain't Nothing Like The Real Thing`,
		songArtist: `marvin gaye + tammi terrell`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273df5efb734e08c8acdbf9634f`,
		songLink: `https://open.spotify.com/track/37soQoNhEEIrhhYgHWK1xU?si=24cedacf7e054a63`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Where I Left You`,
		songArtist: `man overboard`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/f4fdeaf6abe8e50c738339179379b317.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/4K9p4rEjJO707iazuBrX6U?si=d018c1c3704c463e`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Obedient`,
		songArtist: `bladee + ecco2k`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-000588955604-vwi4tw-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/0ZCWaBh3XOTcuwy032ZKCl?si=b5b1c222f22444db`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `In My Room`,
		songArtist: `julia wolf`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/4a357ffa02d66806aaca44ddeea8fdfa.1000x1000x1.png`,
		songLink: `https://open.spotify.com/track/79IgD1wf3xltQdDK3l5Why?si=d8ed1bcae86f4efc`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `I Couldn't Be More In Love`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://upload.wikimedia.org/wikipedia/en/2/2d/A_Brief_Inquiry_into_Online_Relationships.png`,
		songLink: `https://open.spotify.com/track/2HwwGKPcI0rqnsFCqATXuj?si=35ef924e34224644`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Legendary Member`,
		songArtist: `thaiboy digital + bladee + ecco2k + yung lean`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a73ac2a38d57b20dbf27c712`,
		songLink: `https://open.spotify.com/track/5u1dcvaMTFU9Vto7L1TrU0?si=df7b8837083440c4`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `wwjd`,
		songArtist: `caspr (ppg casper)`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/9113653e66455cbacdbe6ff797ff4f14.500x500x1.jpg`,
		songLink: `https://open.spotify.com/track/1MOuEzso44MXXelkqHJBMN`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `SiCK ABOuT U`,
		songArtist: `titus`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/9a2e0be2d45a0321003f0ecde8883f6f.1000x1000x1.webp`,
		songLink: `https://open.spotify.com/track/4kktxKYY6MQK6rNlEvNl2o?si=e10ef1b3d917480b`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Darwin`,
		songArtist: `Third Eye Blind`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/159bdd87b9b9134c7687898ba76dfb19.1000x1000x1.png`,
		songLink: `https://open.spotify.com/track/4YIZHjajdWZWGTHYTH8V8z?si=f9c6761abbfa455a`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Perfect`,
		songArtist: `capoxxo + oaf1 + dreamcache`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273bc44c3a5094b03ec6d501e31`,
		songLink: `https://open.spotify.com/track/2dyeWlhqtGsDW7VpUroZwo?si=14636b2577c24539`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `RASCAL`,
		songArtist: `rmr`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2732cf0c27ef477e7199035a963`,
		songLink: `https://open.spotify.com/track/3wDkZTvrR6uhTvQqcE9vdx?si=29316dafa9814b87`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `In Your Room`,
		songArtist: `airiel`, songAlbumTitle: ``, songAlbumCover: `https://f4.bcbits.com/img/a3620585096_10.jpg`,
		songLink: `https://open.spotify.com/track/6shRGWCtBUOPFLFTTqXZIC?si=c699d1c3c6364b1d`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Upside Down`,
		songArtist: `jack johnson`, songAlbumTitle: ``, songAlbumCover: `https://cdn-images.dzcdn.net/images/cover/01a3263142e999709295e10ccc0116ce/1900x1900-000000-80-0-0.jpg`,
		songLink: `https://open.spotify.com/track/6shRGWCtBUOPFLFTTqXZIC?si=c699d1c3c6364b1d`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Nike Just Do It`,
		songArtist: `bladee`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273044128ab156930cd23562992`,
		songLink: `https://open.spotify.com/track/2glodYMg0VVfLTg1ZAdHhI`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Westfield`,
		songArtist: `bladee`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273044128ab156930cd23562992`,
		songLink: `https://open.spotify.com/track/0D3qbTWvbyOsZ26J2yqQff?si=d738b85ee0b6483e`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Green Squirrel In Pretty Bad Shape`,
		songArtist: `hot mulligan`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/9edd950cb4934aabacbe2aaae0640f7f.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/14YfEnD7lb3LeQW4uwBplm?si=23f370bdfc8245b4`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `On Your Mind`,
		songArtist: `autre ne veut`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-000129219799-xvti7d-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/4rD0iVMStwlhucuiuaHdWK?si=8b50547e9b1e4254`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `I Always Wanna Die (Sometimes)`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://upload.wikimedia.org/wikipedia/en/2/2d/A_Brief_Inquiry_into_Online_Relationships.png`,
		songLink: `https://open.spotify.com/track/7iPlcFvOMOzt6v0QvcAueZ?si=996b5d9ac130444a`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `SUGAR`,
		songArtist: `brockhampton`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27346f07fa4f28bf824840ddacb`,
		songLink: `https://open.spotify.com/track/6U0FIYXCQ3TGrk4tFpLrEA?si=ee764318895e4059`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `There Is a Light That Never Goes Out`,
		songArtist: `the smiths`, songAlbumTitle: ``, songAlbumCover: `https://lastfm.freetls.fastly.net/i/u/ar0/ae9c3e4f65c0ac7efd2047d79b0e64f9.jpg`,
		songLink: `https://open.spotify.com/track/0WQiDwKJclirSYG9v5tayI?si=dd05996501bc4013`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Bad Side`,
		songArtist: `wicca phase spring eternal`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2737a1cd45cc862f3143e194193`,
		songLink: `https://open.spotify.com/track/15XCwNcW1h8ts7jjXtmIAF?si=ce83d522d27d4f3e`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `I Lose Everything`,
		songArtist: `wicca phase spring eternal`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-000148606558-ga07oc-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/1x8LPBz9bPC3OPnljFuqgr?si=045089e1289940e2`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `march Madness`,
		songArtist: `myspacemark`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/2cc0e5da5c96211d060f559dc141b11f.520x520x1.png`,
		songLink: `https://open.spotify.com/track/3ibBN2Xhh8adRGqllN7CA0?si=773f27ead7334994`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Dizzy On the Comedown`,
		songArtist: `turnover`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738810645138bfcbd3707f2290`,
		songLink: `https://open.spotify.com/track/2QRk4N7GObZRGyhKjUHZhP?si=1426156cb6c744cb`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `What Safe Means`,
		songArtist: `empire! empire! (i was a lonely estate)`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736f2ba946a4e085499ec8e7e5`,
		songLink: `https://open.spotify.com/track/7bwxH8ahZP28wTppiQfqAZ?si=28fcdcbf964d4736`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `U.B.B.`,
		songArtist: `cr1tter`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-8znWrK1Jo2gDl5bR-fiqhCQ-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/064tYCovKX5rWc3yKiIAdJ?si=5a77a6bed7ca4107`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `who let the dogs out`,
		songArtist: `david shawty`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273454c0ff4525aedff22409d40`,
		songLink: `https://open.spotify.com/track/6jN1eFgiETuT3lSokZOFfG`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Too Busy Thinking About My Baby`,
		songArtist: `marvin gaye`, songAlbumTitle: ``, songAlbumCover: `https://e.snmc.io/i/1200/s/774dfd52f989b1f75fa4f2f55dc14585/4071883`,
		songLink: `https://open.spotify.com/track/4B6CnGeyiU5l2AQypLX1GK`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Tonight, Tonight`,
		songArtist: `the smashing pumpkins`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-FtiINg4eM2DR-0-t1080x1080.jpg`,
		songLink: `https://open.spotify.com/track/4iCGSi1RonREsPtfEKYj5b`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Hell Of It`,
		songArtist: `state champs`, songAlbumTitle: ``, songAlbumCover: `https://cdn-images.dzcdn.net/images/cover/329b412e8431fcf14b403cdf2f7f96c8/1900x1900-000000-80-0-0.jpg`,
		songLink: `https://open.spotify.com/track/2IjfQ3eNFUORnBVxYaxVEt`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `For You`,
		songArtist: `bladee + ecco2k`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273044128ab156930cd23562992`,
		songLink: `https://open.spotify.com/track/72QEZU1irVPiifDfmgmOVn`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `1D`,
		songArtist: `bladee`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273044128ab156930cd23562992`,
		songLink: `https://open.spotify.com/track/14IZvVgj2z5QzPfgVIiP0j`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Decay`,
		songArtist: `bladee`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273044128ab156930cd23562992`,
		songLink: `https://open.spotify.com/track/1jxqmN7ST59dgwGQlbUYG7`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Hex`,
		songArtist: `bladee`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273044128ab156930cd23562992`,
		songLink: `https://open.spotify.com/track/4W0kx8F4tplfgGzsC8whsx`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `65th & Ingleside`,
		songArtist: `chance the rapper`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27372f33dbb471562988a550e72`,
		songLink: `https://open.spotify.com/track/5H0NU2sHWUnWCcZyYlX46X`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Stalemate`,
		songArtist: `the story so far`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/408eb6f061dc154d58c5d99b1b677e47.1000x1000x1.png`,
		songLink: `https://open.spotify.com/track/11NnvvyKiUHdos1AaPa0oR`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `You Wrote 'Don't Forget' On Your Arm`,
		songArtist: `flatsound`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27335f945de4f1e09708419a555`,
		songLink: `https://open.spotify.com/track/5Ewah7EFhLXe7XFKZafONh?si=727a5904837c43e5`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `My Instincts Are the Enemy`,
		songArtist: `american football`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/068226ef33f5ba083dd84567f7a383d5.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/1trDFeNDnKq6wNYToCl4JG`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Home Is Where the Haunt Is`,
		songArtist: `american football`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/068226ef33f5ba083dd84567f7a383d5.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/6nf5Z4baKfrb9LX0Jn3xof`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Heartbreak Warfare`,
		songArtist: `john mayer`, songAlbumTitle: ``, songAlbumCover: `https://m.media-amazon.com/images/I/71nzMGEA1IL._UF1000,1000_QL80_.jpg`,
		songLink: `https://open.spotify.com/track/2sF9Mq4TWW2iSM8c0x1Aai`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `lights (4444)`,
		songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273f4a6f688bdc2bcfdaeda2789`,
		songLink: `https://open.spotify.com/track/3PDNGdhCtiQemL14eKhCup`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `The Way I Loved You`,
		songArtist: `taylor swift`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a48964b5d9a3d6968ae3e0de`,
		songLink: `https://open.spotify.com/track/5P4wWhUYWM0IaVYLuZxdar`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `If You Had Spun Out In Your Oldsmobile, This Probbly Wouldn't Have Happened`,
		songArtist: `hot mulligan`, songAlbumTitle: ``, songAlbumCover: `https://f4.bcbits.com/img/a0467151012_16.jpg`,
		songLink: `https://open.spotify.com/track/0WUKEYiVIEBsf4diMLyyZW`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Slam`,
		songArtist: `seaway`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/84af7241e65b938ca95d10b2f6d2007b.740x740x1.jpg`,
		songLink: `https://open.spotify.com/track/5sbZ3efC55OBIRzpXp4iTB`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `If You're Too Shy (Let Me Know)`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f0/93/e0/f093e071-3c15-6b4f-d8ac-35f04f2d9da1/20UMGIM20446.rgb.jpg/1200x630bb.jpg`,
		songLink: `https://open.spotify.com/track/1n4vgMWmmNlXrvyxQFhUEl`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `A Higher Place`,
		songArtist: `deep october`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273b404fadcbff04578066a37e2`,
		songLink: `https://open.spotify.com/track/0AkRcAouymyWq2jR4KQ5Sl?si=6f8f7bb435094110`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Sciatica`,
		songArtist: `deep october`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273b404fadcbff04578066a37e2`,
		songLink: `https://open.spotify.com/track/7rH20lnQ1TM06Yb2ngcVhf?si=a354e897dace42f0`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Settler's Bend`,
		songArtist: `wicca phase spring eternal`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/c3af1c9e914d1623f1c333c56bbe3952.1000x1000x1.png`,
		songLink: `https://open.spotify.com/track/6JuWt9v1Qy4P1HzOcFlHZ7`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `lil kennedy`,
		songArtist: `lil peep`, songAlbumTitle: ``, songAlbumCover: `https://i1.sndcdn.com/artworks-000139214570-nfaf5s-t500x500.jpg`,
		songLink: `https://open.spotify.com/track/1SISnhVlTM8SU7vh83sqUj`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Who's Gonna Lie to You`,
		songArtist: `armor for sleep`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733439ed02bb1efcd748df6baa`,
		songLink: `https://open.spotify.com/track/65FjAKxrtObMEiCJGxzwKU`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `This Charming Man - John Peel Session 14/09/83`,
		songArtist: `the smiths`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273786b44c75ebf915866523f5b`,
		songLink: `https://open.spotify.com/track/16LKuftb5zZ8kYweuQ7YER`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Yes or No`,
		songArtist: `corbin`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27362ca5d840aaf7a55db118534`,
		songLink: `https://open.spotify.com/track/06mecKND9vnvkc8JKbOfAh`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Cry Myself To Sleep`,
		songArtist: `corbin`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27362ca5d840aaf7a55db118534`,
		songLink: `https://open.spotify.com/track/1pyfARpoBENH4J7iOYGlbi?si=e9fe910354fd457f`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Rambo`,
		songArtist: `corbin`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27362ca5d840aaf7a55db118534`,
		songLink: `https://open.spotify.com/track/4xEsvXviTOzr7YFIN8JnyA?si=3fc1ee4eb7fe4699`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Tell Me`,
		songArtist: `corbin`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27362ca5d840aaf7a55db118534`,
		songLink: `https://open.spotify.com/track/7CNlUOUZbaxcyorkQle8o5?si=400021da9ac644dc`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Secrets`,
		songArtist: `state champs`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735cbe09a15ba88cc9456ede40`,
		songLink: `https://open.spotify.com/track/6XA12laU5GUhas6GcWDLuU`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `should have`,
		songArtist: `doves + wicca phase springs eternal`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2730272be17d4e69f871e6fbb49`,
		songLink: `https://open.spotify.com/track/7MadgpP9SWuQgvsNJkeiaf`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Chocolate`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273ebcc3ef64dbef8acb47e2960`,
		songLink: `https://open.spotify.com/track/44Ljlpy44mHvLJxcYUvTK0`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `I Got It Bad`,
		songArtist: `lontalius`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/aa155e4cb9746ca387cb13087216b889.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/5jzMoFA9zFFQHLtcQKxxwf`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `its inevitable`,
		songArtist: `sewerperson`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/752fa3bb6ce7767f9d74567398c08839.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/4fiwI6ZiMkOq0uD6ezNZbe`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Hate to See Your Heart Break`,
		songArtist: `paramore`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273532033d0d90736f661c13d35`,
		songLink: `https://open.spotify.com/track/3AX4HIRJY6GT6tgMkO5987`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `I Miss You`,
		songArtist: `blink-182`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2730a4ae12eb3a9fb7e3815001c`,
		songLink: `https://open.spotify.com/track/1oTo3ijRbaDAtrjJrGAPSw`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `fine//alright`,
		songArtist: `astrale`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/96b2bd5c9f712f179a429ca286df1c66.500x500x1.jpg`,
		songLink: `https://open.spotify.com/track/71Nzs8Zh3jYBODTK8MltYd`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Pictures of You`,
		songArtist: `the cure`, songAlbumTitle: ``, songAlbumCover: `https://m.media-amazon.com/images/M/MV5BNTY5YTI2MTgtMzc3OC00MTM4LWJiNTYtNjRkZGU3YWI2NDQ3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`,
		songLink: `https://open.spotify.com/track/1tuwC1Ob5vnYZhvg3zyzJg`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `XanaX Damage`,
		songArtist: `future`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273bd2983247446da211b36bc9d`,
		songLink: `https://open.spotify.com/track/3tZ4zv4UuenjJGSNUMfBNG`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Slowing Down`,
		songArtist: `seaway`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273375877831d54e8f59e322960`,
		songLink: `https://open.spotify.com/track/4b4utwidqvVifQ1HaJqP3C`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Please, Please, Please, Let Me Get What I Want`,
		songArtist: `the smiths`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273786b44c75ebf915866523f5b`,
		songLink: `https://open.spotify.com/track/6BrMEbPSSj55nQhkgf6DnE`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Inside Your Mind`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://upload.wikimedia.org/wikipedia/en/2/2d/A_Brief_Inquiry_into_Online_Relationships.png`,
		songLink: `https://open.spotify.com/track/0bXxKkYJNxOqHjeOrYanvS`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Kind of Perfect`,
		songArtist: `armor for sleep`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2739db90248eeb211e810ef9463`,
		songLink: `https://open.spotify.com/track/0tbbiHsEY5NBTeko2gat40`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `dracula freestyle`,
		songArtist: `93feetofsmoke`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735836bcfeb850b38d73e585eb`,
		songLink: `https://open.spotify.com/track/51tBlRiy36njFrXYpPV9vH`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `mistake`,
		songArtist: `ericdoa`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27340c036752aa4a53b091de6d1`,
		songLink: `https://open.spotify.com/track/0NqDAVTYLXYXz9yXI2Tn5u`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `By Design`,
		songArtist: `kid cudi`, songAlbumTitle: ``, songAlbumCover: `https://images.genius.com/6886b4ffcf1d1966f8532b9046c0ef16.1000x1000x1.jpg`,
		songLink: `https://open.spotify.com/track/5FxVTEpoBress37MmlMhbZ`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `To Kingdom Come`,
		songArtist: `passion pit`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733437e8bbed340ca556c42c04`,
		songLink: `https://open.spotify.com/track/048AQ5XBnvStuTn7X2pGSY`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Close to Me - Closest Mix`,
		songArtist: `the cure`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273242ecfbd87ec45172832d180`,
		songLink: `https://open.spotify.com/track/5GYIyYiyzfNylA10xwZ9Ue`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `One Less Heart To Break`,
		songArtist: `patent pending`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27356c51c69b9fcf8800cafa190`,
		songLink: `https://open.spotify.com/track/63VZfe7djzDF217BJjO7Kw`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `THAT ONE SONG`,
		songArtist: `lil lotus + lil aaron`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273743bcd4f68f6e501f27a7618`,
		songLink: `https://open.spotify.com/track/1f8JpHrCJpqYUyT4DSzz20`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Victim`,
		songArtist: `bladee + thaiboy digital + ecco2k`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27389fc8b71ce74de508e3109af`,
		songLink: `https://open.spotify.com/track/3lecQmgaZ9X5VLApFoHBYf`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Walking Disaster`,
		songArtist: `sum 41`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2731c5301bdbae7e2b35fe8024f`,
		songLink: `https://open.spotify.com/track/7xuhVUJmBpHR276Yc7AsgW`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Power Freaks`,
		songArtist: `jean dawson`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273f4d1e47ca2ece8fec853f107`,
		songLink: `https://open.spotify.com/track/06dWM8AMMjKE9Obf2L1ojy`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `how does that work`,
		songArtist: `skele`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273da10592183c866d8cd0a8c48`,
		songLink: `https://open.spotify.com/track/0ianbNC7BuxgeL5py9e5oC`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Candour`,
		songArtist: `neck deep`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a702897a710d5278ba00afa3`,
		songLink: `https://open.spotify.com/track/4CAfO7bz0J4AN0bQaUZ4vR`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Puzzle`,
		songArtist: `round table + nino`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273b88a9c9b4fd5317d18db4b79`,
		songLink: `https://open.spotify.com/track/4Q5dN0eB7DWKP5H3lsw3FO`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Someone Will Be There For You`,
		songArtist: `lontalius`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273cc073797a2f67c82899c3e39`,
		songLink: `https://open.spotify.com/track/3n2oVirJLEXwaO0ddydXuq?si=1973d3e729a9494d`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Snow Tires`,
		songArtist: `sewerperson`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2732d2a11da9692df79a780b82d`,
		songLink: `https://open.spotify.com/track/5UMnsGK7RAapv9sOdMDPvd`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Catch Me Outside`,
		songArtist: `ski mask the slump god`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27382ee02dc243cb98451a3ca25`,
		songLink: `https://open.spotify.com/track/4rgwri7LajWVZvdj2N81SS`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `mess`,
		songArtist: `5v`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273600fa8d4790549c97a205339`,
		songLink: `https://open.spotify.com/track/3BgLE9w5onc8zu991bqG7N`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `bored`,
		songArtist: `polearm`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2737d8da5bfce4128a0e504037d`,
		songLink: `https://open.spotify.com/track/0OoLbjhCtINBtTzQEURhkO`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `regret`,
		songArtist: `polearm`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27325bd21d27d1c4e407741dd17`,
		songLink: `https://open.spotify.com/track/0nGgInyAde3TsgTaFOcr48`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Shiver`,
		songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273323ef4fb08dedf7fe874ed2e`,
		songLink: `https://open.spotify.com/track/7jBFe9JOZNQz0DY0Zjr8tP`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Dreams Tonite`,
		songArtist: `alvvays`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273dca75069eb271ea2b7d8402f`,
		songLink: `https://open.spotify.com/track/0DRvClQbN9znQ295sx76VC`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Deluxe Capacitor`,
		songArtist: `hot mulligan`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738cc9c6e183cef734184e15b7`,
		songLink: `https://open.spotify.com/track/5DEF7cgddcZ1dUBk96J1Hx`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Otonoke`,
		songArtist: `creepy nuts`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2731596b18678ae04bd27f85f41`,
		songLink: `https://open.spotify.com/track/6KYOlIwDHbrbeBbJEtQ0Fj`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Hands Up`,
		songArtist: `caspr (ppg casper) + 06brick`, songAlbumTitle: ``, songAlbumCover: `https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2e/b0/80/2eb080bd-d7e8-12a7-bfb6-803b84989525/199479912669.png/600x600bf-60.jpg`,
		songLink: `https://open.spotify.com/track/6IgEyejPwKLgN3SXh1a4LF`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `XO Tour Llif3`,
		songArtist: `lil uzi vert`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273f23aee9d3be9fcbca1bc6352`,
		songLink: `https://open.spotify.com/track/7GX5flRQZVHRAGd6B4TmDO`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Hourglass`,
		songArtist: `seaway`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2732d41eac77391ad9dab54ee1f`,
		songLink: `https://open.spotify.com/track/3zoJrJxJMNhgcQmAoqgwwm`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `hand crushed by a mallet`,
		songArtist: `100gecs`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2734123c0f9b6689205d20f350f`,
		songLink: `https://open.spotify.com/track/0XWTLNFUHKMfUuTlWqHkeO`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `jan26ver0.9`,
		songArtist: `twinbee (sullii + aarigod)`, songAlbumTitle: ``, songAlbumCover: `https://source.boomplaymusic.com/group10/M00/11/18/ad7d6c32272249bc8ae67cf1a13432aa_464_464.jpg`,
		songLink: `https://open.spotify.com/track/6KalYI0OqjbP25OQrwG4Fm`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `XXL`,
		songArtist: `lany`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738d013d6d163279f56f54c7b5`,
		songLink: `https://open.spotify.com/track/4kFbxA8gCGx47zJrZ9KiQT`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Be Nice 2 Me`,
		songArtist: `bladee`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2737e041a457bd312e73440532a`,
		songLink: `https://open.spotify.com/track/2TmqHjg7uhizGndzXQdFuf`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `This Song is Called it's Called What's it Called`,
		songArtist: `hot mulligan`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273aee0089cccb2a9eab375b8d0`,
		songLink: `https://open.spotify.com/track/08KuqoLtwhpdqzPfmQCfpV`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Last Train Home`,
		songArtist: `pat metheny`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27346251d7f407e96e34407f16a`,
		songLink: `https://open.spotify.com/track/2O7heTmxheKOe1T0jNBPd1`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `ALONES`,
		songArtist: `aqua timez`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733d1f10144c9992e49bc7af5b`,
		songLink: `https://open.spotify.com/track/0iy10nabE2s3PtReQqCGrY`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `The Song Formerly Known As Intro`,
		songArtist: `hot mulligan`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273fec2691d20750b512ba92483`,
		songLink: `https://open.spotify.com/track/3ZpcZgG9CJYRJTdlii3PbJ`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `this body means nothing to me`,
		songArtist: `shrimp`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738e01d1607b385ebfd0db9e99`,
		songLink: `https://open.spotify.com/track/2zQQai9nqofvLZ703t0Jxi`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `All You Wanted By Michelle Branch`,
		songArtist: `hot mulligan`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273597e821e98e1e6c7e8b609b4`,
		songLink: `https://open.spotify.com/track/2GavHHPGrI59bNL5ouyUWk`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Conceal`,
		songArtist: `graduating life`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2731ff055d3f782d9f56e0199a2`,
		songLink: `https://open.spotify.com/track/3ZeWltH5kBmE3tcSnmWOvv`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Alone with You`,
		songArtist: `in her own words`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273d1db7ddd33e6c857d2e576a4`,
		songLink: `https://open.spotify.com/track/3jLj7HQNl4LXc9vNuwcFyw`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Jigsaw Falling Into Place`,
		songArtist: `radiohead`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27350b67ca7d6a42a0001e18e4c`,
		songLink: `https://open.spotify.com/track/0YJ9FWWHn9EfnN0lHwbzvV`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `movinglikeazombie`,
		songArtist: `ericdoa`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273c22a5bdbea4cc80411365e10`,
		songLink: `https://open.spotify.com/track/2BVNa4XQsy01eGNJrdVwe1`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `The Sore Feet Song`,
		songArtist: `ally kerr`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736b8b393ab88841df72a8d1e7`,
		songLink: `https://open.spotify.com/track/2aDi7Lxx2z76E1K6CupJzw`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Scars`,
		songArtist: `bluey thomas + cold hart`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273b64f606836230ad964c38b3b`,
		songLink: `https://open.spotify.com/track/6Bb9aLGqDpHDAMZCAT3s53`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `fruit2 / fleas`,
		songArtist: `93feetofsmoke`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273718c4cda5fee23966218e4ff`,
		songLink: `https://open.spotify.com/track/2RSLQXoqxiO3aXrGO9hENz`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `If You Could Read My Mind`,
		songArtist: `gordon lightfoot`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738fd7eec31ed567629f4ab420`,
		songLink: `https://open.spotify.com/track/57ct8jKi6trntXiRV0NnXi`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `3 Vets`,
		songArtist: `the future kingz`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2731e2838ede3642a5097d3fe4a`,
		songLink: `https://open.spotify.com/track/6t3sBdc5SbMlk5AyGvMei2`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Lifestyle`,
		songArtist: `young thug + rich homie quan`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273f0246c408dccfca67fdf8d9a`,
		songLink: `https://open.spotify.com/track/7DTlsMOQjGysXHpwwpHuPl`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Western Union`,
		songArtist: `ecco2k + thaiboy digital + bladee + yuung lean`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27389fc8b71ce74de508e3109af`,
		songLink: `https://open.spotify.com/track/4BZYq5y27t9l02IyLElK6V`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Last Christmas`,
		songArtist: `wham!`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273f2d2adaa21ad616df6241e7d`,
		songLink: `https://open.spotify.com/track/2gM62YOqzgRSUb70dn7Hwi?si=84074b8880184845`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Nirvana`,
		songArtist: `mucc`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27304f45eff16a1fb734fce0f72`,
		songLink: `https://open.spotify.com/track/2FRnf9qhLbvw8fu4IBXx78?si=0babfd4bbb6f45b8`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Amnesia`,
		songArtist: `5 seconds of summer`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273d98e2ce4bd12c3072fe9e7e8`,
		songLink: `https://open.spotify.com/track/1JCCdiru7fhstOIF4N7WJC`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Cashmoney`,
		songArtist: `no rome`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738b3d51e31ef60b54b3353f07`,
		songLink: `https://open.spotify.com/track/2r55hqPoXjUOLCYcfbJU1I`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `I just wanna clear something up`,
		songArtist: `patchymate`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27361d3c98d807ec047231b9a0c`,
		songLink: `https://open.spotify.com/track/2nGjkayjc1KNpvL98xsLtK`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Your Body Is a Wonderland`,
		songArtist: `john mayer`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273829007eae25b8a75ff047d87`,
		songLink: `https://open.spotify.com/track/7vFv0yFGMJW3qVXbAd9BK9`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Too Late`,
		songArtist: `arkaeo`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2734e6b09a6c74b59568687e39d`,
		songLink: `https://open.spotify.com/track/1b7pELy1W0yd50fDin2Mtu`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Stoned In The Valley`,
		songArtist: `no rome`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2738b3d51e31ef60b54b3353f07`,
		songLink: `https://open.spotify.com/track/2h7mb3d1C4JgxHyDzFOi7P`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Your Pain Is Mine Now`,
		songArtist: `title fight`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273eeb5fd5ce92d8a0262921a7a`,
		songLink: `https://open.spotify.com/track/03n2zDv0TXbH2q9XpzYpqY`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `The Black and White`,
		songArtist: `the band camino`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27315e850e14a3e43e9d39c0732`,
		songLink: `https://open.spotify.com/track/6KtCRh78Hl0bgWvkruPNcs`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `The Ghosts of Beverly Drive`,
		songArtist: `death cab for cutie`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2739298a04691c3011111d80bd5`,
		songLink: `https://open.spotify.com/track/6wNCdMW82LwJgFrnGqLhpJ`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Scream Your Name`,
		songArtist: `drippin so pretty + lil lotus`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27391d10e1d21ab23a3b11dfa91`,
		songLink: `https://open.spotify.com/track/1LmC8fhjWcAdpx41yEEBhj`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Stay on the Ground`,
		songArtist: `armor for sleep`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733439ed02bb1efcd748df6baa`,
		songLink: `https://open.spotify.com/track/4fCAYHQz5OGtPVgHa0f2im`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Birds Dont Sing`,
		songArtist: `tv girl`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273e1bc1af856b42dd7fdba9f84`,
		songLink: `https://open.spotify.com/track/0V34LU5aBA3hYgq178hFFY`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Tourist`,
		songArtist: `rac + tokyo police club`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735dc08a1f177fbec3ce382c1d`,
		songLink: `https://open.spotify.com/track/7rhbiTr94Jnbov2WVQCC7D`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Hollywood`,
		songArtist: `rac + penguin prison`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2735dc08a1f177fbec3ce382c1d`,
		songLink: `https://open.spotify.com/track/3xEqegrcyQtfhWeEMnDyCG`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Robbers`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273ebcc3ef64dbef8acb47e2960`,
		songLink: `https://open.spotify.com/track/7aHx437dgnClpc32kdt2wk`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `No Surprises`,
		songArtist: `radiohead`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733c0b096ff57f306f92c9306a`,
		songLink: `https://open.spotify.com/track/1bSpwPhAxZwlR2enJJsv7U`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Super Far`,
		songArtist: `lany`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2734011de7822423ed7557c3c81`,
		songLink: `https://open.spotify.com/track/15ahYSiHAIMxAnujlXVtta`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Everything Is Alright`,
		songArtist: `motion city soundtrack`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27385a14a0a61f764b46cf69acd`,
		songLink: `https://open.spotify.com/track/6xyiHZgrmXw7sMyYXbXjPV`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Photograph (from "her")`,
		songArtist: `arcade fire + owen pallett`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273af23c77b4a5e51a1944f262d`,
		songLink: `https://open.spotify.com/track/5Sj3F1OEvSz52ehpxTJZlR`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Sleep Thru Ur Alarms`,
		songArtist: `lontalius`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a02d47ad3c5c53a9c7e9e081`,
		songLink: `https://open.spotify.com/track/3Mmt4wAMtWRmObAxbejpPe`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Paranoid Android`,
		songArtist: `radiohead`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273bff3434553f08aa1b0a0ab59`,
		songLink: `https://open.spotify.com/track/2nTsKOXIVGDf2iPeVQO2Gm`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Whale Bone`,
		songArtist: `galileo gaalilei`, songAlbumTitle: `portal`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27349878e5d827207b68f98a733`,
		songLink: `https://open.spotify.com/track/2dpnP9RhU39850juGhxc48?si=a60a99f22dee486b`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Damage`,
		songArtist: `drippin so pretty`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2730e89a1463b9783d8a8db0a34`,
		songLink: `https://open.spotify.com/track/4dRk8GQp1JPHW1J23GenMW`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Our Song`,
		songArtist: `taylor swift`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2732f8c0fd72a80a93f8c53b96c`,
		songLink: `https://open.spotify.com/track/15DeqWWQB4dcEWzJg15VrN`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Imaginary Friends`,
		songArtist: `galileo gaalilei`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27349878e5d827207b68f98a733`,
		songLink: `https://open.spotify.com/track/1U0JPJXROAhlkxzmmD6gYi`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Waterworks`,
		songArtist: `sideview drive`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a85869d4f3f2317c887bf194`,
		songLink: `https://open.spotify.com/track/4igmjKce82fv2ikk9rpB84`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Leave Out All The Rest`,
		songArtist: `linkin prk`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736e996745f2c7b8036abef213`,
		songLink: `https://open.spotify.com/track/0sp00HSXkQyqTa6QqM0O8V`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Copperline`,
		songArtist: `james taylor`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273e86d32dd3164eda31ce08032`,
		songLink: `https://open.spotify.com/track/0i1XtQ6hOET96dz5oG45zl`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Tonight! Tonight! Tonight!`,
		songArtist: `bradio`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27331992f7e430fa264e5d4af55`,
		songLink: `https://open.spotify.com/track/7ewxbNDRLUsz7piYsHEcBh`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Beautiful Disaster`,
		songArtist: `311`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27362d0614b5dffca14a302b427`,
		songLink: `https://open.spotify.com/track/0LtsuNRz3IMRrHCYO9fKRk`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `spirit`,
		songArtist: `sullii`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733daa3579f7599e6904278b61`,
		songLink: `https://open.spotify.com/track/0vpqVmr7YkbRo1mNC0Y6Dc?si=9fd91cebdbfe4cc7`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `C`,
		songArtist: `sewerperson`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736c78a83166fcc633506fc648`,
		songLink: `https://open.spotify.com/track/74LdVothScFPmeGBd6SoVG`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Sunshine On My Shoulders`,
		songArtist: `john denver`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27334fb2b0117a542d515dc78d6`,
		songLink: `https://open.spotify.com/track/3m8lTUL5GxGUNSaycI77ND`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `I've Got A Dark Alley And A Bad Idea That Says You Should Shut Your Mouth (Summer Song)`,
		songArtist: `fall out boy`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27350ed3995761be8f0a2a52ae9`,
		songLink: `https://open.spotify.com/track/0goLTsTWQhZKJNSzF12I2Y`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Fuck You`,
		songArtist: `ceelo green`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a488cfd7dae36b2e5cf021b4`,
		songLink: `https://open.spotify.com/track/4ycLiPVzE5KamivXrAzGFG`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `New Light`,
		songArtist: `john mayer`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27321f02a52720857a42bba5417`,
		songLink: `https://open.spotify.com/track/3bH4HzoZZFq8UpZmI2AMgV`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `LET'S GET MARRIED`,
		songArtist: `partynextdoor`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273a6869484bb64e51e827157d0`,
		songLink: `https://open.spotify.com/track/01TaTQJrnJmq0cpufjcJV0`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `The Ephemeral Bluebell`,
		songArtist: `bibio`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273edf68faacf3ef28c001db583`,
		songLink: `https://open.spotify.com/track/2kMQ9M0jJYSdCAxI4MtMUV`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `World Apart`,
		songArtist: `asian kung-fu generation`, songAlbumTitle: `world apart`, songAlbumCover: `https://upload.wikimedia.org/wikipedia/en/a/ac/World_Apart.jpg`,
		songLink: `https://open.spotify.com/track/61ssVRFKyHLe1vDetrh6VL`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Rabbit in Backyard`,
		songArtist: `asian kung-fu generation`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273f28d3db8c19a509ba620d7b4`,
		songLink: `https://open.spotify.com/track/6uFoVVMtJt8XwzetfGzTcj`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Love Yourself`,
		songArtist: `justin beiber`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273c34f510fcf86aae4aad9c305`,
		songLink: `https://open.spotify.com/track/50kpGaPAhYJ3sGmk6vplg0`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Baby`,
		songArtist: `justin beiber`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2739707c3215a3410cf33eb7623`,
		songLink: `https://open.spotify.com/track/6epn3r7S14KUqlReYr77hA`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `You Found Me`,
		songArtist: `the fray`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27392b32435efed601fc8f1045d`,
		songLink: `https://open.spotify.com/track/4IoYz8XqqdowINzfRrFnhi`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `How to Save a Life`,
		songArtist: `the fray`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27359b8b957f164ce660919f1f4`,
		songLink: `https://open.spotify.com/track/5fVZC9GiM4e8vu99W0Xf6J`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Stick Season`,
		songArtist: `noah kahan`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2736ee35072df1af802cca09918`,
		songLink: `https://open.spotify.com/track/0mflMxspEfB0VbI1kyLiAv`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Baleen Morning`,
		songArtist: `balmorhea`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273d42fb87885e950324490086e`,
		songLink: `https://open.spotify.com/track/5XgSGrg13SzG30Aic4R8v3`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Ballin'`,
		songArtist: `roddy rich`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27393b1e96fad758869d0974162`,
		songLink: `https://open.spotify.com/track/3QzAOrNlsabgbMwlZt7TAY`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Lethal`,
		songArtist: `frost children`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273613154a085fdfbddb3fd7077`,
		songLink: `https://open.spotify.com/track/5bB9UvmIHX2qWWaCQhDdlD`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Girls`,
		songArtist: `the 1975`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273ebcc3ef64dbef8acb47e2960`,
		songLink: `https://open.spotify.com/track/2zyz614fJRrqQXW1q0sY1c`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Wonder Future`,
		songArtist: `asian kung-fu generation`, songAlbumTitle: ``, songAlbumCover: ``,
		songLink: `https://open.spotify.com/track/33MHzoZQ9fjTSlbgaJBu6D?si=8460499847c747d6`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `I Might Bore You.`,
		songArtist: `milk.`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27328aef3b0b98fb996f4ea3f69`,
		songLink: `https://open.spotify.com/track/0TSm07Tyw6r6dteZSeb2Bg`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Drama Queen`,
		songArtist: `milk.`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2737de564d9f14d839b354013a9`,
		songLink: `https://open.spotify.com/track/3bFB77vfQUiM9KgsE4rbt7?si=c6446d6d0e7b431f`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `white tee`,
		songArtist: `lil peep`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2731fdf8f713b0f86a99f5483b0`,
		songLink: `https://open.spotify.com/track/6KjkgYu4mjsMVYy4aCzyw6`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Standard`,
		songArtist: `asian kung-fu generation`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d00001e02d816391e3bd916cfa595d67e`,
		songLink: `https://open.spotify.com/track/0WhgRHsKlwrQb9LTdv35cy`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `hangar`,
		songArtist: `8485`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2737b0736d8c70ab4d277152761`,
		songLink: `https://open.spotify.com/track/1nXiUKuAu4mHte6Gt2HRdJ`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Eyes Closed`,
		songArtist: `state champs`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27323e570654be6c010703cb9cd`,
		songLink: `https://open.spotify.com/track/1a8g286iskfrKmPwL0Uni0`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `I Saw Water`,
		songArtist: `tigers jaw`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2733293262dc31445987ccb497f`,
		songLink: `https://open.spotify.com/track/6gJql3ABMd6iHVnr2ptWJg`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Ordinary Girl`,
		songArtist: `hannah montana`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273b2c23f56e9102cd672f91fa3`,
		songLink: `https://open.spotify.com/track/2kIq7Oq6YNfdUuTrmPC4w1`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Regret`,
		songArtist: `new order`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273ae2557ce3c4e3e8241b95df5`,
		songLink: `https://open.spotify.com/track/0nGgInyAde3TsgTaFOcr48`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `Hands`,
		songArtist: `moving mountains`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b2730b68f0af33843cadec3be313`,
		songLink: `https://open.spotify.com/track/39GIuyr03h7MZYWJPdXLKz`,
		songReview: ``,
		songLyrics: ``,
		},
	{ songTitle: `chAngE`,
		songArtist: `miwa`, songAlbumTitle: ``, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273c78c607c623caff4b7b01897`,
		songLink: `https://open.spotify.com/track/4dW80zBgl9BfWxi5upKgt1`,
		songReview: ``,
		songLyrics: ``,
		},
	].map(s => ({ ...s, type: 'song' as const }));

	spotifyProfile: string = `user/12169723921?si=99d85c1c15624876`;
	spotifyProfilePic: string = `https://i.scdn.co/image/ab6775700000ee85e50df101871d2a39bf96f9a9`;
	spotifyProfileStyle: string = `spotify-profile`;


	albumCoverStyle: string = `current-album-cover`;
	songString: string = `song`;


	private readonly sanitizer = inject(DomSanitizer);



	ngOnInit(): void {
	console.log(`SONGSILIKECOMPONENT: ` + this.songArray.length + ` songs displayed`)
	// console.log(`SONGsILIKECOMPONENT: ` + JSON.stringify(this.songArray))
	}

	ngOnDestroy(): void {
		
	console.log(`leaving songs-i-like page`)
	};

	getSongTitle(index: number): string {
		const song = this.songArray[index];
		return song.songTitle;
	}
	
	songSelected = output<number>();

	selectSong(index: number, marqueeComponent: Marquee): void {
		marqueeComponent.setAllCurrentItemData(index);
	}

	  // This method creates the safe URL when Angular needs it
  	// getSafeSpotifyUrl(): SafeResourceUrl {
	// 	const fullUrl = `https://open.spotify.com/embed/${this.currentSongLink()}`;
	// 	return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
	// }
}