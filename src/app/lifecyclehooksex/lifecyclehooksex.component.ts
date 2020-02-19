import { Component } from '@angular/core';

import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-lifecyclehooksex',
  templateUrl: './lifecyclehooksex.component.html',
  styleUrls: ['./lifecyclehooksex.component.css'],
  providers:  [ LoggerService ]
})
export class LifecyclehooksexComponent{

  hasChild = false;
  hookLog: string[];

  heroName = 'xyz';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'XYZ';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '*!';
    this.logger.tick();
  }

}