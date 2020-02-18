import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { OddDirective } from './odd.directive';
import { PipeexComponent } from './pipeex/pipeex.component';
import { LifecyclehooksexComponent } from './lifecyclehooksex/lifecyclehooksex.component';
import { DirectiveexComponent } from './directiveex/directiveex.component';
import { CustompipePipe } from './custompipe.pipe';
import { LhookComponent } from './lhook/lhook.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    OddDirective,
    PipeexComponent,
    LifecyclehooksexComponent,
    DirectiveexComponent,
    CustompipePipe,
    LhookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
