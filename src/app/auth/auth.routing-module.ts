import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'signup', component: SingupComponent },
      { path: 'signin', component: SinginComponent }
    ]
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class AuthRoutingModule {}
