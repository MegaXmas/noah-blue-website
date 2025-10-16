import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MusicPage } from './components/music-page/music-page';
import { MusicVideoPage } from './components/music-video-page/music-video-page';

import { MoviesILike } from './components/stuff-i-like/movies-i-like/movies-i-like';
import { SongsILike } from './components/stuff-i-like/songs-i-like/songs-i-like';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'music', component: MusicPage },
    { path: 'music-videos', component: MusicVideoPage},
    { path: 'movies-i-like', component:  MoviesILike },
    { path: '/songs-i-like', component: SongsILike },


    { path: '**', redirectTo: '' } // wildcard route for a 404 page

];
