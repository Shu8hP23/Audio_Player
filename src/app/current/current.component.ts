import { Component, OnInit } from '@angular/core';
import Model from "../modelfolder/Model"
import {Howl} from 'howler'
// import {Assets} from 'src/assets'
import { MusicComponent } from '../music/music.component';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  Artist = "ME"
  Title = "Now Playing"



}

