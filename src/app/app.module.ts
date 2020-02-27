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
import { NestedcompexComponent } from './nestedcompex/nestedcompex.component';
import { JokecompComponent } from './jokecomp/jokecomp.component';
import { InterceptorexComponent } from './interceptorex/interceptorex.component';
import { MyInterceptor } from './myinterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { HttpuseComponent } from './httpuse/httpuse.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecordsService } from './records.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    OddDirective,
    PipeexComponent,
    LifecyclehooksexComponent,
    DirectiveexComponent,
    CustompipePipe,
    LhookComponent,
    NestedcompexComponent,
    JokecompComponent,
    InterceptorexComponent,
    HttpuseComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RecordsService,{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
