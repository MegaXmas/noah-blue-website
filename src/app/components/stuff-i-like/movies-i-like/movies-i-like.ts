import { Component, signal, WritableSignal, OnInit } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoriteMovie } from '../../../models/favorite-movie';


@Component({
  selector: 'app-movies-i-like',
  imports: [NgbTooltipModule, ],
  templateUrl: './movies-i-like.html',
  styleUrl: './movies-i-like.css'
})
export class MoviesILike implements OnInit{
  
  movieArray: FavoriteMovie[] =  [
    { movieTitle: "Twin Peaks: Fire Walk with Me", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/xb/qg/78/zd/tOQekTHJmVCgfUYXTb6dLAu6l8W-0-2000-0-3000-crop.jpg?v: 647348df81", 
      movieLink:"https://letterboxd.com/film/twin-peaks-fire-walk-with-me/", 
      movieReview: ""},
    { movieTitle: "Perfect Blue", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/4/6/1/7/5/46175-perfect-blue-0-2000-0-3000-crop.jpg?v=1ed5878cce", 
      movieLink: "https://letterboxd.com/film/perfect-blue/", 
      movieReview: ""},
    { movieTitle: "In The Mouth of Madness", 
      moviePoster: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2022/12/28104036/bNh5iySaJ15tvLjGrYsw1JNhx8l.jpg", 
      movieLink: "https://letterboxd.com/film/in-the-mouth-of-madness/", 
      movieReview: ""},
    { movieTitle: "her", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/au/nb/i6/lq/fsoTLnUXEUTNuVCBxAJMY0HPPd-0-2000-0-3000-crop.jpg?v=16789732be", 
      movieLink: "https://letterboxd.com/film/her/", 
      movieReview: ""},
    { movieTitle: "Alien", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/8v/f1/qw/aa/bg7K6VtUG7Ew70gQj6SSroD5d4R-0-2000-0-3000-crop.jpg?v=a932f9e98e", 
      movieLink: "https://letterboxd.com/film/alien/", 
      movieReview: ""},
    { movieTitle: "Blade Runner 2049", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/2/6/5/4/3/9/265439-blade-runner-2049-0-2000-0-3000-crop.jpg?v=86735e0bb8", 
      movieLink: "https://letterboxd.com/film/blade-runner-2049/", 
      movieReview: ""},
    { movieTitle: "The Raid", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/7/8/2/6/6/78266-the-raid-0-2000-0-3000-crop.jpg?v=4095a2a23a", 
      movieLink: "https://letterboxd.com/film/the-raid-2011/", 
      movieReview: ""},
    { movieTitle: "Live Flesh", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/5/1/7/8/9/51789-live-flesh-0-2000-0-3000-crop.jpg?v=a2b779318d", 
      movieLink: "https://letterboxd.com/film/live-flesh/", 
      movieReview: ""},
    { movieTitle: "Heavy Metal", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/4/4/9/7/3/44973-heavy-metal-0-2000-0-3000-crop.jpg?v=ccf9df9734", 
      movieLink: "https://letterboxd.com/film/heavy-metal/", 
      movieReview: ""},
    { movieTitle: "The King of Comedy", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/4g/y9/qr/q9/pbAqLKoLydP7jl6P0vmYwlDtRPD-0-2000-0-3000-crop.jpg?v=8eb030b5f7", 
      movieLink: "https://letterboxd.com/film/the-king-of-comedy/", 
      movieReview: ""},
    { movieTitle: "A Clockwork Orange", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/5/1/8/6/7/51867-a-clockwork-orange-0-2000-0-3000-crop.jpg?v=d6d5407b50", 
      movieLink: "https://letterboxd.com/film/a-clockwork-orange/", 
      movieReview: ""},
    { movieTitle: "Hot Wheels: World Race", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/1/8/2/2/4/18224-hot-wheels-world-race-0-2000-0-3000-crop.jpg?v=ea227d8aa6", 
      movieLink: "https://letterboxd.com/film/hot-wheels-world-race/", 
      movieReview: ""},
    { movieTitle: "The Silence of the Lambs", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/5/1/7/8/2/51782-the-silence-of-the-lambs-0-2000-0-3000-crop.jpg?v=18d88bdff4", 
      movieLink: "https://letterboxd.com/film/the-silence-of-the-lambs/", 
      movieReview: ""},
    { movieTitle: "The Shining", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/7s/m2/bw/d0/caoYMcjUamGoBVy65i1AHJBvdzw-0-2000-0-3000-crop.jpg?v=88d9d6cce4", 
      movieLink: "https://letterboxd.com/film/the-shining/", 
      movieReview: ""},
    { movieTitle: "Arrival", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/3u/dy/qd/qd/4Iu5f2nv7huqvuYkmZvSPOtbFjs-0-2000-0-3000-crop.jpg?v=0fc28fdf2c", 
      movieLink: "https://letterboxd.com/film/arrival-2016/", 
      movieReview: ""},
    { movieTitle: "The Dark Knight", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/78/y5/zg/ej/oefdD26aey8GPdx7Rm45PNncJdU-0-2000-0-3000-crop.jpg?v=2d0ce4be25", 
      movieLink: "https://letterboxd.com/film/the-dark-knight/", 
      movieReview: ""},
    { movieTitle: "The Beatles: Yellow Submarine", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/4/4/7/9/6/44796-yellow-submarine-0-2000-0-3000-crop.jpg?v=cf5db85f42", 
      movieLink: "https://letterboxd.com/film/yellow-submarine/", 
      movieReview: ""},
    { movieTitle: "Full Metal Jacket", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/l0/l4/6c/7v/29veIwD38rVL2qY74emXQw4y25H-0-2000-0-3000-crop.jpg?v=6e44829670", 
      movieLink: "https://letterboxd.com/film/full-metal-jacket/", 
      movieReview: ""},
    { movieTitle: "Best in Show", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/4/3/6/0/1/43601-best-in-show-0-2000-0-3000-crop.jpg?v=9acd41f8dc", 
      movieLink: "https://letterboxd.com/film/best-in-show/", 
      movieReview: ""},
    { movieTitle: "Hereditary", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/4/2/4/3/4/8/424348-hereditary-0-2000-0-3000-crop.jpg?v=470e48b681", 
      movieLink: "https://letterboxd.com/film/hereditary/", 
      movieReview: ""},
    { movieTitle: "Starred Up", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/k0/v3/xy/by/zFK9hfrBAQd0ATfzgGWGbPDBpea-0-2000-0-3000-crop.jpg?v=9b80173146", 
      movieLink: "https://letterboxd.com/film/starred-up/", 
      movieReview: ""},
    { movieTitle: "Holes", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/dd/2w/x4/la/o2Dm2mcE1qW8vT0bpsJO5OMBbqa-1-0-2000-0-3000-crop.jpg?v=419801ed91", 
      movieLink: "https://letterboxd.com/film/holes/", 
      movieReview: ""},
    { movieTitle: "City of God", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/5/1/5/2/3/51523-city-of-god-0-2000-0-3000-crop.jpg?v=7517ea94ce", 
      movieLink: "https://letterboxd.com/film/city-of-god/", 
      movieReview: ""},
    { movieTitle: "The Man from Earth", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/4/3/9/5/2/43952-the-man-from-earth-0-2000-0-3000-crop.jpg?v=f307c73fdf", 
      movieLink: "https://letterboxd.com/film/the-man-from-earth/", 
      movieReview: ""},
    { movieTitle: "Cars", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/de/kp/63/hd/dWg33ektXuHmxjSjEulwDPTWbC2-0-2000-0-3000-crop.jpg?v=df40f228cb", 
      movieLink: "https://letterboxd.com/film/cars/", 
      movieReview: ""},
    { movieTitle: "Oldboy", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/5/1/4/5/4/51454-oldboy-0-2000-0-3000-crop.jpg?v=294dbcadef", 
      movieLink: "https://letterboxd.com/film/oldboy/", 
      movieReview: ""},
    { movieTitle: "The Incredibles", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/4/6/8/0/6/46806-the-incredibles-0-2000-0-3000-crop.jpg?v=dce597a185", 
      movieLink: "https://letterboxd.com/film/the-incredibles/", 
      movieReview: ""},
    { movieTitle: "Howl’s Moving Castle", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/4/9/0/6/2/49062-howl-s-moving-castle-0-2000-0-3000-crop.jpg?v=fde81bda52", 
      movieLink: "https://letterboxd.com/film/howls-moving-castle/", 
      movieReview: ""},
    { movieTitle: "Star Wars: Episode III – Revenge of the Sith", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/5/0/7/0/9/50709-star-wars-episode-iii-revenge-of-the-sith-0-2000-0-3000-crop.jpg?v=cdb8caab10", 
      movieLink: "https://letterboxd.com/film/star-wars-episode-iii-revenge-of-the-sith/", 
      movieReview: ""},
    { movieTitle: "Star Wars", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/2/7/0/6/2706-star-wars-0-2000-0-3000-crop.jpg?v=f1f1271bf5", 
      movieLink: "https://letterboxd.com/film/star-wars/", 
      movieReview: ""},
    { movieTitle: "Star Wars: Episode V – The Empire Strikes Back", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/mp/pz/lf/2i/7BuH8itoSrLExs2YZSsM01Qk2no-0-2000-0-3000-crop.jpg?v=27c6c6fba7", 
      movieLink: "https://letterboxd.com/film/the-empire-strikes-back/", 
      movieReview: ""},
    { movieTitle: "Mean Streets", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/5/1/8/5/0/51850-mean-streets-0-2000-0-3000-crop.jpg?v=931fbfc6b7", 
      movieLink: "https://letterboxd.com/film/mean-streets/", 
      movieReview: ""},
    { movieTitle: "Borat", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/5/1/6/1/4/51614-borat-cultural-learnings-of-america-for-make-benefit-glori-0-2000-0-3000-crop.jpg?v=17316654a2", 
      movieLink: "https://letterboxd.com/film/borat-cultural-learnings-of-america-for-make-benefit-glorious-nation-of-kazakhstan/", 
      movieReview: ""},
    { movieTitle: "Jay and Silent Bob Strike Back", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/5/0/3/5/5/50355-jay-and-silent-bob-strike-back-0-2000-0-3000-crop.jpg?v=cc2522999c", 
      movieLink: "https://letterboxd.com/film/jay-and-silent-bob-strike-back/", 
      movieReview: ""},
    { movieTitle: "Frank", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/1/2/5/9/7/6/125976-frank-0-2000-0-3000-crop.jpg?v=bdd7f75fa5", 
      movieLink: "https://letterboxd.com/film/frank-2014/", 
      movieReview: ""},
    { movieTitle: "Pirates of the Caribbean: The Curse of the Black Pearl", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/2/6/9/5/2695-pirates-of-the-caribbean-the-curse-of-the-black-pearl-0-2000-0-3000-crop.jpg?v=272b36c0d8", 
      movieLink: "https://letterboxd.com/film/pirates-of-the-caribbean-the-curse-of-the-black-pearl/", 
      movieReview: ""},
    { movieTitle: "Memories", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/2/2/1/2/8/22128-memories-0-2000-0-3000-crop.jpg?v=7443e066ca", 
      movieLink: "https://letterboxd.com/film/memories/", 
      movieReview: ""},
    { movieTitle: "Millennium Actress", 
      moviePoster: "https://a.ltrbxd.com/resized/film-poster/2/9/8/8/4/29884-millennium-actress-0-2000-0-3000-crop.jpg?v=7c3df2e20f", 
      movieLink: "https://letterboxd.com/film/millennium-actress/", 
      movieReview: ""},
    { movieTitle: "Harry Potter and the Prisoner of Azkaban", 
      moviePoster: "https://a.ltrbxd.com/resized/sm/upload/a3/0q/kf/h8/jUFjMoLh8T2CWzHUSjKCojI5SHu-0-2000-0-3000-crop.jpg?v=6285ee260e", 
      movieLink: "https://letterboxd.com/film/harry-potter-and-the-prisoner-of-azkaban/", 
      movieReview: ""},

          { movieTitle:"", 
      moviePoster: "", 
      movieLink: "", 
      movieReview: ""},
  ]


