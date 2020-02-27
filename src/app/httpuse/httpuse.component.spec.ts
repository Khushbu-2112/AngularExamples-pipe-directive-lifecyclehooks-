import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpuseComponent } from './httpuse.component';

describe('HttpuseComponent', () => {
  let component: HttpuseComponent;
  let fixture: ComponentFixture<HttpuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
