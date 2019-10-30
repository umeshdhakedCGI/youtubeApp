import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {SafeUrl, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  videos = [];
  bool = false;


  iframeUrl;
  trustedDashboardUrl: SafeUrl;
  Url = '';

  constructor(private youtubeService: YoutubeService,  private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }


  search(input) {
    console.log(input);
    this.youtubeService.showSearchResult(input).subscribe((data: any) => {
      this.videos = data.items;
      //  console.log('searchResult' + this.videos);
      this.bool = true;
    });
  }

  sendDetails(id) {
    this.Url = 'https://www.youtube.com/embed/' + id;

    console.log(this.Url);

    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.Url);
    this.iframeUrl = this.trustedDashboardUrl;

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

}
