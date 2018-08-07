import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class MyserviceService {

  constructor(private http:Http) { }

//Code Implementation of Get Method of here

getUserDetails()
{
   return this.http.get('http://localhost:3000/users')
   .map(res => res.json());
}

getDate(){
	return new Date();
}
getString(){
	return "Hello World";
}

}
