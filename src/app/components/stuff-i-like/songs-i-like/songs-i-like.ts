import { Component, signal, WritableSignal, OnInit, OnDestroy} from '@angular/core'

import { FavoriteSong } from '../../../models/favorite-song';

import { Marquee } from '../../marquee/marquee';
import { FavoriteStuff } from '../../../models/favorite-stuff';

@Component({
  selector: 'app-songs-i-like',
  imports: [Marquee],
  templateUrl: './songs-i-like.html',
  styleUrl: './songs-i-like.css'
})
export class SongsILike implements OnInit, OnDestroy {

  songArray: FavoriteSong[] = [
    { songTitle: "",
      songArtist: "", songAlbumTitle: "", songAlbumCover: "",
      songLink: "",
      songReview: "",
      },
    { songTitle: "",
      songArtist: "", songAlbumTitle: "", songAlbumCover: "",
      songLink: "",
      songReview: "",
      },
    { songTitle: "",
      songArtist: "", songAlbumTitle: "", songAlbumCover: "",
      songLink: "",
      songReview: "",
      },
    { songTitle: "",
      songArtist: "", songAlbumTitle: "", songAlbumCover: "",
      songLink: "",
      songReview: "",
      },
  ]




  ngOnInit(): void {
    console.log("SONGSILIKECOMPONENT: " + this.songArray.length + " songs displayed")
    console.log("SONGsILIKECOMPONENT: " + JSON.stringify(this.songArray))
  }

  ngOnDestroy(): void {
      
    console.log("leaving songs-i-like page")
  }
}
