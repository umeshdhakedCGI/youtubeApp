import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey = 'AIzaSyAYC1shtpxFvR42pYyAnFkUiESwVpq5hIo';

  check = [];

  constructor(public http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  getTrendingVideos(maxResults): Observable<Object> {
    // tslint:disable-next-line:max-line-length
    // const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&chart=mostPopular &order=date&part=snippet &type=video,id&maxResults=' + maxResults + '&regionCode=IN';

    // tslint:disable-next-line:max-line-length
    const url = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=' + maxResults + '&key=' + this.apiKey + '&fields=items';
    return this.http.get(url).pipe(map((res) => res));
  }

  showSearchResult(input) {

    // tslint:disable-next-line:max-line-length
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&part=snippet &type=video,id&maxResults=15&q=' + input;

    return this.http.get(url).pipe(map((res) => res));
  }













  checkIfExist(datas) {

    console.log('inside check');

    // tslint:disable-next-line:max-line-length
    this.http.put('http://localhost:7777/videos/byTitle', datas).pipe(map((res) => res)).subscribe( (data: any) => {
      this.check = data;
      // console.log('inside put req');
      // console.log(this.check);
      // console.log(this.check.length);
    });

  }

  savePlaylist(data) {

    this.checkIfExist(data);

    setTimeout(() => {
      console.log(this.check.length)
      // tslint:disable-next-line:triple-equals
      if (this.check.length == 0) {
        this.http.post('http://localhost:7777/videos/video', data ).subscribe();
        alert('Added to playlist');
      } else {
        alert('already added');
      }

    }, 350);


  }

  showPlaylist() {
    const url = 'http://localhost:7777/videos/video';
    return this.http.get(url);

  }


}
