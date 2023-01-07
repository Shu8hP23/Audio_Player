import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  i:number = 1;


  Title = 'Now Playing';
  Artist = "ME"

  play_pause = () =>{

    console.log("inPlay")

    var sound = new Howl({
      src:['./assets/Song_'+this.i+'.mp3'],
      html5:true

    });

    
    console.log(sound);

    sound.play();

  }

  back = () =>{
    this.i --;
    console.log("back")
    var sound = new Howl({
      src:['./assets/Song_'+ this.i +'.mp3'],
      html5:true

    });


    console.log(sound);

    sound.play();

  }

  forward = () =>{
    console.log("forward")
    this.i ++;
    var sound = new Howl({
      src:['./assets/Song_'+ this.i +'.mp3'],
      html5:true

    });


    console.log(sound);

    sound.play();
  }


}
