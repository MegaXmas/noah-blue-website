// TODO: figure out how to use input() to transfer array data. the array in one component holds objects of a different type, figure out how to deal with that  

import { Component, inject, signal, WritableSignal, OnInit, PLATFORM_ID, OnDestroy, viewChild, contentChild, Input, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { FavoriteStuff } from '../../models/favorite-stuff';


@Component({
  selector: 'app-marquee',
  imports: [],
  templateUrl: './marquee.html',
  styleUrl: './marquee.css'
})
export class Marquee implements OnInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);
  private resizeListener?: () => void;
  private resumeTimeout?: number;

  array = input<Array>



  stuffArray: WritableSignal<Array<FavoriteStuff>> =  signal([]);

  currentStuffTitle: WritableSignal<string> = signal("");
  currentStuffArt: WritableSignal<string> = signal("");
  currentStuffLink: WritableSignal<string> = signal("");
  currentStuffReview: WritableSignal<string> = signal("");


  ngOnInit(): void {


    console.log(this.stuffArray.length + " stuffs displayed")
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

  setCurrentArray(array: Array<object>): void {

  }

  getStuffTitle(index: number): string {
    const stuff = this.stuffArray[index]; 
    return stuff.stuffTitle
    }

  getStuffArt(index: number): string {
    const stuff = this.stuffArray[index]; 
    return stuff.stuffArt
    }
  
  getStuffLink(index: number): string {
    const stuff = this.stuffArray[index]; 
    return stuff.stuffLink
    }

  getStuffReview(index: number): string {
    const stuff = this.stuffArray[index]; 
    return stuff.stuffReview
    }

  setCurrentStuffTitle(index: number): WritableSignal<string> {
    this.currentStuffTitle.set(this.getStuffTitle(index))
    return this.currentStuffTitle
  }

  setCurrentStuffArt(index: number): WritableSignal<string> {
    this.currentStuffArt.set(this.getStuffArt(index))
    return this.currentStuffArt
  }

  setCurrentStuffLink(index: number): WritableSignal<string> {
    this.currentStuffLink.set(this.getStuffLink(index))
    return this.currentStuffLink
  }
    
  setCurrentStuffReview(index: number): WritableSignal<string> {
    this.currentStuffReview.set(this.getStuffReview(index))
    return this.currentStuffReview
  }
  
  setAllCurrentStuffData(index: number): void {
    this.setCurrentStuffTitle(index);
    this.setCurrentStuffArt(index);
    this.setCurrentStuffLink(index);
    this.setCurrentStuffReview(index);
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

    this.stuffArray.length = 0;
  }

}

