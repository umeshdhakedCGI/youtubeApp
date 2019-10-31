import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {SafeUrl, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  videos = [];
  bool = false;
  s;
  boolbox = false;

  iframeUrl;
  trustedDashboardUrl: SafeUrl;
  Url = '';

  constructor(private youtubeService: YoutubeService,  private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('inInit');  // this won't be printed again and again


    // route.params.subscribe(value => {
    // const q = this.route.snapshot.paramMap.get('search');


    this.route.paramMap.subscribe((params: ParamMap) => {  // but this will be called again and again as param changes
     const q = params.get('search');

     this.s = q;
     console.log('q=' + q);

     this.youtubeService.showSearchResult(q).subscribe((data: any) => {
        this.videos = data.items;
        this.bool = true;
      });

    } );



    // });


  }



  // search(input) {
  //   console.log(input);
  //   this.youtubeService.showSearchResult(input).subscribe((data: any) => {
  //     this.videos = data.items;
  //     //  console.log('searchResult' + this.videos);
  //   //  this.router.navigate(['searchResult', 'q=' + input]);
  //     this.bool = true;
  //     this.s = ':' + input;
  //   });
  // }

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
