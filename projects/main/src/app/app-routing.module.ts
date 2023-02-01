import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { Subapp1Component } from './subapp1/subapp1.component';

const routes: Routes = [
  {
    path: 'subapp1',
    component: Subapp1Component,
    children: [
      {
        path: 'subroute',
        component: EmptyComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
