import { Component, inject, signal, WritableSignal, OnInit, PLATFORM_ID, OnDestroy, input, computed} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { FavoriteStuff } from '../../models/favorite-stuff';

import { FavoriteSong } from '../../models/favorite-song'
import { FavoriteMovie } from '../../models/favorite-movie';


@Component({
  selector: 'app-marquee',
  imports: [],
  templateUrl: './marquee.html',
  styleUrls: ['./marquee.css', '../stuff-i-like/movies-i-like/movies-i-like.css']
})
export class Marquee implements OnInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);
  private resizeListener?: () => void;
  private resumeTimeout?: number;


  stuffArray = input<FavoriteStuff[]>();

  kindOfItem = input.required<string>();

  currentFavoriteItem: WritableSignal<FavoriteStuff | null> = signal(null);

  currentItemTitle: WritableSignal<string> = signal("");
  currentItemArt: WritableSignal<string> = signal("");
  currentItemLink: WritableSignal<string> = signal("");
  currentItemReview: WritableSignal<string> = signal("");

  currentSongArtist:  WritableSignal<string> = signal("");
  currentSongLyrics: WritableSignal<string> = signal("");


  relevantProfile = input.required<string>();
  profilePicture = input.required<string>();
  profilePictureClass = input.required<string>();

  relevantImgClass = input.required<string>();

  
// ======ON INIT/DESTROY======
  ngOnInit(): void {

    console.log("MARQUEE COMPONENT: " + this.stuffArray()!.length + " items displayed")
    this.currentItemTitle.set("Hover over a " + this.kindOfItem() + " for my thoughts!")
    this.currentItemReview.set("*yapping*")
    
    if (isPlatformBrowser(this.platformId)) {

      this.resizeListener = () => {
        this.calculateMarqueeAnimation();
      };
      
      setTimeout(() => {
        this.calculateMarqueeAnimation();
      }, 100);
      

      window.addEventListener('resize', this.resizeListener);
    }

    console.log("MARQUEE COMPONENT: " + JSON.stringify(this.stuffArray()));
  }


  ngOnDestroy(): void {
  if (isPlatformBrowser(this.platformId)) {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
      }
      if (this.resumeTimeout) {
        clearTimeout(this.resumeTimeout);
      }
    }
  }



  // ======MARQUEE STUFF======
  calculateMarqueeAnimation() {
    if (!isPlatformBrowser(this.platformId)) return;

    const track = document.querySelector('.marquee-track') as HTMLElement;
    
    if (track) {
      
      const trackWidth = track.scrollWidth;
      console.log("MARQUEE COMPONENT: track width is " + trackWidth + " px")
      
    
      const scrollDistance = trackWidth / 2;
      console.log("MARQUEE COMPONENT: scroll distance is " + scrollDistance + " px")
      
      document.documentElement.style.setProperty('--scroll-distance', `-${scrollDistance}px`);
      
      
      const duration = this.stuffArray()!.length * 0.9;
      document.documentElement.style.setProperty('--marquee-duration', `${duration}s`);
    }
  }

  pauseAnimation() {
    if (this.resumeTimeout) {
      clearTimeout(this.resumeTimeout);
      this.resumeTimeout = undefined;
    }

    if (isPlatformBrowser(this.platformId)) {
      const track = document.querySelector('.marquee-track') as HTMLElement;
      if (track) track.style.animationPlayState = 'paused';
    }
  }

  resumeAnimation() {
    if (this.resumeTimeout) {
      clearTimeout(this.resumeTimeout);
    }
    
    this.resumeTimeout = globalThis.window.setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        const track = document.querySelector('.marquee-track') as HTMLElement;
        if (track) track.style.animationPlayState = 'running';
      }
      this.resumeTimeout = undefined;
    }, 250);
  }


  // ======ARRAY DATA METHODS======
  // setAllCurrentItemData(index: number): void {
  //   const selectedItem = this.stuffArray()![index];
  //   this.currentItemTitle.set(selectedItem.stuffTitle);
  //   this.currentItemArt.set(selectedItem.stuffArt);
  //   this.currentItemLink.set(selectedItem.stuffLink);
  //   this.currentItemReview.set(selectedItem.stuffReview);
  // }

  setAllCurrentItemData(index: number): void {
    const items = this.stuffArray();
    if (!items || index >= items.length) return;
    
    const item = items[index];
    this.currentFavoriteItem.set(item); // Store the full item
    
    if (this.kindOfItem() === `movie` && `movieTitle` in item!) {
      const movie = item as FavoriteMovie;
      this.currentItemTitle.set(item.movieTitle);
      this.currentItemArt.set(item.moviePoster);
      this.currentItemLink.set(item.movieLink);
      this.currentItemReview.set(item.movieReview);
    } else if (this.kindOfItem() === `song` && `songTitle` in item!) {
      const song = item as FavoriteSong;
      this.currentItemTitle.set(item.songTitle);
      this.currentItemArt.set(item.songAlbumCover);
      this.currentItemLink.set(item.songLink);
      this.currentItemReview.set(item.songReview);
      this.currentSongArtist.set(item.songArtist);
      this.currentSongLyrics.set(item.songLyrics);
    }
  }
}