import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeex',
  templateUrl: './pipeex.component.html',
  styleUrls: ['./pipeex.component.css']
})
export class PipeexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title:string = 'Pipe Example';
  today = new Date();
  t:boolean = true;
  data = {name:'khushi',age:21,email:'khush@gmail.com'};
  days = ['sun','mon','tue','wed','thu','fri','sat'];

    toggleFormat(){
      this.t = !this.t;
    }
    get format(){
      return this.t ? 'shortDate':'fullDate';
    }
}
