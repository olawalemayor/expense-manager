import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}
