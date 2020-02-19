import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-jokecomp',
  templateUrl: './jokecomp.component.html',
  styleUrls: ['./jokecomp.component.css']
})
export class JokecompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() joke:Joke;

    // public desc:string;
    // public ans:string;
    public flag:boolean=false;

    toggle(){
      this.flag = !this.flag;
    }
}
