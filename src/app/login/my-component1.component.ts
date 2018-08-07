import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css']
})
export class MyComponent1Component implements OnInit {

	angForm: FormGroup;
	numid;
	passid;

	constructor(private fb: FormBuilder) { 
		this.createForm();
	}
	createForm()
	{
		this.angForm=this.fb.group({
			numid:new FormControl('',[Validators.required,Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]),
			passid:['',Validators.required]
		})
	}
	save(){
		this.numid = this.angForm.controls['numid'].value;
		this.passid = this.angForm.controls['passid'].value;
		console.log("Number --> "+this.numid +"\nPassword --> "+this.passid);
	}

  ngOnInit() {}

   

}

export class User{
	num:number;
	pass:string;
}
