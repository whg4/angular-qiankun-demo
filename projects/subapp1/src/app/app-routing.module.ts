import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubRouteComponent } from './subroute/subroute.component';

const routes: Routes = [
  {
    path: 'subroute',
    component: SubRouteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: (window as any).__POWERED_BY_QIANKUN__ ? '/subapp1' : '/' }]
})
export class AppRoutingModule { }
