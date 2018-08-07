import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css']
})
export class MyComponent2Component implements OnInit 
{


   getData:string;

   constructor(private httpService:MyserviceService,private route: ActivatedRoute) 
   { 
   //this.route.params.subscribe( params => console.log(params) );
   }

 ngOnInit() {
    
  }

  onTestGet()
  {
  	this.httpService.getUserDetails()
  	.subscribe
  	(
  		data => this.getData=JSON.stringify(data),
  		error => alert(error),
  		()=>console.log("Finished")
  	)
  }



}
