import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = 'YoutubeTrending';

  constructor() { }

  ngOnInit() {
  }

}
