import { Component, OnInit, signal, WritableSignal, inject} from '@angular/core';
import { SpotifyLink } from '../../models/spotify-link';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-music-page',
  imports: [],
  templateUrl: './music-page.html',
  styleUrl: './music-page.css'
})
export class MusicPage implements OnInit {
  
  // Your song data - exactly as you had it
  spotifyLinksArray: SpotifyLink[] = [
    { songName: "whyareyousurprised", songLink: "track/1uqKNYu0pkGRkoDfXA2Ry0?utm_source=generator"},
    { songName: "iwannabewithu", songLink: "track/0S24bDj1vzM9NXPjFTBUIU?utm_source=generator"},
    { songName: "beside u", songLink: "track/1bxanhwvw9DcK5scfsz5eU?utm_source=generator"},
    { songName: "its not ok", songLink: "track/4FICgoEZ6hpKLbx2G7wZPk?utm_source=generator"},
    { songName: "ill see u in my dreams", songLink: "album/2VKtClHKPGmAbb9xxu84hq?utm_source=generator"},
  ];

  // Much simpler approach - just store the song link, not the full URL
  currentSongLink: WritableSignal<string> = signal("");
  currentSelectionName: WritableSignal<string> = signal("");

  private readonly sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    console.log("Initializing music page...");
    
    // Set the default song
    const defaultSong = this.spotifyLinksArray[0];
    this.currentSelectionName.set(defaultSong.songName);
    this.currentSongLink.set(defaultSong.songLink);
    
    console.log("Default song loaded:", defaultSong.songName);
  }

  selectSong(songIdentifier: string): void {
    console.log("Selecting song:", songIdentifier);
    
    // Find the song in our array
    const requestedSong = this.spotifyLinksArray.find(song => song.songName === songIdentifier);
    
    if (requestedSong) {
      // Simply update our signals with the new song information
      this.currentSelectionName.set(requestedSong.songName);
      this.currentSongLink.set(requestedSong.songLink);
      
      console.log("Successfully switched to:", requestedSong.songName);
    } else {
      console.log("Could not find song:", songIdentifier);
    }

    document.requestStorageAccess().then(
      () => {
        console.log("cookie access granted");
      },
      () => {
        console.log("cookie access denied");
      },
    );
  }

  // This method creates the safe URL when Angular needs it
  getSafeSpotifyUrl(): SafeResourceUrl {
    const fullUrl = `https://open.spotify.com/embed/${this.currentSongLink()}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }
}