  currentMovieTitle: WritableSignal<string> = signal("Hover over a movie for my thoughts!");
  currentMoviePoster: WritableSignal<string> = signal("");
  currentMovieLink: WritableSignal<string> = signal("");
  currentMovieReview: WritableSignal<string> = signal("*yapping*");


  ngOnInit(): void {
    console.log(this.movieArray.length - 1 + " movies displayed")
  };


  getMovieTitle(index: number): string {
    const movie = this.movieArray[index]; 
    return movie.movieTitle
    }

  getMoviePoster(index: number): string {
    const movie = this.movieArray[index]; 
    return movie.moviePoster
    }
  
  getMovieLink(index: number): string {
    const movie = this.movieArray[index]; 
    return movie.movieLink
    }

  getMovieReview(index: number): string {
    const movie = this.movieArray[index]; 
    return movie.movieReview
    }

  setCurrentMovieTitle(index: number): WritableSignal<string> {
    this.currentMovieTitle.set(this.getMovieTitle(index))
    return this.currentMovieTitle
  }

  setCurrentMoviePoster(index: number): WritableSignal<string> {
    this.currentMovieTitle.set(this.getMoviePoster(index))
    return this.currentMoviePoster
  }

  setCurrentMovieLink(index: number): WritableSignal<string> {
    this.currentMovieTitle.set(this.getMovieLink(index))
    return this.currentMovieLink
  }
    
  setCurrentMovieReview(index: number): WritableSignal<string> {
    this.currentMovieTitle.set(this.getMovieReview(index))
    return this.currentMovieReview
  }
  
  setAllCurrentMovieData(index: number): void {
    this.setCurrentMovieTitle(index);
    this.setCurrentMovieTitle(index);
    this.setCurrentMoviePoster(index);
    this.setCurrentMovieLink(index);
    this.setCurrentMovieReview(index);
  }
}
