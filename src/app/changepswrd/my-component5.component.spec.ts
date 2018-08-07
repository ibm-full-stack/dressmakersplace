import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent5Component } from './my-component5.component';

describe('MyComponent5Component', () => {
  let component: MyComponent5Component;
  let fixture: ComponentFixture<MyComponent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
