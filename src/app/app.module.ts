import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './clientshome/my-component.component';
import { MyComponent1Component } from './login/my-component1.component';
import { MyComponent2Component } from './dressmakerhome/my-component2.component';
import { MyComponent3Component } from './otp/my-component3.component';
import { MyComponent4Component } from './forgotpswrd/my-component4.component';
import { MyComponent5Component } from './changepswrd/my-component5.component';
import { MyComponent6Component } from './home/my-component6.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontComponent } from './front/front.component';
import { MyserviceService } from './dressmakerhome/myservice.service';



const appRoutes:Routes=
[

{ path:'',redirectTo:'front',pathMatch:'full'},
{ path:'front', component: FrontComponent},
{ path:'dressmakerhome/:id',component: MyComponent2Component},
{ path:'login',component: MyComponent1Component},
{ path:'home',component: MyComponent6Component},
{ path:'clientshome',component: MyComponentComponent},
{ path:'forgotpswrd',component: MyComponent4Component},
{ path:'changepswrd',component: MyComponent5Component},
{ path:'otp',component: MyComponent3Component},
{ path:'*', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent1Component,
    MyComponent2Component,
    MyComponent3Component,
    MyComponent4Component,
    MyComponent5Component,
    MyComponent6Component,
    PageNotFoundComponent,
    FrontComponent   
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule,RouterModule.forRoot(appRoutes),ReactiveFormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
