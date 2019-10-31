import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import {ShowPlaylistComponent} from './show-playlist/show-playlist.component';
import {ShowVideoComponent} from './show-video/show-video.component';
import {PageNotFoundComponentComponent} from './page-not-found-component/page-not-found-component.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {PlayVideoModelComponent} from './play-video-model/play-video-model.component';

const routes: Routes = [

  {path: '', redirectTo: '/showVideos', pathMatch: 'full'},

  {path: 'showVideos', component: ShowVideoComponent,
  children: [
    { path: 'playVideo/:videoId', component: PlayVideoModelComponent}
  ]
  },

  {path: 'showPlaylist', component: ShowPlaylistComponent,
    children: [
      { path: 'playVideo/:videoId', component: PlayVideoModelComponent}
    ]
  },

  {path: 'searchResult/', redirectTo: '/showVideos', pathMatch: 'full'},
  {path: 'searchResult', redirectTo: '/showVideos', pathMatch: 'full'},

  {path: 'searchResult/:search', component: SearchResultComponent},
   {path: '**', component: PageNotFoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ShowVideoComponent, ShowPlaylistComponent, PageNotFoundComponentComponent, SearchResultComponent, PlayVideoModelComponent];
