import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.routing-module';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

@NgModule({
  declarations: [SinginComponent, SingupComponent],
  imports: [CommonModule, FormsModule],
  exports: [AuthRoutingModule],
  providers: []
})
export class AuthModule {}
