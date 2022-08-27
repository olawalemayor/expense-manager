import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule],
  exports: [],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule {}
