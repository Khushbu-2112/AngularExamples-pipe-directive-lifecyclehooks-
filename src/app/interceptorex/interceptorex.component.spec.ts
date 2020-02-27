import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorexComponent } from './interceptorex.component';

describe('InterceptorexComponent', () => {
  let component: InterceptorexComponent;
  let fixture: ComponentFixture<InterceptorexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptorexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
