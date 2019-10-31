import { Component, OnInit } from '@angular/core';
import {SafeUrl, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-play-video-model',
  templateUrl: './play-video-model.component.html',
  styleUrls: ['./play-video-model.component.css']
})
export class PlayVideoModelComponent implements OnInit {

  s;
  Url = '';
  iframeUrl;
  trustedDashboardUrl: SafeUrl;

  constructor( private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('playvideomodel')
    this.route.paramMap.subscribe((params: ParamMap) => {
      const videoId = params.get('videoId');

      this.s = videoId;
      console.log('videoId=' + videoId);

      this.Url = 'http://www.youtube.com/embed/' + this.s + '?enablejsapi=1&origin=http://example.com';

      console.log(this.Url);

      this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.Url);
      this.iframeUrl = this.trustedDashboardUrl;

    } );



  }



}
