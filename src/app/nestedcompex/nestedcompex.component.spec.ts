import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedcompexComponent } from './nestedcompex.component';

describe('NestedcompexComponent', () => {
  let component: NestedcompexComponent;
  let fixture: ComponentFixture<NestedcompexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedcompexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedcompexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
