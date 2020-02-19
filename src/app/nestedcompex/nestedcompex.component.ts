import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-nestedcompex',
  templateUrl: './nestedcompex.component.html',
  styleUrls: ['./nestedcompex.component.css']
})
export class NestedcompexComponent implements OnInit {

  jokes:Joke[] = [
    {des:'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ',ans:'A candle'},
    {des:'You find me in December, but not in any other month. What am I?',ans:'The letter D!'},
    {des:'I weigh nothing, but you can still see me. If you put me in a bucket, I make the bucket lighter. What am I?',ans:'A hole!'},
    {des:'What question can you never answer “Yes” to?',ans:'What does “N-O” spell?'},
    {des:'What five-letter word becomes shorter if you add two letters to it?',ans:'“Short” (add +”er”)!'},
    {des:'I have a neck, but no head, and I wear a cap. What am I?',ans:'A bottle!'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
