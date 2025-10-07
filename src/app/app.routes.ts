import { Routes } from '@angular/router';
import { Home } from './componenets/home/home';
import { MusicPage } from './componenets/music-page/music-page';
import { MusicVideoPage } from './componenets/music-video-page/music-video-page';

import { MoviesILike } from './componenets/stuff-i-like/movies-i-like/movies-i-like';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'music', component: MusicPage },
    { path: 'music-videos', component: MusicVideoPage},
    { path: 'movies-i-like', component:  MoviesILike },


    { path: '**', redirectTo: '' } // wildcard route for a 404 page

];
