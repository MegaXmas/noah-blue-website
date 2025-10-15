import { Component, inject, signal, WritableSignal, OnInit, PLATFORM_ID, OnDestroy, input, AfterViewInit} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { FavoriteStuff } from '../../models/favorite-stuff';


@Component({
  selector: 'app-marquee',
  imports: [],
  templateUrl: './marquee.html',
  styleUrls: ['./marquee.css', '../stuff-i-like/movies-i-like/movies-i-like.css']
})
export class Marquee implements OnInit, OnDestroy, AfterViewInit {

  private readonly platformId = inject(PLATFORM_ID);
  private resizeListener?: () => void;
  private resumeTimeout?: number;


  stuffArray = input<FavoriteStuff[]>();

  currentStuffTitle: WritableSignal<string> = signal("");
  currentStuffArt: WritableSignal<string> = signal("");
  currentStuffLink: WritableSignal<string> = signal("");
  currentStuffReview: WritableSignal<string> = signal("");


  relevantProfile = input.required<string>();
  profilePicture = input.required<string>();
  profilePictureClass = input.required<string>();

  relevantImgClass = input.required<string>();


// ======ON INIT/DESTROY======
  ngOnInit(): void {

    console.log(this.stuffArray.length + " stuff displayed")
    this.currentStuffTitle.set("Hover over a stuff for my thoughts!")
    this.currentStuffReview.set("*yapping*")
    
    if (isPlatformBrowser(this.platformId)) {

      this.resizeListener = () => {
        this.calculateMarqueeAnimation();
      };
      
      setTimeout(() => {
        this.calculateMarqueeAnimation();
      }, 100);
      

      window.addEventListener('resize', this.resizeListener);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId))

      this.calculateMarqueeAnimation()
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
      
    
      const scrollDistance = trackWidth / 2;
      
      document.documentElement.style.setProperty('--scroll-distance', `-${scrollDistance}px`);
      
      
      const duration = this.stuffArray.length * 0.9;
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
    
    this.resumeTimeout = window.setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        const track = document.querySelector('.marquee-track') as HTMLElement;
        if (track) track.style.animationPlayState = 'running';
      }
      this.resumeTimeout = undefined;
    }, 250);
  }


  // ======ARRAY DATA METHODS======
  setAllCurrentStuffData(index: number): void {
    const selectedStuff = this.stuffArray()![index];
    this.currentStuffTitle.set(selectedStuff.stuffTitle);
    this.currentStuffArt.set(selectedStuff.stuffArt);
    this.currentStuffLink.set(selectedStuff.stuffLink);
    this.currentStuffReview.set(selectedStuff.stuffReview);
  }

}