import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'app-music-video-page',
  templateUrl: './music-video-page.html',
  imports: [],
  styleUrl: './music-video-page.css'
})
export class MusicVideoPage implements OnInit {

  videoArray: Video[] = [
      { videoName: "iwannabewithu", videoLink: "watch?v=YkP9q16iW28", videoGif: "music-video-gifs/iwbwu-gif-lowres-optimize.gif"},
      { videoName: "its not ok", videoLink: "watch?v=ppvbEUWRtaM", videoGif: "music-video-gifs/its-not-ok-gif-lowres-optimize.gif"},
      { videoName: "beside u", videoLink: "watch?v=90RplBr36UM", videoGif: "music-video-gifs/beside-u-gif-lowres-optimize.gif"}
    ];

  currentSelectedVideoName: WritableSignal<string> = signal("");
  currentVideoLink: WritableSignal<string> = signal("");
  currentVideoGif: WritableSignal<string> = signal("");


  ngOnInit(): void {
      console.log("Initializing music video page...");

      const defaultVideo = this.videoArray[0];
      this.currentSelectedVideoName.set(defaultVideo.videoName)
      this.currentVideoLink.set(defaultVideo.videoLink)
      this.currentVideoGif.set(defaultVideo.videoGif)

      console.log("Default video loaded:", defaultVideo.videoName);
  }

  selectVideo(videoIndentifier: string): void {
    console.log("Selecting video:", videoIndentifier);

    const requestedVideo = this.videoArray.find(video => video.videoName === videoIndentifier);

    if (requestedVideo) {

      this.currentSelectedVideoName.set(requestedVideo.videoName);
      this.currentVideoLink.set(requestedVideo.videoLink);
      this.currentVideoGif.set(requestedVideo.videoGif)
      
      console.log("Successfully switched to:", requestedVideo.videoName);
    } else {
      console.log("Could not find video:", videoIndentifier);
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

  getVideoLink(): string {
    const fullLink = `https://www.youtube.com/${this.currentVideoLink()}`;
    return fullLink;
  }

  
}