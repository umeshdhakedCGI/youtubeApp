import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {YoutubeService} from './youtube.service';
import { ShowVideoComponent } from './show-video/show-video.component';
import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';
import { ParentComponent } from './parent/parent.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { PlayVideoModelComponent } from './play-video-model/play-video-model.component';

@NgModule({
  declarations: [
    AppComponent,
   // ShowVideoComponent,
    // ShowPlaylistComponent,
    ParentComponent,
    // PageNotFoundComponentComponent
    routingComponents,
    PlayVideoModelComponent
    // SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
