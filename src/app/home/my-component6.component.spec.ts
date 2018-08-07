import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent6Component } from './my-component6.component';

describe('MyComponent6Component', () => {
  let component: MyComponent6Component;
  let fixture: ComponentFixture<MyComponent6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponent6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
