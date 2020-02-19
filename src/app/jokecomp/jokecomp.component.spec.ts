import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokecompComponent } from './jokecomp.component';

describe('JokecompComponent', () => {
  let component: JokecompComponent;
  let fixture: ComponentFixture<JokecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
