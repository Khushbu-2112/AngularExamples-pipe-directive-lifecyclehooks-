import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveex',
  templateUrl: './directiveex.component.html',
  styleUrls: ['./directiveex.component.css']
})
export class DirectiveexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  color:string;
  no:number=25;
  arr:number[] = [20,45,12,78,65,98,20];
}
