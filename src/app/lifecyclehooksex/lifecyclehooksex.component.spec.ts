import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclehooksexComponent } from './lifecyclehooksex.component';

describe('LifecyclehooksexComponent', () => {
  let component: LifecyclehooksexComponent;
  let fixture: ComponentFixture<LifecyclehooksexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecyclehooksexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclehooksexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
