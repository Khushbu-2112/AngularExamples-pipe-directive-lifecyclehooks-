import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LhookComponent } from './lhook.component';

describe('LhookComponent', () => {
  let component: LhookComponent;
  let fixture: ComponentFixture<LhookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LhookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
