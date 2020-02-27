import { Component, OnInit } from '@angular/core';
import { RecordsService } from "../records.service";

@Component({
  selector: 'app-httpuse',
  templateUrl: './httpuse.component.html',
  styleUrls: ['./httpuse.component.css']
})
export class HttpuseComponent implements OnInit {

  data:object;

  constructor(private ser:RecordsService){}

  ngOnInit(){
    this.ser.getUser().subscribe(x=>this.data = x);
  }  


}
