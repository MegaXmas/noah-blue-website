import { Component, OnInit, OnDestroy} from '@angular/core'
import { FavoriteSong } from '../../../models/favorite-song';

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
      songLink: `track/5n8EO9QJbmQLtQd8MAvrOg?si=3169e3388cc640f9`,
      songReview: `the first song that every made me cry. its a masterpiece of emotion.`,
      songLyrics: `"the plans i make still have you in them. \
                  \n when you coming swimming into view, and im hanging on your word like i always use to do. \
                  \n the words they use so lightly, i only feel for you. \
                  \n i only know because i carry you around \
                  \n in the background..." \
                  \n such beautiful songwriting man it gets me everytime...` },
    { songTitle: `LIFE EATER`,
      songArtist: `nothing,\u200Bnowhere.`, songAlbumTitle: `BLOODLUST`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b273e29c71fe5a3f5aa301b4bf76`,
      songLink: `track/04LKJh8KqRAFWKHgEKpGPq?si=1fa92c39893f4b9e`,
      songReview: `i love a sad banger. the progression from soft whispy vocals to emotional pent up screaming really does it for me. instrumental perfectly captures the tone too. this is my favorite nn song. \
                  when i found out that, out of all the songs on bloodlust, this was the song homie jayvee had the most creative control on it was a serindipitous moment lol.`,
      songLyrics: `"i need your flesh, the nape of you neck. \
                  \n just tell me you love me. \
                  \n fuck all the rest" \
                  \n so simple, but some of my favorite lyrics of all time. i really feel it when he sings it`,
      },
    { songTitle: `where the wind blows`,
      songArtist: `caspr (ppg casper)`, songAlbumTitle: `where the wind blows`, songAlbumCover: `https://images.genius.com/58ccc343c26ddbb73f684152c614f819.500x500x1.jpg`,
      songLink: `https://www.youtube.com/watch?v=hhsUOcodalk`,
      songReview: `i really wish caspr could put this on spotify T.T i know he has had label issues for years but this is such a great song. \
                  he blends all of his strengths as an artist with this song and i think its so beautiful <333`,
      songLyrics: `"promise that ill fix u~ \
                  \n will u fix me??? \
                  \n i got issues baby, yea~~~~"`,
      },
    { songTitle: `Scab`,
      songArtist: `corbin`, songAlbumTitle: `Ghost With Skin`, songAlbumCover: `https://i.scdn.co/image/ab67616d0000b27362ca5d840aaf7a55db118534`,
      songLink: `track/491tKk99HaUtA5Xpr38zIp?si=6d8e899cd8634e4e`,
      songReview: `this song made me feel like i had no idea what i was doing as an artist LMAO. this is the exact kind of music i want/wanted to make. it heavily inspired my song "beside u". :3 \
                  such creative vocals and visual lyricism. everything fits together perfectly like a hauntingly beautiful painting. \
                  its so hard to pick my favorite lyrics from this song so im gonna put multiple verses lol. i love every single part equally.`,
      songLyrics: `"putting you in harms way when i turn into a monster. \
                  \n i know that ur ashamed, take a numberrrrr \
                  \n i know i can be a real bummer, baby all my life ive been swimming through the gutter \
                  \n are we gonna make it right? are we right for each other? \
                  \n this might be the last supperrrr~~~ \
                  \n i dont want u wastin away. what u stay with me for? \
                  \n why u gotta play with pain? gotta find a new sport. \
                  \n know i gotta find a way, yeah, baby. yeah, you know I gotta find that cure. \
                  \n just tell me how much that ull take from me. \
                  \n please tell me how ull endure" \
                  \n\n "hard to find the courage just to muster it up. \
                  \n body looking like a crusher, i got rucks in my blood. \
                  \n know i never tell u baby, tell u enough- \
                  \n ur the only thing thats saving me from crossing over \
                  \n to the other side. will u be there on the other side? \
                  \n no need to be scared, we can share the ride, baby \
                  \n look into my eyes, know ur terrified, baby \
                  \n can we make it through the night? are we really worth saving????" \
                  \n\n "baby i can tell when we first met~~~ \
                  \n that u were in denial, baby, ur cynic~~~ \
                  \n but i can see the light shine through your grimace \
                  \n i never thought ud drive me to the clinic~~~ \
                  \n baby, im stuck in sin city \
                  \n tryna get me hooked, why so fishy? \
                  \n might run off, might <strong><em>go missiiinnngg</em></strong> \
                  \n no lights on, going 150"`, 
      },
    { songTitle: ``,
      songArtist: `sullii`, songAlbumTitle: ``, songAlbumCover: ``,
      songLink: ``,
      songReview: ``,
      songLyrics: ``,
      },
    { songTitle: ``,
      songArtist: `quadeca`, songAlbumTitle: ``, songAlbumCover: ``,
      songLink: ``,
      songReview: ``,
      songLyrics: ``,
      },

          { songTitle: ``,
      songArtist: ``, songAlbumTitle: ``, songAlbumCover: ``,
      songLink: ``,
      songReview: ``,
      songLyrics: ``,
      },
  ].map(s => ({ ...s, type: 'song' as const }));

  spotifyProfile: string = `https://open.spotify.com/user/12169723921?si=99d85c1c15624876`;
  spotifyProfilePic: string = `https://i.scdn.co/image/ab6775700000ee85e50df101871d2a39bf96f9a9`;
  spotifyProfileStyle: string = `spotify-profile`;


  albumCoverStyle: string = `current-album-cover`;
  songString: string = `song`;


  ngOnInit(): void {
    console.log(`SONGSILIKECOMPONENT: ` + this.songArray.length + ` songs displayed`)
    console.log(`SONGsILIKECOMPONENT: ` + JSON.stringify(this.songArray))
  }

  ngOnDestroy(): void {
      
    console.log(`leaving songs-i-like page`)
  };
}