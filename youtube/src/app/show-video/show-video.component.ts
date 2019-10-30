import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {SafeUrl, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit {

  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer) { }

  videos = [];
  Url = '';
  iframeUrl;
  trustedDashboardUrl: SafeUrl;

  ngOnInit() {
    this.videos = [];
    this.youtubeService.getVideosForChanel('UCiUxN_V_u-0kthIyLx2rfFg', 12).subscribe((data: any) => {
          this.videos = data.items;
      });
  }



  addToList(id, titl, description, image) {
    const link = 'https://www.youtube.com/watch?v=' + id;
    const datas = {
      "videoId": 1,
      "videoLink": id,
      "videoTitle": titl,
      "videoDescription": description,
      "videoImage": image,
    };

    this.youtubeService.savePlaylist(datas);

  }

  goToPlaylist() {
    console.log('going to playlist');
  }

  sendDetail(videos) {
    this.Url = 'http://www.youtube.com/embed/' + videos.id + '?enablejsapi=1&origin=http://example.com';

    console.log(this.Url);

    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.Url);
    this.iframeUrl = this.trustedDashboardUrl;

  }



}
