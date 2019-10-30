import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {SafeUrl, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: ['./show-playlist.component.css']
})
export class ShowPlaylistComponent implements OnInit {
  videos = [];
  iframeUrl;
  trustedDashboardUrl: SafeUrl;
  Url = '';

  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.youtubeService.showPlaylist().subscribe( (data: any) => {
      this.videos = data;
    });
  }
  goToVideos() {
    console.log('going to videos');
  }

  sendDetails(id) {
    this.Url = 'https://www.youtube.com/embed/' + id;

    console.log(this.Url);

    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.Url);
    this.iframeUrl = this.trustedDashboardUrl;

  }

}
