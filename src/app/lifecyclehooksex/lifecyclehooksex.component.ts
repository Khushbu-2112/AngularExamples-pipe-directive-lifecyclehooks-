import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-lifecyclehooksex',
  template: `
  <div class="parent">
    <h2>Lifecycle Hooks example</h2>

    <button class="btn btn-info" (click)="toggleChild()">
      {{hasChild ? 'Destroy' : 'Create'}} Element 
    </button>&nbsp;&nbsp;
    <button class="btn btn-info" (click)="updateHero()" [hidden]="!hasChild">Update Hero</button>

    <lhook *ngIf="hasChild" [name]="heroName">
    </lhook>

    <h4>-- Lifecycle Hook Log --</h4>
    <div *ngFor="let msg of hookLog">{{msg}}</div>
  </div>
  `,
  styles: ['.parent {background: lightgray;padding:10px}'],
  providers:  [ LoggerService ]
})
export class LifecyclehooksexComponent{

  hasChild = false;
  hookLog: string[];

  heroName = 'Windstorm';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }

}