import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient) { }

  getUser()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // getData(){
  //   return this.db.list("/users");
  // }

  // addData(){
  //   return this.db.database.ref("/users").push({
  //     id:2,
  //     name:"New"
  //   })
  // }

}

