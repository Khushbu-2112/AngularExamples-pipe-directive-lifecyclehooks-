import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterceptorexComponent } from './interceptorex/interceptorex.component';
import { PipeexComponent } from './pipeex/pipeex.component';
import { LifecyclehooksexComponent } from './lifecyclehooksex/lifecyclehooksex.component';
import { DirectiveexComponent } from './directiveex/directiveex.component';
import { NestedcompexComponent } from './nestedcompex/nestedcompex.component';
import { HttpuseComponent } from './httpuse/httpuse.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'interceptor',component:InterceptorexComponent},
  {path:'pipes',component:PipeexComponent},
  {path:'lifecyclehooks',component:LifecyclehooksexComponent},
  {path:'directives',component:DirectiveexComponent},
  {path:'nestedcomponent',component:NestedcompexComponent},
  {path:'http',component:HttpuseComponent},
  {path: '',pathMatch:'full', redirectTo: 'pipes'},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
