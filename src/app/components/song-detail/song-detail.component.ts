import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/DTOs/Song';

@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {

  @Input() song: Song;
  constructor() { }

  ngOnInit() {
  }

}