import { Component, OnInit } from '@angular/core';

import { Howl } from 'howler';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

   load = (url:any) =>{
    console.log(url);
    var sound = new Howl({
      src:[url],
      html5:true

    });

    sound.play();


    console.log('selected');

  }


  songs=[
    {
      url:'./assets/Song_1.mp3',
      id: 1,
      name: 'Ether Vox',
      Time: '3:26',
      Genre: 'Contemporary'
    },
    {
      url:'./assets/Song_2.mp3',
      id: 2,
      name: 'Aerosol of my Love',
      Time: '2:22',
      Genre: 'Pop'
    },
    {
      url:'./assets/Song_3.mp3',
      id: 3,
      name: 'Late Night Radio',
      Time: '4:24',
      Genre: 'Contemporary'
    },
    {
      url:'./assets/Song_4.mp3',
      id: 4,
      name: 'On Hold for You',
      Time: '3:38',
      Genre: 'Jazz'
    },
    {
      url:'./assets/Song_5.mp3',
      id: 5,
      name: 'Pleasant Porridge',
      Time: '2:51',
      Genre: 'Contemporary'
    },


  ]




}
