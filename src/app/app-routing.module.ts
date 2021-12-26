import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component'
import {UserDetailComponent} from './user-detail/user-detail.component'

// Routes是定义的一个type   export declare type Routes = Route[];
const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
