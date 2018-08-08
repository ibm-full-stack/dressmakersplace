import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
 
@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css']
})
export class MyComponent1Component implements OnInit {

	angForm: FormGroup;
	numid;
	passid;

	constructor(private fb: FormBuilder , private router:Router) { 
		this.createForm();
	}
	createForm()
	{
		this.angForm=this.fb.group({
			numid:new FormControl('',[Validators.required,Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]),
			passid:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]
		]})
	}
	save(){
		this.numid = this.angForm.controls['numid'].value;
		this.passid = this.angForm.controls['passid'].value;
		if(this.numid == 0 || this.passid == 0)
			alert("Field should not be empty");
		else
		{
		    this.router.navigate(['/otp']);
		    console.log("Number --> "+this.numid +"\nPassword --> "+this.passid);
		}

	}

  ngOnInit() {}

   

}

export class User{
	num:number;
	pass:string;
}
