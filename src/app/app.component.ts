import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveexample';

  //   pflag:boolean = false;
  //   lflag:boolean = false;
  //   dflag:boolean = false;
  //   nflag:boolean = false;

  // lhooksCode(){
  //   this.lflag = true;
  //   this.pflag = false;
  //   this.dflag = false;
  //   this.nflag = false;
  // }

  // pipeCode(){
  //   this.pflag = true;
  //   this.dflag = false;
  //   this.lflag = false;
  //   this.nflag = false;
  // }

  // dirCode(){
  //   this.dflag = true;
  //   this.pflag = false;
  //   this.lflag = false;
  //   this.nflag = false;
  // }

  // nestedcompCode()
  // {
  //   this.nflag = true;
  //   this.pflag = false;
  //   this.dflag = false;
  //   this.lflag = false;
  // }

  constructor(private _http: HttpClient) {
    this._http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(() => {
      console.log('Http Call is success from compoennt');
    }, (error) => {
      console.log('Http Call is failed from component');
    })
  }

}
