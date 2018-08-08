import { Component, OnInit,Input } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  animations: [
  trigger('myanimation', [
    state('inactive', style({
      opacity:0.8,
      height: '39%', 
      width:'40%'
    })),
    state('active',   style({
      opacity:1.0,
      height: '39%', 
      width:'500px'
    })),
    transition('inactive <=> active', animate('100ms ease-in'))
  ])
]
})
export class FrontComponent implements OnInit {

  constructor() { }

  state:string='inactive';
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  ngOnInit() {
  }

}
