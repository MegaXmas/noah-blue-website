import { Component, inject, signal, WritableSignal, OnInit, PLATFORM_ID, OnDestroy, input, effect, untracked, computed} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { TextAestheticPipe } from '../../pipes/text-aesthetic.pipe';

import { FavoriteStuff } from '../../models/favorite-stuff';

import { FavoriteSong } from '../../models/favorite-song'
import { FavoriteMovie } from '../../models/favorite-movie';
import { ArrayDataService } from '../../services/array-data-service';


@Component({
  selector: 'app-marquee',
  imports: [TextAestheticPipe],
  templateUrl: './marquee.html',
  styleUrls: ['./marquee.css', '../stuff-i-like/movies-i-like/movies-i-like.css', '../stuff-i-like/songs-i-like/songs-i-like.css']
})
export class Marquee implements OnInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);

  private resizeListener?: () => void;
  private resumeTimeout?: number;



  // ======ARRAY DATA SERVICE STUFF======

  private readonly arrayDataService = inject(ArrayDataService);

  public indexFromService: WritableSignal<number> = signal(0); 


  private readonly selectionListner = effect(() => {
    let newServiceIndex = this.arrayDataService.getArrayItemIndex();

    const stuff = untracked(() => this.stuffArray());

    let currentItem = untracked(() => this.currentFavoriteItem());
    let currentItemTitle = untracked(() => this.currentItemTitle());

    const displayIndex = stuff.indexOf(currentItem);

    console.log(`MARQUEE COMPONENT: item with index ${newServiceIndex} selected.`);
    console.log(`MARQUEE COMPONENT: currentItemTitle: ${currentItemTitle}
                  current displayed index: ${displayIndex}`
    );

    console.log(`MARQUEE COMPONENT: setting indexFromService to: ${newServiceIndex}`);
    this.indexFromService.set(newServiceIndex);
    let currentServiceIndex = this.indexFromService();
    if (newServiceIndex === currentServiceIndex) {
      console.log(`MARQUEE COMPONENT: index ${currentServiceIndex} properly updated`)
    } else {
      console.log(`MARQUEE COMPONENT: index failed to be sent by array-data-service. 
                  selected index: ${newServiceIndex}
                  service index currently stored in marquee component: ${currentServiceIndex}`)
    };

    console.log(`MARQUEE COMPONENT: attempting to set currentFavoriteItem to stuffArray[] index: ${newServiceIndex}`);
    this.setAllCurrentItemData(currentServiceIndex);
    currentItem = untracked(() => this.currentFavoriteItem());
    currentItemTitle = untracked(() => this.currentItemTitle());
    if (currentItem === stuff.at(newServiceIndex) || currentServiceIndex) {
      console.log(`MARQUEE COMPONENT: currentFavoriteItem updated successfully with index ${currentServiceIndex}.
                  currentItemTitle: ${currentItemTitle}`)
    } else {
      console.log(`MARQUEE COMPONENT: currentFavoriteItem failed to update successfully.
                  currentItemTitle: ${currentItemTitle}
                  index of currentFavoriteItem: ${stuff.indexOf(currentItem)}.
                  index recieved from service: ${currentServiceIndex}.
                  index stored in array-data-service: ${newServiceIndex}`)
    }
  });



  // ======MARQUEE SINGALS AND INPUTS======

  stuffArray = input.required<FavoriteStuff[]>();

  kindOfItem = input.required<string>();


  currentFavoriteItem: WritableSignal<FavoriteStuff | null> = signal(null);

  currentItemTitle: WritableSignal<string> = signal("");
  currentItemArt: WritableSignal<string> = signal("");
  currentItemLink: WritableSignal<string> = signal("");
  currentItemReview: WritableSignal<string> = signal("");

  currentSongArtist:  WritableSignal<string> = signal("");
  currentSongLyrics: WritableSignal<string> = signal("");


  relevantProfile = input<string>();
  profilePicture = input<string>();
  profilePictureClass = input<string>();

  relevantImgClass = input<string>();
  marqueeArtClass: WritableSignal<string> = signal("");

  

// ======ON INIT/DESTROY======
  ngOnInit(): void {
    console.log("MARQUEE COMPONENT: initializing component")

    this.marqueeArtClass.set(`marquee-item-` + this.kindOfItem())

    console.log("MARQUEE COMPONENT: " + this.stuffArray().length + " items displayed")
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

    console.log("MARQUEE COMPONENT:sending stuffArray data to array-data-service")
    this.sendArrayData();


    // console.log("MARQUEE COMPONENT: " + JSON.stringify(this.stuffArray()));
  }


  ngOnDestroy(): void {
    console.log(`MAARQUEE COMPONENT: destryoing component`)

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
      
      
      const duration = this.stuffArray().length * 0.9;
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

  sendArrayData(): void {
    this.arrayDataService.setArrayData(this.stuffArray())
  }

  getItemArt(item: FavoriteStuff): string {
    switch (item!.type) {
        case 'movie':
            return item!.moviePoster;
        case 'song':
            return item!.songAlbumCover;
    }
  }

  getItemTitle(item: FavoriteStuff): string {
    switch (item!.type) {
        case 'movie':
            return item!.movieTitle;
        case 'song':
            return item!.songTitle;
    }
  }

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