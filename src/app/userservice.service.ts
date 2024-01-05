import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

url='http://localhost:4000/response/'

  constructor(private httpClient: HttpClient ) {
   }
   getUsers(){
    return this.httpClient.get(this.url)
   }
}
